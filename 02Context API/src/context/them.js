import { useContext , createContext } from "react";

export const ThemContext = createContext({
        ThemMode : "light",
        darkThem : () => {},
        lightThem : () => {},
})

export const ThemeProvider = ThemContext.Provider;

export default  useThem = () =>{

    return useContext(ThemContext);
}