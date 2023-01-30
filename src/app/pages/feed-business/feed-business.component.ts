import { Component, OnInit } from '@angular/core';
import { RegisterFormService } from 'src/app/services/register-form.service';

@Component({
  selector: 'app-feed-business',
  templateUrl: './feed-business.component.html',
  styleUrls: ['./feed-business.component.scss'],
})
export class FeedBusinessComponent implements OnInit {
  public allUsers: any;
  public isLoading: boolean = true;

  public showPopUp: boolean = false;

  public popUpData = {
    title: '',
    address: '',
    openingHours: '15:00',
    closingHours: '19:00',
    phone: '(12) 00000-0000',
  };

  constructor(private registerForm: RegisterFormService) {}

  ngOnInit(): void {
    this.getRegistered();
  }

  public getRegistered(): void {
    this.registerForm.getUsers().subscribe((data) => {
      this.allUsers = data;
      console.log(this.allUsers);
      this.isLoading = false;
    });
  }

  public showMore(index: number): void {
    this.allUsers[index];
    this.popUpData.title = this.allUsers[index].name;
    this.popUpData.address = this.allUsers[index].address;
    this.showPopUp = true;
  }

  public closePopUp(): void {
    this.showPopUp = false;
  }
}
