import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService {
	private APIUrl = 'https://raw.githubusercontent.com/mpvineesh/angular/master/traps.json';
	constructor(private http: Http) { 
	}
  
   
	private getSkills() {
		console.log(this.APIUrl);
		let u =  'http://my.local/angular/data/skills.json';
          return this.http.get(u).toPromise().then(response => response.json().data);
    }
	
	
	
	private getAbout() {
		console.log(this.APIUrl);
        return this.http.get(this.APIUrl).toPromise().then(response => response.json());
    }
	private getProjects() {
        localStorage.setItem('products', JSON.stringify(products));
    }
	
	
	
	
	
	
}