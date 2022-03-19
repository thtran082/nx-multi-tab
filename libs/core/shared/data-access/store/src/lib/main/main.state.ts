export interface IMultiTabMainState {
  // TODO:
  users: IMultiTabUser[];
  status: StatusEnum;
  error: any;
}

export interface IMultiTabUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
}

export enum StatusEnum {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
  IDLE = 'idle',
}
