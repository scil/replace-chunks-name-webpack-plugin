export interface OptionsProps {
    replaces: replaceProps[],
    enable: enableProps
}

export enum target {
  Id = "id",
  Name = "name",
}

export type replaceProps = {
    pattern: string | RegExp ,
    replacement: string
    target: target
}
export type enableProps = boolean