import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    constructor() { }

    ngOnInit() {}
}
