// Ajax.js - uses Axios library

import axios from 'axios';

const url = "http://localhost/2019/LOLLYPOP/servers/server-6/";   // must include final "/"
//const url = "http://andyknoll.com/lollypop/servers/server-6/";

export const ajaxObject = {

    getFakeCustomers(onSuccess, onError) {
        let req = {
            "rpc": "getTestCustomers",
            "params": {"count":1},
            "objects": []
        };
        let reqJson = JSON.stringify(req);
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };

        axios.post(url, reqJson, headers)
            .then(response => {
                console.log("AJAX OK: \n");
                console.log(response.data);
                onSuccess(response.data);
            })
            .catch(error => {
                console.log("AJAX ERROR: \n");
                console.log(error);
                onError(error);
            });
    },

    getFakeCustomerName(app) {
        let person = app.state.person;
        let cust = null;
        let req = {
            "rpc": "getTestCustomerName",
            "params": {},
            "objects": []
        };
        let reqJson = JSON.stringify(req);
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };

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
    }

}
