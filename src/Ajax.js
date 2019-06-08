// Ajax.js - uses Axios library

import axios from 'axios';

/*

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

*/


// http://localhost/2019/LOLLYPOP/servers/server-5/

export const getFakeCustomers = () => {
    alert("making getFakeCustomers AJAX call");
    let url = "http://localhost/2019/LOLLYPOP/servers/server-5/";
    axios.post(url, {
        "rpc": "getTestCustomers",
        "params": {"count":10},
        "objects": []
    })
      .then(function (response) {
        console.log(response);
        alert("RESPONSE OK: " + response);
      })
      .catch(function (error) {
        console.log(error);
        alert("ERROR: " + error);
      });
        
}

