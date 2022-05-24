import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/models/certificate.model';
import { CertificateService } from 'src/app/Services/certificate.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.css']
})
export class AddCertificateComponent implements OnInit {

  submitted = false;
  selectedFiles?: FileList;
  currentUpload?: Certificate;
  percentage = 0;

  constructor(private fileService: CertificateService) {}

  ngOnInit(): void {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;
      if (file) {
        this.currentUpload = new Certificate(file);
        this.fileService.pushFileToStorage(this.currentUpload).subscribe(
          (percentage) => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }

}
