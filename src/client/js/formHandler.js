function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name');
    Client.checkForName(formText[0].value)

        console.log("::: FORM INPUT VALID :::")
        
    // if(Client.checkForName(JSON.parse(JSON.stringify(formText))))
    // {
        console.log("BUILDING REQUEST");
        fetch('http://localhost:8080/apiCall', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: formText[0].value})
        })
        .then(res => res.json())
        .then(function(res) {
            // print for debugging
            console.log(res); 

            // Populate html with result
            // document.querySelector('section.url-results #polarity').innerHTML = res.polarity
            // document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
            // document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
            // document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
            // document.querySelector('section.url-results #excerpt').innerHTML = res.text
        })

    console.log("::: Form Submitted :::")
//     fetch('http://localhost:8080/apiCall')
//     .then(res => res.json())
//     .then(function(res) {
//          document.getElementById('results').innerHTML = res.message
//    })
  };

export { handleSubmit }
