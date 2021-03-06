const defaultState = {
    data: {
        paginate: {},
        list: []
    },
    word: {},
    options: {
        categories: [],
        class: [],
    },
    status: "",
    message: "",
    redirect: false
}

export default function adminWordsReducer (state = defaultState, action)
{
    switch (action.type){
        case 'GET__WORD_INFO_SUCCESSFULLY':
            return { ...state, word: action.data, status: action.status, redirect: false }
        case 'UPDATE_WORD_SUCCESSFULLY':
                return { ...state, status: action.status, redirect: true }
        case 'GET_OPTIONS_SUCCESSFULLY':
            return { ...state, options: action.options, status: action.status, redirect: false }
        case 'GET_LIST_SUCCESSFULLY':
            return { ...state, data: action.data, status: action.status, redirect: false }
        case 'CREATE_WORD_SUCCESSFULLY':
            return { ...state, message: action.message, status: action.status, redirect: true }
        case 'CREATE_WORD_FAILED':
        case 'GET__WORD_INFO_FAILED':
        case 'UPDATE_WORD_FAILED':
        case 'GET_OPTIONS_FAILED':
        case 'GET_LIST_FAILED':
            return { ...state, message: action.message, status: action.status, redirect: false }
        case 'CLEAR_RESPONSE':
            return { ...state, status: "", message: "", redirect: false }
        default:
            return state
    }
}