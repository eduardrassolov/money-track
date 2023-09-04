import { useState } from 'react'

export default function useBurgerMenu() {
    const [isBurgerOpen, setOpen] = useState(false);
    const handleBurger = () => setOpen(prev => !prev);

    return { isBurgerOpen, handleBurger }
}
