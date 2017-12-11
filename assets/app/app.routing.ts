import { Routes, RouterModule } from "@angular/router";
import { MessageComponent } from "./messages/message.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'auth', component: AuthenticationComponent},
    {path: 'messages', component: MessageComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);