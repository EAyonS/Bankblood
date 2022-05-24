export class Certificate {
  id!: string;
  title!: string;
  authors!: string;
  subject!: string;
  url!: string;
  loadfile: File;
  certified: boolean;

  constructor(file: File) {
    this.loadfile = file;
    this.certified = false;
  }
}
