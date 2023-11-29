import { useState } from 'react'

export default function useBurgerMenu() {
    const [isBurgerOpen, setOpen] = useState(false);
    const handleBurger = () => setOpen(prev => !prev);
    const closeBurger = () => setOpen(() => false);

    return { isBurgerOpen, handleBurger, closeBurger }
}
