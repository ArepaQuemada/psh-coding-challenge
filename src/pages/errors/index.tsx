interface IError {
    [key: string]: string | null
}

const errors: IError = {
    '503': '/error',
    'default': '/error'
}

export default errors