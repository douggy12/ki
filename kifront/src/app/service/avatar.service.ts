
import { Ng2ImgMaxService } from 'ng2-img-max/dist/src/ng2-img-max.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Ng2ImgToolsService } from 'ng2-img-tools';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  };


@Injectable()
export class AvatarService {
    private imgUrl = 'http://localhost:8080/img';

    constructor(private http: HttpClient, private ngITS: Ng2ImgToolsService) { }

    resizeImg(file: File): Observable<any> {
        return this.ngITS.resizeExactCropImage(file, 148, 148);
    }

    getImg(id: number): Observable<Object> {
        const url = `${this.imgUrl}/${id}`;
        return this.http.get<Object>(url).pipe(
            tap(_ => {
                console.log('done');
            })
        );
    }

    uploadImg(data: any, id: string): Observable<Object> {
        let formData: FormData = new FormData();
        formData.append('file', data);
        formData.append('id', id);
        const url = `${this.imgUrl}/post`;
        return this.http.post(url, formData).catch(this.handleError);
    }

    private handleError(error: Response | any) {
        return Observable.throw('API failed');
    }


}
