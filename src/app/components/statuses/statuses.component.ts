import { Component, Input, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { VM } from '@app/app.component';
import { IStatus, StatusService } from '@app/services/status/status.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-statuses',
    templateUrl: './statuses.component.html',
    styleUrls: ['./statuses.component.sass'],
})
export class StatusesComponent implements OnInit, OnDestroy {
    @Input() vm: VM;
    private changesSubscription: Subscription;
    public statusForm: FormGroup;
    public statusControls: { status: IStatus; control: FormControl }[];
    constructor(private readonly statusService: StatusService) {}
    public ngOnInit() {
        this.statusControls = this.vm.statuses.map((x) => ({
            status: x,
            control: new FormControl(x.isSelected),
        }));
        this.statusForm = new FormGroup({
            statusControls: new FormArray(this.statusControls.map((x) => x.control)),
        });
        this.changesSubscription = this.statusForm.valueChanges
            .pipe(switchMap(() => this.setSelectedStatuses()))
            .subscribe();
    }

    public ngOnDestroy() {
        this.changesSubscription.unsubscribe();
    }

    public trackById: TrackByFunction<IStatus> = (idx, item) => {
        return item.id;
    };

    private setSelectedStatuses(): Observable<void> {
        const selected = this.statusControls
            .filter((x) => !!x.control.value)
            .map((x) => x.status.name);
        return this.statusService.setSelectedStatuses(selected);
    }
}
