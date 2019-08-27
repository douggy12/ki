
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Ng2ImgMaxService } from 'ng2-img-max/dist/src/ng2-img-max.service';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Ng2ImgToolsService } from 'ng2-img-tools';
import {  DomSanitizer } from '@angular/platform-browser';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  };
 


@Injectable()
export class AvatarService {
    private imgUrl = environment.kibackUrl + 'img';

    private imageType = 'data:image/*;base64,';

    options: any = {'withCredentials' : 'true'};

    constructor(private http: HttpClient, private ngITS: Ng2ImgToolsService, private sanitizer: DomSanitizer) { }

    resizeImg(file: File): Observable<any> {
        return this.ngITS.resizeExactCropImage(file, 148, 148);
    }

    getImg(id: number): Observable<any> {
        const url = `${this.imgUrl}/${id}`;
        return this.http.get<any>(url);
    }
    base64toUrl(data): any {
        return this.sanitizer.bypassSecurityTrustUrl(this.imageType + data);
    }

    uploadImg(data: any, id: string): Observable<Object> {
        const formData: FormData = new FormData();
        formData.append('file', data);
        formData.append('id', id);
        const url = `${this.imgUrl}/post`;
        return this.http.post(url, formData, this.options).pipe(catchError(this.handleError));
    }

    private handleError(error: Response | any) {
        return observableThrowError('API failed');
    }


}
