import { motion, useAnimation, useAnimationControls } from "framer-motion";

interface IAnimate {
    children: React.ReactNode;
    direction?: number;
}

const defaultDirection = {
    hidden: { x: 0 },
    visible: { x: 0 }

}

export default function AnimatedContainer({children, direction = defaultDirection, duration = 0.8}: IAnimate) {

    return (
        <motion.div
                variants={{
                    hidden: { opacity: 0, ...direction.hidden },
                    visible: { opacity: 1, ...direction.visible  }
                }}

                initial="hidden"
                whileInView={"visible"}
                viewport={{once: true}}
                transition={{ duration, delay: 0.2}}
        >
                {children}
        </motion.div>
    )
}
