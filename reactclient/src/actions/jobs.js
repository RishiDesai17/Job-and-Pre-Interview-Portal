import axios from 'axios';

export const jobsHandler = (pageno) => async dispatch => {
    // if(existingEntries/25 <= pageno){
        const response = await axios.get(`api/jobs?pageno=${parseInt(pageno)}`)
        console.log(response)
        dispatch({
            type: 'GET_JOBS',
            payload: response.data
        })
    // }

}