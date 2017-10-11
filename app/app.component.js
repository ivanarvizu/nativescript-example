"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n      <StackLayout>\n          <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n          <TextField hint='Email Address' keyboardType='email'\n                     autocorrect='false' autocapitalizationType='none' [(ngModel)]=\"email\"></TextField>\n          <TextField hint='Password' secure='true'></TextField>\n          <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n          <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n\n      </StackLayout>",
        styleUrls: [
            "pages/login/login-common.css",
            "pages/login/login.css"
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDLElBQWEsWUFBWTtJQWpCekI7UUFrQkksVUFBSyxHQUFHLCtCQUErQixDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBUXZCLENBQUM7SUFORyw2QkFBTSxHQUFOO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksWUFBWTtJQWpCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxrbUJBU1M7UUFDakIsU0FBUyxFQUFFO1lBQ1AsOEJBQThCO1lBQzlCLHVCQUF1QjtTQUMxQjtLQUNKLENBQUM7R0FDVyxZQUFZLENBVXhCO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL2xvZ29fbG9naW5cIiBzdHJldGNoPVwibm9uZVwiIGhvcml6b250YWxBbGlnbm1lbnQ9XCJjZW50ZXJcIj48L0ltYWdlPlxuICAgICAgICAgIDxUZXh0RmllbGQgaGludD0nRW1haWwgQWRkcmVzcycga2V5Ym9hcmRUeXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PSdmYWxzZScgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT0nbm9uZScgWyhuZ01vZGVsKV09XCJlbWFpbFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgIDxUZXh0RmllbGQgaGludD0nUGFzc3dvcmQnIHNlY3VyZT0ndHJ1ZSc+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1wiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nXCIgKHRhcCk9XCJ0b2dnbGVEaXNwbGF5KClcIj48L0J1dHRvbj5cblxuICAgICAgPC9TdGFja0xheW91dD5gLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICBcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIixcbiAgICAgICAgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIlxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBlbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy5lbWFpbCk7XG4gICAgfVxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICB9XG59Il19