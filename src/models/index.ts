interface Common {
    __id: string
    __v: string
}

export interface Character extends Common {
    firstname: string
    lastname: string
}

export interface Crew extends Common {
    name: string
    role: string
}

export interface ResponseList<T> {
    data: T[]
}