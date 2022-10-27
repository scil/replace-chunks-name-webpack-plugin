export declare class WebpackReplaceChunksNamePlugin {
    private replaceConfig;
    private enable;
    constructor(options: OptionsProps);
    apply(compiler: any): void;
}
export default WebpackReplaceChunksNamePlugin;

export interface OptionsProps {
    replaces: replaceProps[];
    enable: enableProps;
}
export declare type replaceProps = {
    pattern: string | RegExp;
    replacement: string;
};
export declare type enableProps = boolean;
