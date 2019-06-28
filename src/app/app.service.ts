import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    isExpand : boolean = true;

    constructor() {}

    initExpand() {
        if(screen.availWidth < 768) {
            this.isExpand = false;
        }
    }

    setExpand(expand : boolean) {
        this.isExpand = expand;
    }
}
