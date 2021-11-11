

export const variantsForCardsUp = {
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 0.6,
            ease: "easeInOut",
        }
    }
}

export const variantsForCardsDown = {
    initial: {
        y: -60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 0.6,
            ease: "easeInOut",
        }
    }
}

export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.7
        },
    }
}

export const variantsForButtonsLandingPage = {
    initial:{
        y: 0,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity: 1,

        transition: {
            duration: 3.5,
            ease: "easeInOut"
        }
    }
}