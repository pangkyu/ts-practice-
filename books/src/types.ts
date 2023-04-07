import { Reducer, AnyAction } from "redux";

export type LoginReqType = {
  email: string;
  password: string;
};

export interface RootState {
  auth: AuthState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}
