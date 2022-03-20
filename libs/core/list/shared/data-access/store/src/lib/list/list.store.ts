import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {ComponentStore, tapResponse} from '@ngrx/component-store';
import {delay, Observable, of, switchMap, tap} from 'rxjs';
import {IListState, IUser, StatusEnum} from './list.state';
import {AppConfig, APP_CONFIG_URL} from '@shared-utils-environments';

@Injectable()
export class ListStore extends ComponentStore<IListState> {
  constructor(protected readonly httpClient: HttpClient,
              @Inject(APP_CONFIG_URL) private config: AppConfig) {
    super(<IListState>{});
    this.loadUser(this.usersStorage$);
  }

  public readonly users$ = this.select((s) => s.users);
  public readonly error$ = this.select((s) => s.error);
  public readonly status$ = this.select((s) => s.status);
  public readonly vm$ = this.select(
    this.users$,
    this.error$,
    this.status$,
    (users, error, status) => ({users, error, status}),
    {debounce: true}
  );

  public get usersStorage$(): Observable<IUser[]> {
    try {
      return of(JSON.parse(sessionStorage.getItem('user_storage') || "[]") as IUser[])
    } catch {
      return of([]);
    }
  }

  public set userStorage(data: IUser[]) {
    sessionStorage.setItem('user_storage', JSON.stringify(data));
  }

  loadUser = this.effect<IUser[]>((req$) =>
    req$.pipe(
      switchMap((req) => {
        if (req.length) {
          this.patchState({users: req});
        } else {
          this.loadUserListApi();
        }
        return of(req);
      })
    )
  );

  loadUserListApi = this.effect<void>((req$) =>
    req$.pipe(
      switchMap(() =>
        this.httpClient.get<IUser[]>(`${this.config.baseURL}/users`).pipe(
          tap(
            () => this.patchState({status: StatusEnum.LOADING})
          ),
          delay(2000),
          tapResponse(
            (response) => {
              response = response.map(item => {
                const {id, login, node_id, avatar_url, url, html_url} = item;
                return {id, login, node_id, avatar_url, url, html_url};
              })
              this.userStorage = response;
              this.patchState({ users: response, status: StatusEnum.SUCCESS});
            },
            (error) => {
              this.patchState({error});
            }
          )
        )
      )
    )
  );
}
