import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjectInfo, ProjectService } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-project-selection',
    templateUrl: './project-selection.component.html',
    styleUrls: ['./project-selection.component.sass'],
})
export class ProjectSelectionComponent implements OnInit {
    public projects$: Observable<IProjectInfo[]>;
    constructor(private readonly projectService: ProjectService) {}

    ngOnInit(): void {
        this.projects$ = this.projectService.getProjects();
    }

    public trackByProjectId(project: IProjectInfo) {
        return project.id;
    }
}
