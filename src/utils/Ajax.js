// Ajax.js - uses Axios library

import axios from 'axios';
import { Config } from '../Config';

//const url = "http://localhost/dev/php/lf-admit-queue-server/";              // must include final "/"
const url = Config.SERVER_URL;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

// predefined request
const createCustomerReq = {
    "rpc": "createCustomer",
    "params": {},
    "objects": []
};


// this is not created with "new"
export const AjaxObject = {

    createCustomer(app) {
        let cust = app.state.person;
        createCustomerReq.objects.push(cust);
        //alert("making createCustomerReq")
        axios.post(url, JSON.stringify(createCustomerReq), headers)
            .then(response => {
                console.log(response.data);
                cust = response.data.objects[0];
                app.setState({ajaxMessage: "Added at " + cust.created});
            })
            .catch(error => {
                console.log(error);
                app.setState({ajaxMessage: "Network error: cannot connect to server"});
            });
    }

    /*
    getFakeCustomerName(app) {
        let person = app.state.person;
        let cust = null;
        // use Request and Response objects here?
        let req = {
            "rpc": "getTestCustomerName",
            "params": {},
            "objects": []
        };
        let reqJson = JSON.stringify(req);

        axios.post(url, reqJson, headers)
            .then(response => {
                console.log(response.data);
                cust = response.data.objects[0];
                app.setState({person: {...person, firstName: cust.firstName, lastName: cust.lastName }});
                //alert("ajaxObject - AJAX SUCCESS: \n" + cust.firstName + "\n" + cust.lastName);
            })
            .catch(error => {
                console.log(error);
                alert("ajaxObject - AJAX ERROR: " + error);
            });
    },
    */

}
