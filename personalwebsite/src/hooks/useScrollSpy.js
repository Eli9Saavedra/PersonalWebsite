/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

function useScrollSpy(ids, options = {}) {
    const [activeId, setActiveId] = useState(ids[0] ?? null)
    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el) => el != null)

        if (elements.length === 0) return
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting)
                if (visible.length > 0) {
                    visible.sort((a, b) => a.target.offsetTop - b.target.offsetTop)
                    setActiveId(visible[0].target.id)
                }
            },
            {
                rootMargin: options.rootMargin ?? '-20% 0px -70% 0px',
                threshold: options.threshold ?? 0,
            }
        )

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [ids, options.rootMargin, options.threshold])

    return activeId
}

export default useScrollSpy