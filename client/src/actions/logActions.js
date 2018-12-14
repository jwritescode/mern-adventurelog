import axios from 'axios';
import { GET_LOGS, ADD_LOG, EDIT_LOG, DELETE_LOG, LOGS_LOADING } from './types';


export const getLogs = () =>  dispatch => {
    dispatch(setLogsLoading());
    axios
        .get('/api/logs')
        .then(res => 
            dispatch({
                type: GET_LOGS,
                payload: res.data
            })
        )
};
export const addLog = (log) => dispatch => {
   axios
    .post('/api/logs', log)
    .then(res => 
        dispatch({
            type: ADD_LOG,
            payload: res.data
        })
    )
};

export const editLog = (id) => dispatch => {
    axios
    .put(`/api/logs/${id}`).then(res => 
    dispatch({
        type: EDIT_LOG,
        payload: res.data
    })
)
};

export const deleteLog = (id) => dispatch => {
    axios
        .delete(`/api/logs/${id}`).then(res => 
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    )
};



export const setLogsLoading = () => {
    return {
        type: LOGS_LOADING
    }
}