// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: "",
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { },
    errorHandler: () => { },
    errorText: "",
})

export default function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    const [errorText1, setErrorText1] = useState("");

    function authenticate(token) {
        setAuthToken(token);
    }

    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
        errorText: errorText1,
        errorHandler: errorHandler
    };

    function errorHandler(text) {
        setErrorText1(text);
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}