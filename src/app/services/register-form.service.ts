import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterFormService {
  constructor(private afs: AngularFirestore) {}

  public saveRegisterFrom(registerForm: any): void {
    this.afs.collection('Register').add(registerForm);
  }

  public getUsers(): Observable<any> {
    return this.afs
      .collection('Register', (ref) => ref.where('approved', '==', true))
      .valueChanges();
  }

  public getUsersAdmin(): Observable<any> {
    return this.afs
      .collection('Register', (ref) => ref.where('approved', '==', false))
      .snapshotChanges();
  }

  public setApprovedRegister(id: string): void {
    this.afs.collection('Register').doc(id).update({ approved: true });
    console.log(this.afs.collection('Register'));
  }

  public getHotel(): Observable<any> {
    return this.afs
      .collection('Register', (ref) =>
        ref.where('typeBussiness', '==', 'hotel')
      )
      .snapshotChanges();
  }
}
