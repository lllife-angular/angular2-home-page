

import {Component, OnInit} from "angular2/core";
import {StateService} from "../common/state.service";
@Component({
    selector: "home",
    templateUrl: "app/home/home.component.html"
})
export class HomeComponent implements  OnInit {
    title = "Home Page";
    body = "This is th about home body";
    message: string;

    constructor(private state: StateService) {

    }

    ngOnInit():any {
        this.message = this.state.getMessage();
    }

    updateMessage(m: string) {
        this.state.setMessage(m);
    }
}