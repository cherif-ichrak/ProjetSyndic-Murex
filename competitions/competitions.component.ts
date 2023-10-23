import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-competitions",
  templateUrl: "./competitions.component.html",
  styleUrls: ["./competitions.component.css"],
})
export class CompetitionsComponent {
  selectedChoice: string = "";
  constructor(private modalService: NgbModal) {}

  openIdentification(contentIdentification: any) {
    // Ouvrez votre popup ici en utilisant votre propre code
    const modalRef = this.modalService.open(contentIdentification, {
      size: "xl",
    });

    // Souscrivez-vous à l'événement de fermeture du popup pour obtenir le résultat
    modalRef.result.then((result) => {
      if (result) {
        // Traitez le résultat ici si nécessaire
        this.selectedChoice = result; // Mettez à jour la valeur du choix de l'utilisateur
      }
    });
  }
}
