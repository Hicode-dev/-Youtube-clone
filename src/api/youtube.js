import axios from 'axios'
export default axios.create({
    baseURL:'https://www.googlepapis.com/youtube/v3',
    params : {
        part:'snippet',
        maxResult:10,
        key:'[AIzaSyBSR-JWgLM6MLGwXiCivFugOOjZPmcNDZQ]'

    }
})