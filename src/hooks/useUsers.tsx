import { useContext } from "react";
import UsersContext from "../context/UsersProvider";
import type { IUsersContext } from "../types/Users";

const useUsers = (): IUsersContext => {
    const context = useContext(UsersContext);
    if (!context) throw new Error("El hook se debe usar dentro de un UsersProvider");
    return context;
};

export default useUsers;
