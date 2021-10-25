// import axios from "axios";

import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3333/'
})

const apiCall = async () => {
    const response = await api.get('/getCoordinates')
    console.log(response)
    return response
}

export default apiCall