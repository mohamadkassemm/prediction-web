window.onload=() => {
    // set of constants that i will use in the js file
   const image =document.getElementById("image-placement")
   const PredictButton =document.getElementById("predict-btn")
   const Nationality =document.getElementById("nationality")
   const Age =document.getElementById("age")
   const Gender =document.getElementById("gender")
   const Name =document.querySelector('input')
   const Greeting=document.getElementById("greeting")

    // fetching the api to take the url image of he random dog
   fetch("https://dog.ceo/api/breeds/image/random")
   .then(res => res.json())
   .then(data => {
       image.innerHTML = `<img class="image-result" src="${data.message}"/> `
   })

    // adding event listner in order not to execute results untill the user types his name
    PredictButton.addEventListener("click",prediction)

    function prediction(){
        Greeting.innerHTML= "Welcome"+" " + `${Name.value}`
        // fetching the api to take the nationality of the given name
        fetch(`https://api.nationalize.io/?name=${Name.value}`)
            .then(res => res.json())
            .then(data => {
                Nationality.innerHTML = ` <b>Nationalities</b>:<span class=result-text>${data.country[0]["country_id"]},${data.country[1]["country_id"]}</span>`
            })
        // fetching the api to take the age of the given name
        fetch(`https://api.agify.io/?name=${Name.value}`)
            .then(res => res.json())
            .then(data => {
                Age.innerHTML = ` <b>Age</b>:<span class=result-text>${data.age}</span>`
            }) 
        // fetching the api to take the gender of the given name
        fetch(`https://api.genderize.io/?name=${Name.value}`)
            .then(res => res.json())
            .then(data => {
                Gender.innerHTML = ` <b>Gender</b>:<span class=result-text>${data.gender}</span>`
            })
    }

}