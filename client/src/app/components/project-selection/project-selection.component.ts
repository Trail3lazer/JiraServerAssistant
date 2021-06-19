import { Component, EventEmitter, Input, Output, TrackByFunction } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VM } from '@app/app.component';
import { IProjectInfo, ProjectService } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-project-selection',
    templateUrl: './project-selection.component.html',
    styleUrls: ['./project-selection.component.sass'],
})
export class ProjectSelectionComponent {
    @Input() vm: VM;
    public projectForm: FormGroup;
    public get projectControl() {
        return this.projectForm.get('projectControl');
    }
    constructor(private readonly projectService: ProjectService) {}
    ngOnInit(): void {
        this.projectForm = new FormGroup({
            projectControl: new FormControl(),
        });
    }

    public trackByProjectId: TrackByFunction<IProjectInfo> = (idx, item) => {
        return item.id;
    };

    public submit(): void {
        this.projectService.setProject(this.projectControl.value);
    }
}
