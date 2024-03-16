const initialStateAuth = {
    email: '',
    password: '',
}

const authReducer = (state = initialStateAuth, action) => {
    switch (action.type) {
        case 'auth/login':
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        case 'auth/logout':
            return {
                ...state,
                email: '',
                password: '',
            }
        default:
            return { ...state }
    }
}

export const createAuth = (email, password) => {
    return {
        type: 'auth/login',
        payload: {
            email,
            password,
        },
    }
}

export const logoutAuth = () => {
    return {
        type: 'auth/logout',
    }
}

export default authReducer;