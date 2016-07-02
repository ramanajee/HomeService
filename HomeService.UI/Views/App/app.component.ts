import { Component} from '@angular/core';

@Component({
    selector:'main-app',
    template:'<h1> {{pageTitle}} </h1>'
})

export class AppComponent{
    pageTitle : string = "Hello World";
}