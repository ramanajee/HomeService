import { Component} from '@angular/core';

@Component({
    selector:'main-app',
    template:'{{pageTitle}}'
})

export class AppComponent{
    pageTitle : string = "Home Service";
}