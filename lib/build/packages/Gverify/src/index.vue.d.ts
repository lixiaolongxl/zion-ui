declare const _default: import("vue").DefineComponent<{
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    blend: {
        type: StringConstructor;
        default: string;
    };
    iswire: {
        type: BooleanConstructor;
        default: boolean;
    };
    isPoint: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    verifyCode: null;
}, {}, {
    validate(value: string): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    blend: string;
    width: number;
    height: number;
    size: number;
    iswire: boolean;
    isPoint: boolean;
} & {}>, {
    blend: string;
    width: number;
    height: number;
    size: number;
    iswire: boolean;
    isPoint: boolean;
}>;
export default _default;
