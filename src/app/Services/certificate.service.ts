import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize, Observable } from 'rxjs';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private basePath = '/files';
  filesRef: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.filesRef = db.collection(this.basePath);
  }

  searchFiles(term: string): Observable<any[]> {
    console.log('a');
    if (term == '') {
      return this.getFiles();
    }
    return this.db
      .collection(this.basePath, (ref) =>
        ref
          .orderBy('title')
          .startAt(term)
          .endAt(term + '\uf8ff')
      )
      .valueChanges();
  }

  pushFileToStorage(file: Certificate): Observable<number | undefined> {
    const filePath = `${this.basePath}/${file.loadfile.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file.loadfile);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downLoadURL) => {
            file.url = downLoadURL;
            file.title = file.loadfile.name;
            this.saveFileData(file);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  saveFileData(file: Certificate): any {
    const { loadfile, ...specialFile } = file;
    return this.filesRef.add({ ...specialFile });
  }

  getFiles(): Observable<any[]> {
    return this.filesRef.valueChanges({ id: 'id' }) as Observable<any[]>;
    // return this.db.list(this.basePath, (ref) => ref.limitToLast(numberItems));
  }

  deleteFile(file: Certificate): void {
    this.deleteFileDB(file.id)
      .then(() => {
        this.deleteFileStorage(file.title);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

  deleteFileDB(id: string): Promise<void> {
    return this.filesRef.doc(id).delete();
  }

  updateFile(id: string, data: any): Promise<void> {
    return this.filesRef.doc(id).update(data);
  }
}
