export const variantsForCardsUp = {
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 1.0,
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
            duration: 1.0,
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

export const variantsForDivButtonsLandingPage = {
    initial: {
        y: 0,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 4,
            ease: "easeInOut"
        }
    }
}

export const variantsForButtonsLandingPage = {
    initial: {},
    animate: {
        x: [20, 0, 20],
        transition: {
            delay: 2,
            duration: 1,
            ease: "linear",
            repeat: Infinity
        }
    }
}

export const variantsForWrapperButtonScroll = {
    initial: {
        y: -1000
    },
    animate: {
        y: 0,
        transition: {
            delay: 1.5,
            duration: 6.5,
            type: "spring"
        },
    },
}

export const variantsForButtonScroll = {
    initial: {},
    animate: {
        y: [25, 0, 25],
        transition: {
            duration: 1.6,
            ease: "linear",
            repeat: Infinity,
        }
    },
}

export const variantsForImageCarouselLandingPage = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            delay: 1,
            duration: 3.5,
            ease: "easeInOut"
        }
    }
}

export const variantsForTitleInLandingPage = {
    initial: {
        opacity: 0,
        y: '-100px'
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2.5,
            type: 'spring',
            repeat: Infinity,
            duration: 2,
            bounce: 0.7,
            repeatType: 'reverse'
        },
    }
}

export const variantsForDivBottomLandingPage = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            delay: 1,
            duration: 2.5,
            ease: "linear"
        }
    }
}

export const variantsForCardsBookLandingPage = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            delay: 3.5,
            duration: 2.5,
            ease: "linear"
        }
    }
}

export const variantsForFirstTextLandingPage = {
    hidden: {
        scale: .8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.0,
            delay: 1.4
        }
    }
}


export const variantsForSecondTextLandingPage = {
    hidden: {
        scale: .8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.0,
            delay: 1.8
        }
    }

}


export const variantsForThirdTextLandingPage = {
    hidden: {
        scale: .8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.0,
            delay: 2.2
        }
    }

}

export const variantsForMessageInContactPage={
    initial:{ 
        opacity: 0,
        y: '-100px' },
    animate:{
        opacity: 1, 
        y: 0, 
        transition:{
            duration: 2,
            ease: "easeInOut",
            scale: [1, 2, 2, 1, 1],
        },
    }
}
