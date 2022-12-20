/*fetch('https://jsonplaceholder.typicode.com/comments/1') /*https://jsonplaceholder.typicode.com/comments/1 (json code which can be 
                                                           used to work on project) fetch takes the input. This is GET method*/
     // .then(response => response.json()) /*By default it returns response where response maps the body content*/
     // .then(data => console.log(data))/*returns a promise. It also returns all the related data in that particular id*/


//This is a code to give optional value 
fetch('https://jsonplaceholder.typicode.com/comments',{
    method: "POST",     //takes an object
    body: JSON.stringify({ //stringify takes an object and turns into a string
        postId: 1, //By default it is GET so we are giving POST
        uname: 'Dylan',
        email: 'dylansemail310@gmail.com',
        body: 'That was dope!'
    })
})
.then(response => response.json())
.then(data => console.log(data))
      
