import { useState, useEffect } from 'react'

function useCountUp(targetNumber, duration = 2000) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count === targetNumber) return
        const increment = targetNumber / (duration / 50)
        setInterval(() => {
            setCount(prevCount => prevCount + increment)
        }, 50)
    }, [targetNumber, duration])

    return count
}

export default useCountUp