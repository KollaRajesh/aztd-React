//axios is a promise-based HTTP client for the browser and Node.js.
// npm install axios

//Example :1
const axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response.data));


//Example :2
//axios with post
    const axios = require('axios');
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
        .then(response => console.log(response.data));

//Example :3
//axios with put
    const axios = require('axios');
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
    })
        .then(response => console.log(response.data));

//Example :4
//axios with delete
    const axios = require('axios');
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => console.log(response.data));