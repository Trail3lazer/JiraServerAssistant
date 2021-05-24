import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { bufferTime, map, tap } from 'rxjs/operators';
import { IProjectInfo, ProjectService } from 'src/app/services/project/project.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
    public vm$;
    private projects$ = this.projectService.getProjects();
    constructor(
        private readonly projectService: ProjectService,
        private readonly detector: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.vm$ = combineLatest([this.projects$]).pipe(
            map(([projects]) => {
                return { projects };
            }),
            tap(console.log)
        );

        this.detector.detectChanges();
    }

    public selectProject(project: IProjectInfo) {
        this.projectService.setProject(project);
    }
}
