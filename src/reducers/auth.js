const defaultState = {
    requestResponse: {
        status: "",
        message: ""
    },
    currentUser: {},
    isLoggedIn: false
    //api_url: process.env.REACT_APP_API_URL
}

export default function authReducer(state = defaultState, action)
{
    switch (action.type) {
        case 'GET_USER_INFO_SUCCESSFULLY':
        case 'LOGIN_USER':
            return { ...state, requestResponse: action.requestResponse, currentUser: action.currentUser, isLoggedIn: action.isLoggedIn }
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
            return { ...state, requestResponse: action.requestResponse }            
        default:
            return state;
    }
}