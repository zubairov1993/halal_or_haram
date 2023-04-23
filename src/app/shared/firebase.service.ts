import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs'

import { environment } from 'src/environments/environment'

import { IItem } from '../main/components/registry/interfaces/registry.interface'

@Injectable({ providedIn: "root" })
export class FirebaseService {
  private readonly itemsPath = 'additives'
  countAddivities$: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  addivities$: BehaviorSubject<IItem[]> = new BehaviorSubject<IItem[]>([])

  constructor(
    private http: HttpClient,
  ) {}

  createAdditive(item: IItem): Observable<any> {
    return this.http.post<any>(`${environment.firebaseConfig.databaseURL}/additives.json`, item)
  }

  getAdditives(): Observable<IItem[]> {
    return this.http.get(`${environment.firebaseConfig.databaseURL}/additives.json`)
      .pipe(map((response: any) => {
        return Object.keys(response)
          .map(key => ({
            ...response[key],
            id: key,
          }))
      }))
  }

  getAdditiveById(id: string): Observable<IItem> {
    return this.http.get<IItem>(`${environment.firebaseConfig.databaseURL}/additives/${id}.json`)
    .pipe(map((post: IItem) => {
      return {
        ...post,
        id,
      }
    }))
  }

  deleteAdditive(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseConfig.databaseURL}/additives/${id}.json`)
  }

  updateAdditive(post: IItem): Observable<IItem> {
    return this.http.patch<IItem>(`${environment.firebaseConfig.databaseURL}/additives/${post.id}.json`, post)
  }

  // searchAdditives(keyword: string): Observable<IItem[]> {
  //   return this.http.get(`${environment.firebaseConfig.databaseURL}/additives.json`)
  //     .pipe(
  //       map((response: any) => {
  //         return Object.keys(response).map(key => ({
  //             ...response[key],
  //             id: key,
  //           }))
  //           .filter(item => item.namerus.toLowerCase().includes(keyword.toLowerCase()) ||
  //             item.namelat.toLowerCase().includes(keyword.toLowerCase()) ||
  //             item.additive.toLowerCase().includes(keyword.toLowerCase())
  //           );
  //       })
  //     );
  // }

  createProduct(item: IItem): Observable<any> {
    return this.http.post<any>(`${environment.firebaseConfig.databaseURL}/products`, item)
  }

  search(query: string): Observable<any[]> {
    const databaseUrl = `${environment.firebaseConfig.databaseURL}/additives.json?orderBy="additive"&equalTo="E${query}"`
    return this.http.get(databaseUrl).pipe(
      map((response: any) => {
        if (!response) return []

        return Object.keys(response).map(key => ({
          ...response[key],
          id: key,
        }));
      })
    );
  }



  searchAdditives(additive: string, nameRus: string): Observable<IItem[]> {
    return this.http.post(`${environment.firebaseConfig.databaseURL}/${this.itemsPath}/search.json`, {
      query: {
        orderByChild: 'additive',
        startAt: additive,
        endAt: additive + "\uf8ff",
        equalTo: nameRus
      }
    }).pipe(
      map((response: any) =>
        Object.keys(response)
          .map(key => ({ id: key, ...response[key] }))
      )
    );
  }


}
