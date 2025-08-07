import { createContext, useState, useEffect } from "react";
import type { ProviderProps } from "../types/ProviderProps";
import { loginUser, registerUser } from "../api/users";
import type { IRegisterPayload, IUser, IUsersContext } from "../types/Users";
import type { ILoginPayload } from "../types/Users/ILoginPayload";

const UsersContext = createContext<IUsersContext | undefined>(undefined);

export const UsersProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Función para registrar usuario
    const userRegister = async (payload: IRegisterPayload) => {
        const response = await registerUser(payload);
        return response;
    };

    const tryLogin = async (payload: ILoginPayload) => {
        const { success, data } = await loginUser(payload)
        if (success) {
            setIsAuthenticated(true);
            setUser(data);
            // Guardar en localStorage
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isAuthenticated', 'true');
            return true;
        } else {
            return false;
        }
    };

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        setUser(undefined);
        setIsAuthenticated(false);
    };

    // Restaurar sesión desde localStorage al cargar el provider
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedAuth = localStorage.getItem('isAuthenticated');
        if (storedUser && storedAuth === 'true') {
            try {
                setUser(JSON.parse(storedUser));
                setIsAuthenticated(true);
            } catch {
                setUser(undefined);
                setIsAuthenticated(false);
            }
        }
    }, []);

    const value: IUsersContext = {
        user,
        setUser,
        isAuthenticated,
        userRegister,
        tryLogin,
        logout
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
