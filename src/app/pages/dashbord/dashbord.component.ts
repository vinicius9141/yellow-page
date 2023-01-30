import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { RegisterFormService } from 'src/app/services/register-form.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})
export class DashbordComponent implements OnInit {
  public usersForApprove: any;
  public isApproved: boolean = false;
  public isLoading: boolean = true;
  public countRegistrations: Number = 0;

  constructor(private registerForm: RegisterFormService) {}

  ngOnInit(): void {
    this.getRegisterApprove();
  }

  public getRegisterApprove(): void {
    this.registerForm
      .getUsersAdmin()
      .pipe(
        map((actions) =>
          actions.map((a: any) => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      )
      .subscribe((data) => {
        this.countRegistrations = data.length;
        this.usersForApprove = data;
        this.isLoading = false;
      });
  }

  public approveRegister(id: string): void {
    this.registerForm.setApprovedRegister(id);
  }
}
