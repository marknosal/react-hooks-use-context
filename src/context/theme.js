import React, { useState } from 'react';

const ThemeContext = React.createContext();

function ThemeProvider({children}) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    const [theme, setTheme] = useState(null);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }