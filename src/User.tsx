import {createContext, useContext} from "react";
import {ensure} from "./ss-util";

export type User = {
    userName: string;
}

export const fetchUser = async (): Promise<User> => {
    return Promise.resolve({
        userName: "dave"
    });
};


export const UserCtx = createContext<User | null>(null);

export function useUser(): User {
    const user = useContext(UserCtx);
    return ensure(user);
}