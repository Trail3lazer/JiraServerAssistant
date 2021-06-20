import { Component, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { VM } from '@app/app.component';
import { ProjectService } from '@app/services/project/project.service';
import { StatusService } from '@app/services/status/status.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnChanges {
    @Input() vm: VM;
    @ViewChild('titleRef') titleRef;
    public dropdownHidden = true;
    public selectedStatuses: string[];
    constructor(
        private readonly authService: AuthService,
        private readonly statusService: StatusService,
        private readonly projectService: ProjectService
    ) {}
    public ngOnChanges() {
        this.selectedStatuses = this.vm.statuses.reduce((arr, cur) => {
            if (cur.isSelected) {
                arr.push(cur.name);
            }
            return arr;
        }, []);
    }
    public signOut() {
        this.authService.signOut();
    }
    public toggleStatuses() {
        this.statusService.toggleStatusShown();
    }
    public deleteProject() {
        this.projectService.deleteProject().subscribe();
    }
    public deleteUrl() {
        this.authService.deleteUrl();
    }
    
    @HostListener('document:click', ['$event'])
    public hideDropdown(event: any) {
        if (this.dropdownHidden && this.titleRef.nativeElement.contains(event.target)) {
            this.dropdownHidden = !this.dropdownHidden;
        } else {
            this.dropdownHidden = true;
        }
    }
}
