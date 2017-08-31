import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
	selector:'profile-projects',
    moduleId: module.id.toString(),
    templateUrl: 'projects.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class ProjectsComponent {
}