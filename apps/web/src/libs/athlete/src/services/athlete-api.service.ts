import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@sacd/core/environments';
import { AthleteRequest } from '@sacd/core/http/requests';
import { AthleteResponse } from '@sacd/core/http/responses';
import { DataTableApi } from '@web/libs/shared/ui/tables';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AthleteApiService extends DataTableApi<AthleteResponse> {
  private readonly _apiUrl = `${environment.apiUrl}/athlete`;

  constructor(private readonly _http: HttpClient) {
    super();
  }

  public override getData(): Observable<AthleteResponse[]> {
    return this._http.get<AthleteResponse[]>(this._apiUrl);
  }

  public create(athlete: AthleteRequest): Observable<AthleteResponse> {
    return this._http.post<AthleteResponse>(this._apiUrl, athlete);
  }
}
