import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Service } from './service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private service: Service) { }
	masterData: Array<Object> = []
	maxColumnSize: number = 0;
	tableColumns: Array<string> = ['done', 'name', 'due_date', 'rating', 'recurrence', 'recurrence_interval', 'description']
	title = 'assisto-test';

	// refresh button
	refresh(): void {
		this.service.getJsonData().subscribe({
			next: (response: Object) => {
				this.masterData = Object.values(response)
			},
			error: (error: HttpErrorResponse) => {
				console.log(error)
				alert(error.message)
			}
		})
	}

	ngOnInit(): void {
		this.refresh()
	}
}
