type EvalFn = (a: any, b: any) => 1 | - 1

interface ISort {
    [key: string]: EvalFn
}

const sort: ISort = {
    name: (a: any, b: any) => {
        const nameA = a.split(' ')[0]
        const nameB = b.split(' ')[0]
        return nameA > nameB ? 1 : -1
    },
    lastname: (a: any, b: any) => {
        const lastnameA = a.split(' ')[1]
        const lastnameB = b.split(' ')[1]
        return lastnameA > lastnameB ? 1 : -1
    }
}

export default sort