/**
 * Using this import, we are getting from the react package useState and useEffect
 * useState = A hook that remembers a value across re-renders
 * useEffect = A hook that runs side-effects after component renders
 */
import { useState, useEffect } from 'react'

/**
 * Custom hook that all start with use
 * This custom hook will call other hooks that are coded inside such as useEffect or useState
 * targetNumber is the number we want the effect to last up to, in this case we want it to 151
 * duration is how long we want the effect to last to reach to the targetNumber, which in this case is 2 seconds
 * @param {any} targetNumber
 * @param {any} duration
 */
function useCountUp(targetNumber, duration = 2000) {

    /**
     * Here we can see how useState is being used
     * We have two items, count and setCount
     * count is what the currentValue is, setCount changes the value and triggers a re-render
     * useState is set at 0, which means out count starts at 0
     */
    const [count, setCount] = useState(0)

    /**
     * useEffect is part of the React package
     * This helps run side effects that can be:
         * - Setting a timer(setInterval, setTimeout)
         * - Subscribing to events (addEventListener, IntersectionObserver)
         * - Fetching data (fetch, axios)\
         * - Touching DOM directly
         * Logging to the console
     * useEffct makes sure that this effct runs only after the component renders, and then only re-renders when things change
     */
    useEffect(() => {

        /**
         * Here is where we create the logic for the count itself
         * We set the increment based off how long we want the duration to be until we reach the targetNumber
         * Then we set the interval so that it knows what the previous count was, and then can get incrementing from there
         * We then have an if statement so that we can have the logic to not continue once the targetNumber has been reached
         */
        const increment = targetNumber / (duration / 50)
        const intervalId = setInterval(() => {

            setCount(prevCount => {
                const next = prevCount + increment
                if (next >= targetNumber) {
                    clearInterval(intervalId)
                    return targetNumber
                }
                return next
            })
        }, 50)

        return () => {
            clearInterval(intervalId)
        }
    }, [targetNumber, duration])

    return count
    

}

/**
 * Makes this hook the file's main exported value,
 * importable via import useCountUp
 */
export default useCountUp