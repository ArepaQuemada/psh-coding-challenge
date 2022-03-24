interface IError {
    [key: string]: string
}

const errors: IError = {
    '503': '/error',
    'default': '/error'
}

export default errors