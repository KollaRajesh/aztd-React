
//fetch
//The Fetch API provides an interface for fetching resources (including across the network).

//Example :1
    fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
        .then(json => console.log(json));

//Example :2
//post
//The Fetch API provides an interface for fetching resources (including across the network).

    fetch('https://jsonplaceholder.typicode.com/posts', {   
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));
 
//Example :3
//put

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json));

// Example :4
//delete
//The Fetch API provides an interface for fetching resources (including across the network).    
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(json => console.log(json));