import { useState, useEffect, useRef } from 'react'
import useCountUp from '../hooks/useCountUp'

/**
 * Renders a single stat tile on the Project Details page.
 * If the stat's value is number, it animates from 0 up to the target using the useCountUp hook
 * If the stat's value is a string, it skips the animation and renders the value as-is
 * @param {any} param0
 * @returns
 */
function StatTile({ stat }) {
    const [hasStarted, setHasStarted] = useState(false)
    const tileRef = useRef(null)
    const isNumeric = typeof stat.value === 'number'
    const count = useCountUp(isNumeric && hasStarted ? stat.value : 0, stat.duration)

    useEffect(() => {
        if (!tileRef.current || hasStarted) return
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setHasStarted(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(tileRef.current)
        return () => observer.disconnect()
    }, [hasStarted])

    return (
        <div className="stat-tile" ref={tileRef}>
            <div className="stat-value">
                {isNumeric ? Math.round(count) : stat.value}
                {stat.suffix}
            </div>
            <div className="stat-label">
                {stat.label}
            </div>
        </div>
    )
}

export default StatTile