/**
 * manage user state in reducer
 * By   @2024/1/3
 */

import {
  getObjectFromLocalStorage,
  isServer,
  SessionKey,
  syncToLocalStorage,
  TokenKey,
  User,
  UserKey,
  UserSession,
} from "@deps/core";
import { createContext, ReactNode } from "react";
import { ImmerReducer, useImmerReducer } from "use-immer";

interface UserState {
  /** login token */
  token?: string;
  isLogin?: boolean;
  /** session */
  session?: UserSession;
  user?: User;
}

export interface IUserAction {
  type: "login" | "refresh" | "logout" | "updateUser" | "updateSession";
  payload?: Partial<UserSession>;
}

interface IUserContext {
  userState: UserState;
  userDispatch: (action: IUserAction) => void;
}

export const UserContext = createContext<IUserContext>({
  userDispatch: () => {},
  userState: {},
});

const reducer: ImmerReducer<UserState, IUserAction> = (draft, action) => {
  switch (action.type) {
    case "updateSession": {
      draft.session = action.payload as UserSession;
      break;
    }
    case "login": {
      draft.token = (action?.payload as UserSession)?.access_token || "";
      draft.user = action?.payload as UserSession;
      draft.isLogin = true;
      break;
    }
    case "logout": {
      draft.token = "";
      draft.isLogin = false;
      break;
    }
    case "updateUser": {
      draft.user = { ...draft.user, ...(action.payload as UserSession) };
      break;
    }
    default:
      throw new Error("Invalid action type for user.state");
  }
  syncUserToLocalStorage(draft);
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useImmerReducer(reducer, undefined, function () {
    const token = isServer
      ? undefined
      : localStorage.getItem(TokenKey) || undefined;
    return {
      user: getObjectFromLocalStorage<User>(UserKey, undefined),
      token,
      isLogin: !!token,
      session: getObjectFromLocalStorage<UserSession>(SessionKey, undefined),
    };
  });
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function syncUserToLocalStorage(val: UserState) {
  if (isServer) return;
  syncToLocalStorage(UserKey, val.user);
  syncToLocalStorage(TokenKey, val.token);
  syncToLocalStorage(SessionKey, val.session);
}
