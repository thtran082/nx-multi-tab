export interface IListState {
    users: IUser[];
    status: StatusEnum;
    error: any;
  }

  export interface IUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url: string;
  }

  export enum StatusEnum {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
    IDLE = 'idle',
  }
