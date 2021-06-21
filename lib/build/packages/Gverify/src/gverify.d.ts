interface optionsType {
    id: string;
    width: number;
    height: number;
    size: number;
    iswire?: boolean;
    isPoint?: boolean;
    letterArr?: string[];
    [propName: string]: any;
}
interface GVerifyType {
    options: optionsType;
    version: string;
}
declare class GVerify implements GVerifyType {
    options: optionsType;
    version: string;
    constructor(options: optionsType);
    _init(): void;
    refresh(): void;
    /**验证验证码**/
    validate(code: string): boolean;
}
export default GVerify;
