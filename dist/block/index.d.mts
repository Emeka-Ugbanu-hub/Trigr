import * as react from 'react';
import { JSX, CSSProperties, MouseEvent, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type BlockAnimationPreset = "fadeIn" | "fadeOut" | "fadeSwap" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleIn" | "scaleOut" | "popIn" | "popOut" | "rotateIn" | "rotateOut" | "flipX" | "flipY" | "bounceIn" | "bounceOut" | "shake" | "pulse" | "wiggle" | "jello" | "flash" | "heartBeat" | "glideIn" | "glideOut" | "dropIn" | "riseUp" | "expandIn" | "collapseOut" | "expandHeight" | "fadeSlideUp" | "blurIn" | "blurOut" | "clipUp" | "clipLeft" | "zoomIn" | "zoomOut" | "parallax" | "parallaxFast" | "parallaxReverse" | "tiltScroll" | "scaleScroll" | "lift" | "sink" | "grow" | "glow" | "shadow" | "borderPop" | "tilt" | "float" | "press" | "ripple" | "burst" | "spin" | "ping" | "shimmer" | "tilt3D" | "rotate3D" | "depth";
type AnimationTrigger = "change" | "scroll" | "hover" | "click" | "manual" | "mount";
type AnimationTriggerInput = AnimationTrigger | readonly [AnimationTrigger, AnimationTrigger] | readonly AnimationTrigger[];
type AnimationProperties = Record<string, readonly [string | number, string | number]>;
interface AnimateBlockHandle {
    animate: () => void;
    element: HTMLElement | null;
}
interface AnimateBlockProps {
    value?: string | number;
    trigger?: AnimationTriggerInput;
    animation: BlockAnimationPreset;
    scrollAnimation?: BlockAnimationPreset;
    properties?: AnimationProperties;
    exitAnimation?: BlockAnimationPreset;
    show?: boolean;
    unmountOnExit?: boolean;
    duration?: number;
    easing?: string;
    delay?: number;
    speed?: number;
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

interface ParallaxProps {
    children: ReactNode;
    type?: "parallax" | "parallaxFast" | "parallaxReverse" | "tiltScroll" | "scaleScroll";
    strength?: number;
    className?: string;
    style?: CSSProperties;
}
declare function Parallax({ children, type, strength: _strength, className, style, }: ParallaxProps): react_jsx_runtime.JSX.Element | null;

declare const AnimateBlock: react.ForwardRefExoticComponent<AnimateBlockProps & react.RefAttributes<AnimateBlockHandle>>;

declare const Animate: {
    Block: react.ForwardRefExoticComponent<AnimateBlockProps & react.RefAttributes<AnimateBlockHandle>>;
    Parallax: typeof Parallax;
};

export { Animate, AnimateBlock, Parallax, Animate as default };
