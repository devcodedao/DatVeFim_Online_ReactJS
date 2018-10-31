import axios from 'axios';
import * as Config from '../constants/Config';

export default function callApiBooking(endpoint, method="GET",body) {
    return axios({
        method:method,
        url: `${Config.API_BOOKINGS_URL}/${endpoint}`,
        data:body
    }).catch(err => {
        console.log(err);
    })
}