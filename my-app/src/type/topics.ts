import { StyledString } from "next/dist/build/swc"

export interface getData {
    id : string | number,
    title: string,
    body: string
}

export type getList = [] & getData