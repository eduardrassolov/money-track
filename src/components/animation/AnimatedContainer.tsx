import { motion } from "framer-motion";

interface IAnimate {
    children: React.ReactNode;
    direction?: IDirection;
    duration?: number;
    delay?: number;
    animateOnStart?: boolean;
}

interface IDirection {
    hidden: { x?: number, y?: number };
    visible: { x?: number, y?: number };
}

const defaultDirection = {
    hidden: { x: 0 },
    visible: { x: 0 }

}

export default function AnimatedContainer({children, direction = defaultDirection, duration = 0.8, delay = 0.2, animateOnStart = false}: IAnimate) {

    return (
        <motion.div
                variants={{
                    hidden: { opacity: 0, ...direction.hidden },
                    visible: { opacity: 1, ...direction.visible  }
                }}
                initial="hidden"
                whileInView={"visible"}
                animate={animateOnStart ? "visible" : ""}
                viewport={{once: true}}
                transition={{ duration, delay}}
        >
                {children}
        </motion.div>
    )
}
