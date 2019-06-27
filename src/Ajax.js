// Ajax.js - uses Axios library

import axios from 'axios';

const url = "http://localhost/2019/LOLLYPOP/servers/admissions-queue/";   // must include final "/"
//const url = "http://andyknoll.com/lollypop/servers/admissions-queue/";

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};

// this is not created with "new"
export const AjaxObject = {

    getFakeCustomerName(app) {
        let person = app.state.person;
        let cust = null;
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

    addCustomer(cust) {
        let info = "";
        info += "AjaxObject.addCustomer \n";
        info += cust.firstName + "\n";
        info += cust.lastName + "\n";
        info += cust.pet + "\n\n";
        console.log(info);
    }

}
