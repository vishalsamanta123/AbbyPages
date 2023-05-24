import axios from 'axios';
import { BASEURL } from '../Utils/Constant';
const httpClient = axios.create({
    baseURL: `${BASEURL}`,
});
export function setDefaultHeader(header, value) {
    httpClient.defaults.headers.common[header] = value
}
export async function apiCall(method, url, data, header = { 'Content-Type': 'application/json' }) {
    try {
        const res = await httpClient({
            method,
            url,
            data: data,
            headers: header,
            withCredentials: false
        })
        // console.log(`${url}: `, res)
        return res;
    }
    catch (error) {
        console.log("🚀 ~ file: httpClient.js:22 ~ error:", error)
        if (error.response) {
            if (error.response.data.status === 401) {
                return error.response
            }
        } else
            if (error.request) {
                console.log('Error request : ', error.request);
            }
            else {
                console.log('Error message : ', error.message);
            }
        console.log("error", error);
        return error
    }
}