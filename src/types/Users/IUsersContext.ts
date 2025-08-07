import type { IUser, IRegisterPayload } from "./index";

import type { ApiResponse } from "../ApiResponse";
import type { ILoginPayload } from "./ILoginPayload";

export interface IUsersContext {
    user?: IUser;
    setUser: (user?: IUser) => void;
    isAuthenticated: boolean;
    userRegister: (payload: IRegisterPayload) => Promise<ApiResponse<null>>;
    tryLogin: (payload: ILoginPayload) => Promise<boolean>;
    logout: ()=> void
}
