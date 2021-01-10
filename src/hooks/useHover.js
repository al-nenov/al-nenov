import { useState, useEffect, useRef } from 'react'

const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const enter = () => {
        setHovered(true)
    }

    const leave = () => {
        setHovered(false)
    }

    useEffect(() => {
        const current = ref.current
        current.addEventListener('mouseenter', enter)
        current.addEventListener('mouseleave', leave)

        return () => {
            current.removeEventListener('mouseenter', enter)
            current.removeEventListener('mouseleave', leave)
        }
    }, [])

    return [hovered, ref]
}

export default useHover
