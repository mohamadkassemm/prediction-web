window.onload=() => {
   const image =document.getElementById("image-placement")
   const predictButton =document.getElementById("predict-btn")
   const Nationality =document.getElementById("nationality")
   const Age =document.getElementById("age")
   const Gender =document.getElementById("gender")

   fetch("https://dog.ceo/api/breeds/image/random")
   .then(res => res.json())
   .then(data => {
       image.innerHTML = `<img class="image-result" src="${data.message}"/> `
   })

    predictButton.addEventListener("click",prediction)

    function prediction(){
        fetch("https://api.nationalize.io/?name=mohamad")
            .then(res => res.json())
            .then(data => {
                Nationality.innerHTML = `<p> Nationality:${data.country_id}</p>`
            })
        fetch("https://api.agify.io/?name=nour")
            .then(res => res.json())
            .then(data => {
                Age.innerHTML = `<p> Age:${data.age}</p>`
            }) 
        fetch("https://api.genderize.io/?name=rio")
            .then(res => res.json())
            .then(data => {
                Gender.innerHTML = `<p> Gender:${data.gender}</p>`
            })
    }

}