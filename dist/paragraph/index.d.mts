import * as react from 'react';
import { JSX, CSSProperties, MouseEvent, ReactNode } from 'react';

type ParagraphPreset = "fadeIn" | "fadeOut" | "fadeSwap" | "fadeMask" | "morphText" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "slideReplace" | "popIn" | "popOut" | "expandIn" | "collapseOut" | "zoomIn" | "zoomOut" | "wordFadeIn" | "wordSlideUp" | "wordPop" | "lineFadeIn" | "lineSlideUp" | "streamIn" | "streamFade" | "streamSlide" | "cursorBlink" | "expandCollapse" | "heightAuto" | "crossFade" | "pulse" | "shake" | "highlight" | "flash" | "pushLeft" | "pushRight" | "flipPage" | "morphBlur" | "diffAnimate" | "scrollWordReveal";
type AnimationTrigger = "change" | "scroll" | "hover" | "click" | "manual" | "mount";
type AnimationTriggerInput = AnimationTrigger | readonly [AnimationTrigger, AnimationTrigger] | readonly AnimationTrigger[];
type AnimationProperties = Record<string, readonly [string | number, string | number]>;
interface AnimateParagraphHandle {
    animate: () => void;
    element: HTMLElement | null;
}
interface AnimateParagraphProps {
    value?: string;
    trigger?: AnimationTriggerInput;
    animation: ParagraphPreset;
    scrollAnimation?: ParagraphPreset;
    properties?: AnimationProperties;
    highlightColor?: string;
    duration?: number;
    easing?: string;
    delay?: number;
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

declare const EASE_IN = "cubic-bezier(0.0, 0.0, 0.2, 1)";
declare const EASE_OUT = "cubic-bezier(0.4, 0.0, 1, 1)";
declare const EASE_IN_OUT = "cubic-bezier(0.4, 0.0, 0.2, 1)";
declare const SPRING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
declare const SMOOTH = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
declare const presets: Record<string, {
    out: Keyframe[];
    in: Keyframe[];
}>;
declare const AnimateParagraph: react.ForwardRefExoticComponent<AnimateParagraphProps & react.RefAttributes<AnimateParagraphHandle>>;
declare const Animate: {
    Paragraph: react.ForwardRefExoticComponent<AnimateParagraphProps & react.RefAttributes<AnimateParagraphHandle>>;
};

export { Animate, AnimateParagraph, EASE_IN, EASE_IN_OUT, EASE_OUT, SMOOTH, SPRING, Animate as default, presets };
