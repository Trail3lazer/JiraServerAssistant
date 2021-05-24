import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProjectInfo } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-project-selection',
    templateUrl: './project-selection.component.html',
    styleUrls: ['./project-selection.component.sass'],
})
export class ProjectSelectionComponent {
    @Input() projects: IProjectInfo[];
    @Output() selectedProject = new EventEmitter<IProjectInfo>();

    public projectForm: FormGroup;
    public get projectControl() {
        return this.projectForm.get('projectControl');
    }
    ngOnInit(): void {
        this.projectForm = new FormGroup({
            projectControl: new FormControl(),
        });
    }

    public trackByProjectId(project: IProjectInfo) {
        return project.id;
    }
    public submit(event: any): void {
        event.preventDefault();
        this.selectedProject.emit(this.projectControl.value);
    }
}
