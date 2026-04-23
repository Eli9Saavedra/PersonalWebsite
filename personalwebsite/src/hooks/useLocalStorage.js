import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        /**
         * Step 1: The lazy initializer
         * When application is started, check to see if a value is already there,
         * if not, then we return the inital value.
         */
        try {
            const saved = localStorage.getItem(key)
            if (saved === null) return initialValue
            return JSON.parse(saved)
        }
        catch {
            return initialValue
        }
    })

    /**
     * Step 2: Sync to localStorage on changes
     * This effect will be triggered whenever the value is changed, 
     * and then it will be saved to the localStorage
     */
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])  


    /**
     * Step 3: Return the tuple (a list with exaclty two things in it, in a specific order)
     */
    return [value, setValue]
}