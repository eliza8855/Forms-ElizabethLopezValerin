import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalNuevoEstudianteComponent } from './componentes/modal-nuevo-estudiante/modal-nuevo-estudiante.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms-ElizabethLopezValerin';
  modalRef : NgbModalRef

  constructor(private modalService: NgbModal){}

  open(){
    this.modalRef = this.modalService.open(ModalNuevoEstudianteComponent , {size: 'lg'});
  }
}
