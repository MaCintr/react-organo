import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [temaState, setTemaState] = useState('#a60eec');
    const [secondTemaState, setSecondTemaState] = useState('#a60eec');

    const alterarContexto = (tema, mainColor, secondColor) => {
        setTemaState(mainColor);
        setSecondTemaState(secondColor);
    };

    return (
        <ThemeContext.Provider value={{ temaState, secondTemaState, alterarContexto }}>
            {children}
        </ThemeContext.Provider>
    );
};
