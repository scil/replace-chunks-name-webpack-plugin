export declare class WebpackReplaceChunksNamePlugin {
    private replaceChunks;
    private enable;
    constructor(options: OptionsProps);
    apply(compiler: any): void;
}
export default WebpackReplaceChunksNamePlugin;

export interface OptionsProps {
    replaces: replaceProps[];
    enable: enableProps;
}
export declare enum target {
    Id = "id",
    Name = "name"
}
export declare type replaceProps = {
    pattern: string | RegExp;
    replacement: string;
    target: target;
};
export declare type enableProps = boolean;
