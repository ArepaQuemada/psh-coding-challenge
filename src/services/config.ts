type Methods = 'get'

const config = {
    baseUrl: 'https://www.officeapi.dev/api',
    endpoints: {
        characters: {
            name: '/characters',
            method: 'get' as Methods   
        },
        crew: {
            name: '/crew',
            method: 'get' as Methods
        },
        quotes: {
            name: '/quotes/random',
            method: 'get' as Methods
        }
    }
}

export default config