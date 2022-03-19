import { Inject, Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { AppConfig, APP_CONFIG_URL } from '@shared-utils-environments';
import { IMultiTabMainState, IMultiTabUser, StatusEnum } from './main.state';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable()
export class MultitabMainStore extends ComponentStore<IMultiTabMainState> {

  public users$ = this.select((s) => s.users);
  public status$ = this.select((s) => s.status);
  public error$ = this.select((s) => s.error);

  public vm$ = this.select(
    this.users$,
    this.status$,
    this.error$,
    (users, status, error) => ({ users, status, error }),
    { debounce: true }
  );

  public loadUsers = this.effect<void>((req$) =>
    req$.pipe(
      tap(() => this.patchState({ status: StatusEnum.LOADING, error: null })),
      switchMap((req) => {
        return this.getUsersApi().pipe(
          tapResponse(
            (response) => {
              this.patchState({
                users: response,
                status: StatusEnum.SUCCESS,
              });
            },
            (error) => {
              this.patchState({
                status: StatusEnum.ERROR,
                error,
              });
            }
          )
        );
      })
    )
  );

  private getUsersApi(): Observable<IMultiTabUser[]> {
    return this.httpClient.get<IMultiTabUser[]>(`${this.config.baseURL}/users`);
  }

  constructor(
    @Inject(APP_CONFIG_URL) private config: AppConfig,
    protected readonly httpClient: HttpClient
  ) {
    super({ users: [], status: StatusEnum.IDLE, error: null });
    this.loadUsers();
  }
}
