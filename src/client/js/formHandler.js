function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText)

    var AYLIENTextAPI = require('aylien_textapi');
    var textapi = new AYLIENTextAPI({
    application_id: "0aa9b1e2",
    application_key: "44fd5c1c94e5f772553d8089aa6fb4fd"
    }) 

    textapi.sentiment({
      url: 'current'
    }, function(error, response) {
      if (error === null) {
        response.sentences.forEach(function(s) {
        sum.innerHTML = sum.innerHTML + s;
        });
      }
    });
    };







    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    });


export { handleSubmit }
