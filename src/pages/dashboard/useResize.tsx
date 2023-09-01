import { useEffect, useState } from 'react'

export default function useResize() {
    const [isSmallScreen, setSmallScreen] = useState(window.innerWidth <= 750);

    const handleResize = () => {
        setSmallScreen(() => window.innerWidth <= 750);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return { isSmallScreen }
}
