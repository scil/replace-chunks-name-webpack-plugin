export interface OptionsProps {
    replaces: replaceProps[],
    enable: enableProps
}


export type replaceProps = {
    pattern: string | RegExp ,
    replacement: string
}
export type enableProps = boolean