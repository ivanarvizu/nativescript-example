import { NgModule } from "@angular/core";
import {NativeScriptFormsModule} from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
      NativeScriptFormsModule,
      NativeScriptModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
