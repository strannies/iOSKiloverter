import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component'; 

import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    ToDoListComponent
  ],
  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
