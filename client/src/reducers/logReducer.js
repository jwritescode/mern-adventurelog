import { GET_LOGS, ADD_LOG, DELETE_LOG, LOGS_LOADING } from '../actions/types';


const initialState = {
    logs: [],
    loading: false
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(log => log._id !==  action.payload)
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [action.payload, ...state.logs]
            };
        case LOGS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}