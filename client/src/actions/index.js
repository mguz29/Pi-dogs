import axios from 'axios'

export function GetDogs() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/dogs",{
        })
            return dispatch({
            type:    'GET_DOGS',
            payload: json.data
        })
    }
}

export function filterDogsByStatus(payload) {
    return {
        type:'FILTER_BY_PESO',
        payload
    }
}