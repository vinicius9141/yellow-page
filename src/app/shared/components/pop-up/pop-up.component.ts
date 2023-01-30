import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Output() public showPopUpEmitter: EventEmitter<any> = new EventEmitter();
  @Input() public showPopUp: boolean = false;
  @Input() public popUpData = {
    title: 'Pousada Nosso senhor do bom jesus',
    address: 'Enredeço:Av. Padroeira do Brasil, N° 375, Centro',
    openingHours: '15:00',
    closingHours: '19:00',
    phone: '(12) 00000-0000',
  };

  constructor() {}

  ngOnInit(): void {}

  public closeModal(): void {
    this.showPopUpEmitter.emit();
    this.showPopUp = false;
  }
}
