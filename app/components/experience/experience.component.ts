import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';

@Component({
	selector:'profile-experience',
    moduleId: module.id.toString(),
    templateUrl: 'experience.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class ExperienceComponent {
}