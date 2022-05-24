import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Certificate } from 'src/app/models/certificate.model';
import { CertificateService } from 'src/app/Services/certificate.service';

@Component({
  selector: 'app-certificate-details',
  templateUrl: './certificate-details.component.html',
  styleUrls: ['./certificate-details.component.css']
})
export class CertificateDetailsComponent implements OnInit {

  @Input() uploadedFile!: any;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
    certified= false;

  constructor(private fileService: CertificateService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.certified = this.uploadedFile.certified;
  }

  deleteFile(file: any): void {

    this.fileService.deleteFileDB(file).then(() => {
      this.refreshList.emit();
      alert('The tutorial was deleted successfully!');
    })
    .catch(err => console.log(err));
  }

  certify(status = true): void {
    if (this.uploadedFile.id) {
      console.log('esta charchando')
      this.fileService.updateFile(this.uploadedFile.id, { certified: status })
      .then(() => {
        this.uploadedFile.certified = status;
        this.certified = status;
        alert('The status was updated successfully!');
      })
      .catch(err => console.log(err));
    }
  }

}
