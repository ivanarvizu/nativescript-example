import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService} from "./shared/user/user.service";

@Component({
  selector: "my-app",
    templateUrl: "pages/login/login.html",
    providers: [UserService],
    styleUrls: [
        "pages/login/login-common.css",
        "pages/login/login.css"
    ]
})
export class AppComponent {
    user: User;
    isLoggingIn = false;

    constructor(private userService: UserService) {
        this.user = new User();
    }
    submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }
    login() {
        // TODO: Define
    }
    signUp() {
        this.userService.register(this.user);
    }
}