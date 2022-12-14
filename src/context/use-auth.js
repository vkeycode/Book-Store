
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const Provider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [name, setName] = useState()
    const [token, setToken] = useState('');
    const [isAuth, setIsAuth] = useState(null);
    const [isAdmin, setIsAdmin] = useState(null);
    const [mode, setMode] = useState("Light");

    const setAuth = data => {

        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.jwt);

        setIsAuth(true);
        setUser(data.user);
        setName(data.user.username)
        setToken(data.jwt);
        setIsAdmin(data.user.perm)

    }

    const userControl = () => {
        const userInfo = localStorage.getItem('user');
    
        if (userInfo) {
            const tokenInfo = localStorage.getItem('token');
            const userInfoX = JSON.parse(userInfo);
            
            setName(userInfoX.username)
            setUser(userInfoX);
            setToken(tokenInfo);
            setIsAdmin(userInfoX.perm);
            setIsAuth(true)
        }
        else {
            logout();
            setIsAdmin(false);
        }
    }
    const logout = () => {
        setUser({});
        setToken('');
        setIsAdmin(null);
        setName('')
        setIsAuth(null)
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate("/")
    }

    useEffect(() => {
        isAdmin === false && navigate("/") 
        isAdmin === true && navigate("/admin")
    }, [isAdmin]);

    useEffect(() => {
        userControl()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            name,
            token,
            isAdmin,
            isAuth,
            mode,
            setAuth,
            logout,
            setMode,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Provider;