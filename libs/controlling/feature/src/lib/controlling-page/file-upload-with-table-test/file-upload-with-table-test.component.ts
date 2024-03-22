import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, Observable, of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { FileUploadWithTableComponent } from '@gepardec/ngx-gepardec-mat';

@Component({
  selector: 'mega-controlling-feature-file-upload-with-table-test',
  templateUrl: './file-upload-with-table-test.component.html',
  styleUrls: ['./file-upload-with-table-test.component.scss'],
  standalone: true,
  imports: [MatCardModule, FileUploadWithTableComponent],
})
export class FileUploadWithTableTestComponent {
  constructor(private snackbar: MatSnackBar) {}

  delete(file: File | undefined): Observable<boolean> {
    this.snackbar.open(`Datei '${file?.name}' gelöscht`, 'OK', {
      duration: 2000,
    });
    return of(true).pipe(delay(this.randomDelay));
  }

  upload(file: File | undefined): Observable<File> {
    this.snackbar.open(`Datei '${file?.name}' hochgeladen`, 'OK', {
      duration: 2000,
    });
    // call dedicated web service to upload a single file
    return of(file ?? ({} as unknown as File)).pipe(delay(this.randomDelay));
  }

  uploadAll(files: Array<File> | undefined): Observable<Array<File>> {
    const fileNames = files?.map((file) => file.name).join(', ');
    this.snackbar.open(`Dateien '${fileNames}' hochgeladen`, 'OK', {
      duration: 2000,
    });
    // call dedicated web service to upload all files
    return of(files ?? []).pipe(delay(this.randomDelay));
  }

  get randomDelay(): number {
    return Math.random() * 5000 + 1000;
  }
}
