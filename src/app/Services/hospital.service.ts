import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { HospitalUser } from '../models/hospitalusers.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
 
  private dbPath = '/hospitalusers';
  huserRef: AngularFirestoreCollection<HospitalUser>;
  constructor(private db: AngularFirestore) {
    this.huserRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<HospitalUser> {
    return this.huserRef;
  }
  create(tutorial: HospitalUser): any {
    return this.huserRef.add({ ...tutorial });
  }
  update(id: string, data: any): Promise<void> {
    return this.huserRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.huserRef.doc(id).delete();
  }
}