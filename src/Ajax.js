// Ajax.js - uses Axios library

import axios from 'axios';

//const url = "http://localhost/2019/LOLLYPOP/servers/server-6/";   // must include final "/""
const url = "http://andyknoll.com/lollypop/servers/server-6/";

export const getFakeCustomers = () => {
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
        .then(data => {
            console.log("AXIOS RESPONSE OK: \n");
            //console.log(data);
            console.log(data.data);
        })
        .catch(error => {
            console.log("AXIOS ERROR: \n");
            console.log(error);
        });

    /*
    fetch(url, {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            //credentials: 'include',
            body: JSON.stringify(req)
        })
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        .then(data =>
            alert("FETCH RESPONSE OK: \n" + data)
        )
        // Catch any errors we hit and update the app
        .catch(error => 
            alert("FETCH ERROR: \n" + error)
        );
    */  

}

