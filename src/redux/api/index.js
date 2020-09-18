import axios from "axios";
import { refreshToken, 
    isLoggedIn, 
    getGuestToken
 } from "../../utils/authentication";

export default (endpoint, method, body, header) => new Promise(async (resolve, reject) => {

    let url = "";
    // If production then we need to set the API Endpoint URL Here otherwise it
    // is being set from src/setupProxy.js File
    url = process.env.REACT_APP_API_SERVER_URL + process.env.REACT_APP_API_BASE_URL + endpoint;
    /**
     * setHeaders
     */

    // const token = await refreshToken;
    
    let setHeaders = { "Content-Type": "application/json" };
    if (header) {
        const token = isLoggedIn ? await refreshToken : await getGuestToken;
        setHeaders = { Authorization: token };
    }

    /**
     * axios request
     */
    axios({
        method,
        url,
        data: body,
        headers: setHeaders,
    }).then(res => {
        const { data, message, type } = res.data
        let status = false
        if (res.status === 200) {
            status = true
        }
        resolve({ data, message, status, type })
    }).catch((err) => {
        const { data, message, type } = err.response.data
        resolve({ data, message, type, status: err.response.status })
    });
})
