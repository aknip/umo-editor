import { DropdownOption } from 'tdesign-vue-next';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        default?(_: {}): any;
        dropmenu?(_: {}): any;
        dropmenu?(_: {}): any;
        content?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {
        popupHandleRef: import('vue').CreateComponentPublicInstance<Readonly<globalThis.ExtractPropTypes<{
            block: BooleanConstructor;
            content: {
                type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
            };
            default: {
                type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: BooleanConstructor;
            href: {
                type: StringConstructor;
                default: string;
            };
            icon: {
                type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
            };
            loading: BooleanConstructor;
            loadingProps: {
                type: import('vue').PropType<Partial<import('tdesign-vue-next/esm').TdLoadingProps>>;
            };
            shape: {
                type: import('vue').PropType<"square" | "round" | "circle" | "rectangle">;
                default: "square" | "round" | "circle" | "rectangle";
                validator(val: "square" | "round" | "circle" | "rectangle"): boolean;
            };
            size: {
                type: import('vue').PropType<import('tdesign-vue-next/esm').SizeEnum>;
                default: import('tdesign-vue-next/esm').SizeEnum;
                validator(val: import('tdesign-vue-next/esm').SizeEnum): boolean;
            };
            suffix: {
                type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
            };
            tag: {
                type: import('vue').PropType<"button" | "a" | "div">;
                validator(val: "button" | "a" | "div"): boolean;
            };
            theme: {
                type: import('vue').PropType<"default" | "success" | "primary" | "warning" | "danger">;
                validator(val: "default" | "success" | "primary" | "warning" | "danger"): boolean;
            };
            type: {
                type: import('vue').PropType<"button" | "reset" | "submit">;
                default: "button" | "reset" | "submit";
                validator(val: "button" | "reset" | "submit"): boolean;
            };
            variant: {
                type: import('vue').PropType<"outline" | "base" | "text" | "dashed">;
                default: "outline" | "base" | "text" | "dashed";
                validator(val: "outline" | "base" | "text" | "dashed"): boolean;
            };
            onClick: import('vue').PropType<(e: MouseEvent) => void>;
        }>>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<globalThis.ExtractPropTypes<{
            block: BooleanConstructor;
            content: {
                type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
            };
            default: {
                type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: BooleanConstructor;
            href: {
                type: StringConstructor;
                default: string;
            };
            icon: {
                type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
            };
            loading: BooleanConstructor;
            loadingProps: {
                type: import('vue').PropType<Partial<import('tdesign-vue-next/esm').TdLoadingProps>>;
            };
            shape: {
                type: import('vue').PropType<"square" | "round" | "circle" | "rectangle">;
                default: "square" | "round" | "circle" | "rectangle";
                validator(val: "square" | "round" | "circle" | "rectangle"): boolean;
            };
            size: {
                type: import('vue').PropType<import('tdesign-vue-next/esm').SizeEnum>;
                default: import('tdesign-vue-next/esm').SizeEnum;
                validator(val: import('tdesign-vue-next/esm').SizeEnum): boolean;
            };
            suffix: {
                type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
            };
            tag: {
                type: import('vue').PropType<"button" | "a" | "div">;
                validator(val: "button" | "a" | "div"): boolean;
            };
            theme: {
                type: import('vue').PropType<"default" | "success" | "primary" | "warning" | "danger">;
                validator(val: "default" | "success" | "primary" | "warning" | "danger"): boolean;
            };
            type: {
                type: import('vue').PropType<"button" | "reset" | "submit">;
                default: "button" | "reset" | "submit";
                validator(val: "button" | "reset" | "submit"): boolean;
            };
            variant: {
                type: import('vue').PropType<"outline" | "base" | "text" | "dashed">;
                default: "outline" | "base" | "text" | "dashed";
                validator(val: "outline" | "base" | "text" | "dashed"): boolean;
            };
            onClick: import('vue').PropType<(e: MouseEvent) => void>;
        }>>, {
            type: "button" | "reset" | "submit";
            block: boolean;
            loading: boolean;
            disabled: boolean;
            size: import('tdesign-vue-next/esm').SizeEnum;
            href: string;
            shape: "square" | "round" | "circle" | "rectangle";
            variant: "outline" | "base" | "text" | "dashed";
            ghost: boolean;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<globalThis.ExtractPropTypes<{
            block: BooleanConstructor;
            content: {
                type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
            };
            default: {
                type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            ghost: BooleanConstructor;
            href: {
                type: StringConstructor;
                default: string;
            };
            icon: {
                type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
            };
            loading: BooleanConstructor;
            loadingProps: {
                type: import('vue').PropType<Partial<import('tdesign-vue-next/esm').TdLoadingProps>>;
            };
            shape: {
                type: import('vue').PropType<"square" | "round" | "circle" | "rectangle">;
                default: "square" | "round" | "circle" | "rectangle";
                validator(val: "square" | "round" | "circle" | "rectangle"): boolean;
            };
            size: {
                type: import('vue').PropType<import('tdesign-vue-next/esm').SizeEnum>;
                default: import('tdesign-vue-next/esm').SizeEnum;
                validator(val: import('tdesign-vue-next/esm').SizeEnum): boolean;
            };
            suffix: {
                type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
            };
            tag: {
                type: import('vue').PropType<"button" | "a" | "div">;
                validator(val: "button" | "a" | "div"): boolean;
            };
            theme: {
                type: import('vue').PropType<"default" | "success" | "primary" | "warning" | "danger">;
                validator(val: "default" | "success" | "primary" | "warning" | "danger"): boolean;
            };
            type: {
                type: import('vue').PropType<"button" | "reset" | "submit">;
                default: "button" | "reset" | "submit";
                validator(val: "button" | "reset" | "submit"): boolean;
            };
            variant: {
                type: import('vue').PropType<"outline" | "base" | "text" | "dashed">;
                default: "outline" | "base" | "text" | "dashed";
                validator(val: "outline" | "base" | "text" | "dashed"): boolean;
            };
            onClick: import('vue').PropType<(e: MouseEvent) => void>;
        }>>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }>, {}, {}, {}, {
            type: "button" | "reset" | "submit";
            block: boolean;
            loading: boolean;
            disabled: boolean;
            size: import('tdesign-vue-next/esm').SizeEnum;
            href: string;
            shape: "square" | "round" | "circle" | "rectangle";
            variant: "outline" | "base" | "text" | "dashed";
            ghost: boolean;
        }> | null;
        popupContentRef: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
    menuType: {
        type: StringConstructor;
        default: string;
    };
    huge: {
        type: BooleanConstructor;
        default: boolean;
    };
    forceHuge: {
        type: BooleanConstructor;
        default: boolean;
    };
    ico: {
        type: StringConstructor;
        default: undefined;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    hideText: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shortcut: {
        type: StringConstructor;
        default: undefined;
    };
    shortcutText: {
        type: StringConstructor;
        default: undefined;
    };
    selectOptions: {
        type: PropType<DropdownOption[]>;
        default: undefined;
    };
    selectValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupHandle: {
        type: StringConstructor;
        default: undefined;
    };
    menuActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    forceEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "toggle-popup": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
    menuType: {
        type: StringConstructor;
        default: string;
    };
    huge: {
        type: BooleanConstructor;
        default: boolean;
    };
    forceHuge: {
        type: BooleanConstructor;
        default: boolean;
    };
    ico: {
        type: StringConstructor;
        default: undefined;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    hideText: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: (BooleanConstructor | StringConstructor)[];
        default: undefined;
    };
    shortcut: {
        type: StringConstructor;
        default: undefined;
    };
    shortcutText: {
        type: StringConstructor;
        default: undefined;
    };
    selectOptions: {
        type: PropType<DropdownOption[]>;
        default: undefined;
    };
    selectValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    popupVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    popupHandle: {
        type: StringConstructor;
        default: undefined;
    };
    menuActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    forceEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onToggle-popup"?: ((...args: any[]) => any) | undefined;
}>, {
    text: string;
    shortcut: string;
    menuType: string;
    huge: boolean;
    forceHuge: boolean;
    ico: string;
    hideText: boolean;
    tooltip: string | boolean;
    shortcutText: string;
    selectOptions: DropdownOption[];
    selectValue: string | number;
    popupVisible: boolean;
    popupHandle: string;
    menuActive: boolean;
    disabled: boolean;
    forceEnabled: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    popupHandleRef: import('vue').CreateComponentPublicInstance<Readonly<globalThis.ExtractPropTypes<{
        block: BooleanConstructor;
        content: {
            type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
        };
        default: {
            type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: BooleanConstructor;
        href: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
        };
        loading: BooleanConstructor;
        loadingProps: {
            type: import('vue').PropType<Partial<import('tdesign-vue-next/esm').TdLoadingProps>>;
        };
        shape: {
            type: import('vue').PropType<"square" | "round" | "circle" | "rectangle">;
            default: "square" | "round" | "circle" | "rectangle";
            validator(val: "square" | "round" | "circle" | "rectangle"): boolean;
        };
        size: {
            type: import('vue').PropType<import('tdesign-vue-next/esm').SizeEnum>;
            default: import('tdesign-vue-next/esm').SizeEnum;
            validator(val: import('tdesign-vue-next/esm').SizeEnum): boolean;
        };
        suffix: {
            type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
        };
        tag: {
            type: import('vue').PropType<"button" | "a" | "div">;
            validator(val: "button" | "a" | "div"): boolean;
        };
        theme: {
            type: import('vue').PropType<"default" | "success" | "primary" | "warning" | "danger">;
            validator(val: "default" | "success" | "primary" | "warning" | "danger"): boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "reset" | "submit">;
            default: "button" | "reset" | "submit";
            validator(val: "button" | "reset" | "submit"): boolean;
        };
        variant: {
            type: import('vue').PropType<"outline" | "base" | "text" | "dashed">;
            default: "outline" | "base" | "text" | "dashed";
            validator(val: "outline" | "base" | "text" | "dashed"): boolean;
        };
        onClick: import('vue').PropType<(e: MouseEvent) => void>;
    }>>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & Readonly<globalThis.ExtractPropTypes<{
        block: BooleanConstructor;
        content: {
            type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
        };
        default: {
            type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: BooleanConstructor;
        href: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
        };
        loading: BooleanConstructor;
        loadingProps: {
            type: import('vue').PropType<Partial<import('tdesign-vue-next/esm').TdLoadingProps>>;
        };
        shape: {
            type: import('vue').PropType<"square" | "round" | "circle" | "rectangle">;
            default: "square" | "round" | "circle" | "rectangle";
            validator(val: "square" | "round" | "circle" | "rectangle"): boolean;
        };
        size: {
            type: import('vue').PropType<import('tdesign-vue-next/esm').SizeEnum>;
            default: import('tdesign-vue-next/esm').SizeEnum;
            validator(val: import('tdesign-vue-next/esm').SizeEnum): boolean;
        };
        suffix: {
            type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
        };
        tag: {
            type: import('vue').PropType<"button" | "a" | "div">;
            validator(val: "button" | "a" | "div"): boolean;
        };
        theme: {
            type: import('vue').PropType<"default" | "success" | "primary" | "warning" | "danger">;
            validator(val: "default" | "success" | "primary" | "warning" | "danger"): boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "reset" | "submit">;
            default: "button" | "reset" | "submit";
            validator(val: "button" | "reset" | "submit"): boolean;
        };
        variant: {
            type: import('vue').PropType<"outline" | "base" | "text" | "dashed">;
            default: "outline" | "base" | "text" | "dashed";
            validator(val: "outline" | "base" | "text" | "dashed"): boolean;
        };
        onClick: import('vue').PropType<(e: MouseEvent) => void>;
    }>>, {
        type: "button" | "reset" | "submit";
        block: boolean;
        loading: boolean;
        disabled: boolean;
        size: import('tdesign-vue-next/esm').SizeEnum;
        href: string;
        shape: "square" | "round" | "circle" | "rectangle";
        variant: "outline" | "base" | "text" | "dashed";
        ghost: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<globalThis.ExtractPropTypes<{
        block: BooleanConstructor;
        content: {
            type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
        };
        default: {
            type: import('vue').PropType<string | ((h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue)>;
        };
        disabled: {
            type: BooleanConstructor;
            default: any;
        };
        ghost: BooleanConstructor;
        href: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
        };
        loading: BooleanConstructor;
        loadingProps: {
            type: import('vue').PropType<Partial<import('tdesign-vue-next/esm').TdLoadingProps>>;
        };
        shape: {
            type: import('vue').PropType<"square" | "round" | "circle" | "rectangle">;
            default: "square" | "round" | "circle" | "rectangle";
            validator(val: "square" | "round" | "circle" | "rectangle"): boolean;
        };
        size: {
            type: import('vue').PropType<import('tdesign-vue-next/esm').SizeEnum>;
            default: import('tdesign-vue-next/esm').SizeEnum;
            validator(val: import('tdesign-vue-next/esm').SizeEnum): boolean;
        };
        suffix: {
            type: import('vue').PropType<(h: typeof import('vue').h) => import('tdesign-vue-next/esm').SlotReturnValue>;
        };
        tag: {
            type: import('vue').PropType<"button" | "a" | "div">;
            validator(val: "button" | "a" | "div"): boolean;
        };
        theme: {
            type: import('vue').PropType<"default" | "success" | "primary" | "warning" | "danger">;
            validator(val: "default" | "success" | "primary" | "warning" | "danger"): boolean;
        };
        type: {
            type: import('vue').PropType<"button" | "reset" | "submit">;
            default: "button" | "reset" | "submit";
            validator(val: "button" | "reset" | "submit"): boolean;
        };
        variant: {
            type: import('vue').PropType<"outline" | "base" | "text" | "dashed">;
            default: "outline" | "base" | "text" | "dashed";
            validator(val: "outline" | "base" | "text" | "dashed"): boolean;
        };
        onClick: import('vue').PropType<(e: MouseEvent) => void>;
    }>>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        type: "button" | "reset" | "submit";
        block: boolean;
        loading: boolean;
        disabled: boolean;
        size: import('tdesign-vue-next/esm').SizeEnum;
        href: string;
        shape: "square" | "round" | "circle" | "rectangle";
        variant: "outline" | "base" | "text" | "dashed";
        ghost: boolean;
    }> | null;
    popupContentRef: HTMLDivElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
