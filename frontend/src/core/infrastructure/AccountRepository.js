import axios from 'axios';
import { Account } from '../entities/Account';

//contract with the API


export class AccountRepository {
    async getAccounts() {
        //console.log('here')
        return axios
            .get('http://localhost:3000/accounts')
            .then((res) => res.data)
            .catch((error) => {
                // Error 😨
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }
}
