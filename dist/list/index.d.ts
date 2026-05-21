import react__default, { JSX, CSSProperties, ReactNode } from 'react';

type ListTrigger = "scroll" | "hover" | "click" | "mount" | "manual";
type ListTriggerInput = ListTrigger | readonly [ListTrigger, ListTrigger] | readonly ListTrigger[];
type ListReorderPreset = "flip" | "smooth" | "spring" | "none";
type AnimationProperties = Record<string, readonly [string | number, string | number]>;
type ListStaggerPreset = "staggerFadeIn" | "staggerSlideUp" | "staggerSlideLeft" | "staggerZoomIn" | "staggerPopIn" | "stackIn";
type ListCascadePreset = "wordCascade" | "wordWave" | "wordDrop" | "wordFadeIn";
type ListMarqueePreset = "marquee" | "marqueeReverse" | "marqueeFade";
type ListParallaxPreset = "parallax" | "parallaxFast" | "parallaxReverse" | "tiltScroll" | "scaleScroll" | "parallaxStagger";
type ListPresencePreset = "itemFadeIn" | "itemSlideIn" | "itemPopIn" | "itemBounceIn" | "itemFadeOut" | "itemSlideOut" | "itemCollapseOut";
type ListAnimationPreset = ListStaggerPreset | ListCascadePreset | ListMarqueePreset | ListParallaxPreset | ListPresencePreset | ListReorderPreset | "fadeIn" | "slideIn" | "slideInLeft" | "slideInRight" | "popIn" | "bounceIn" | "expandIn" | "flipIn" | "glideIn" | "fadeOut" | "slideOut" | "slideOutLeft" | "slideOutRight" | "popOut" | "bounceOut" | "collapseOut" | "flipOut" | "glideOut" | "marquee";
interface AnimationDefinition {
    keyframes: Keyframe[];
    options?: globalThis.KeyframeAnimationOptions;
}
interface AnimateListProps {
    animation?: ListAnimationPreset;
    scrollAnimation?: ListAnimationPreset;
    properties?: AnimationProperties;
    exitAnimation?: ListAnimationPreset;
    reorderAnimation?: ListAnimationPreset;
    reorder?: ListReorderPreset;
    duration?: number;
    reorderDuration?: number;
    stagger?: number;
    exitStagger?: number;
    speed?: number;
    trigger?: ListTriggerInput;
    threshold?: number;
    easing?: string;
    reorderEasing?: string;
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    style?: CSSProperties;
    onItemEnter?: (key: string | number) => void;
    onItemExit?: (key: string | number) => void;
    onReorder?: () => void;
    children: ReactNode;
    customAnimation?: {
        enter?: AnimationDefinition;
        exit?: AnimationDefinition;
    };
}
interface AnimateListHandle {
    animate: () => void;
}

declare const AnimateList: react__default.ForwardRefExoticComponent<AnimateListProps & react__default.RefAttributes<AnimateListHandle>>;

declare const Animate: {
    List: react__default.ForwardRefExoticComponent<AnimateListProps & react__default.RefAttributes<AnimateListHandle>>;
};

export { Animate, AnimateList };
