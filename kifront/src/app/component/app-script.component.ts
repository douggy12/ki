import { ContextService } from './../service/Context.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-script',
    templateUrl: 'app-script.component.html'
})

export class AppScriptComponent implements OnInit {
    user: Object;

    constructor(private context: ContextService) {
    }
    ngOnInit() {
    }
}
