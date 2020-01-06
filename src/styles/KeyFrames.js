import { keyframes } from "styled-components"

export const IndicatorAnimation = keyframes`
    0% {
        transform: scale(1.1)
    }
    10% {
        opacity: 1;
        transform: scale(1.3)
    }

    100% {
        opacity: 0;
        top: 92%;
    }
`

export const IndicatorAnimationPulsing = keyframes`
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.2)
    }

    100%  {
        transform: scale(1)
    }

`
