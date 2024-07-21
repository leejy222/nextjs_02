type T = {
    id: number
    no : number
}

export interface props extends T {
    params : T,
    children: string,
}
