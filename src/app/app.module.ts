import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';

import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
