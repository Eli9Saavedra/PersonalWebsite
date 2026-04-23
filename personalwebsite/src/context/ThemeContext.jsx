import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

/**
 * ThemeContext provides a way to manage light/dark theme across the app.
 * Reacts factory for creating a context object
 * Null is a default value, mostly a saftey fallback if componet is outside the provider 
 * With the useContext hook, we can now access .Provider and .Consumer  properties
 */
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {

    const getInitialTheme = () => 
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    

    const [theme, setTheme] = useLocalStorage('theme', getInitialTheme())

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')


    /**
     * Real React componet that ships with the Context object
     * The value={} is what will be accessible to any componet that calls to this context
     * {children} is whatever the JSX gets passed inside the wrapper
     */
    return (
        <ThemeContext.Provider value={{theme, toggleTheme} }>
            {children}
        </ThemeContext.Provider>
    )

}
export function useTheme() {
    return useContext(ThemeContext)

}