import { Component } from '@angular/core';

import { fadeInAnimation } from '../../_animations/index';
import { ProfileService } from '../../services/index';

@Component({
	selector:'profile-basic-info',
    moduleId: module.id.toString(),
    templateUrl: 'basic-info.component.html',
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class BasicInfoComponent {
	aboutMe  = '';
	constructor(profileService:ProfileService){
		 //profileService.getAbout().then(  data => this.aboutMe = data );
	}	
}