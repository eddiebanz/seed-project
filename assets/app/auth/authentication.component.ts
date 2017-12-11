import { Component } from "@angular/core";

@Component({
    selector: 'app-authentication',
    templateUrl: `
    <header class="row spacing">
        <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-tabs">
                <li><a>Sigin</a></li>
                <li><a>Sigup</a></li>
                <li><a>Logout</a></li>
            </ul>
        </nav>
    </header>
    
    `      
})
export class AuthenticationComponent {

}