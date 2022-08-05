import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalNuevoEstudianteComponent } from './componentes/modal-nuevo-estudiante/modal-nuevo-estudiante.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalNuevoEstudianteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalNuevoEstudianteComponent]
})
export class AppModule { }
