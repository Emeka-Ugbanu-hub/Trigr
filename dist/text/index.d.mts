import * as react from 'react';
import { JSX, CSSProperties, MouseEvent, ReactNode } from 'react';

type AnimationPreset = "fadeSwap" | "morph" | "slideUp" | "slideDown" | "highlight" | "bump" | "blur" | "decoder" | "fadeAway" | "fadeIn" | "slideReplace" | "letterDrop" | "glitch" | "textReveal" | "liftReveal" | "scatter" | "typewriter" | "splash" | "jitter" | "popUp" | "jello" | "scramble" | "flip" | "bounce" | "shake" | "pulse" | "blink" | "wave" | "ping" | "popIn" | "dropIn" | "riseUp" | "expandIn" | "shrinkOut" | "boldFlash" | "strikeThrough" | "odometer" | "ticker" | "splitReveal" | "splitSlide" | "bigBang" | "scatterAssemble" | "pixelRain" | "dominoFall" | "vortex" | "pendulum" | "centerBurst" | "gravityBounce" | "scrollFanIn" | "textRotate" | "gooeyMorph" | "randomLetterSwap" | "textEffect" | "staggerText";
type AnimationTrigger = "change" | "scroll" | "hover" | "click" | "manual" | "mount";
type AnimationTriggerInput = AnimationTrigger | readonly [AnimationTrigger, AnimationTrigger] | readonly AnimationTrigger[];
type AnimationProperties = Record<string, readonly [string | number, string | number]>;
interface AnimateTextHandle {
    animate: () => void;
    element: HTMLElement | null;
}
interface AnimateTextProps {
    value?: string | number;
    trigger?: AnimationTriggerInput;
    animation: AnimationPreset;
    scrollAnimation?: AnimationPreset;
    properties?: AnimationProperties;
    duration?: number;
    easing?: string;
    delay?: number;
    highlightColor?: string;
    threshold?: number;
    repeat?: boolean;
    once?: boolean;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onEnter?: () => void;
    onExit?: () => void;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    onAnimationEnd?: () => void;
    children: ReactNode;
}

declare const AnimateText: react.ForwardRefExoticComponent<AnimateTextProps & react.RefAttributes<AnimateTextHandle>>;

declare const Animate: {
    Text: react.ForwardRefExoticComponent<AnimateTextProps & react.RefAttributes<AnimateTextHandle>>;
};

export { Animate, AnimateText, Animate as default };
