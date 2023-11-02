import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Service {
	constructor(private http: HttpClient) { }

    flaskApiURL: string = 'http://localhost:5000'

	public getJsonData() {
		return this.http.get(this.flaskApiURL + '/get')
	}
}