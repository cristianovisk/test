
import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3333/'
})

const apiCall = async () => {
    const response = await api.get('/getCoordinates')
    // console.log(response.data)
    return response.data
}

const apiData = apiCall()
.then(coordintes => {
    console.log(coordintes)
})

export default apiCall