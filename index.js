let imagediv = document.getElementById('imagediv');
let images = document.querySelectorAll('.slider-image');
let find_btn = document.querySelector('#findBtn')
let x = 1;
setInterval(function () {
    imagediv.style.scrollBehavior = "smooth"
    imagediv.scrollLeft += imagediv.clientWidth
    x++;
    if (x == 11) {
        imagediv.style.scrollBehavior = "auto"
        x = 1;
        imagediv.scrollLeft = 0;
    }
}, 2000);

document.querySelector('#findBtn').addEventListener('click', async function () {
    let food_name = document.querySelector('#ipfield').value;
    console.log(food_name);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`
    try {
        response = await fetch(url)
        let data = await response.json()
        let paraop=document.querySelector('#oppara');
       

        /////////////////////////////
    let meal = data.meals[0];

    paraop.innerHTML = `<b>Meal Name:</b> ${meal.strMeal}<br><br>`;
    paraop.innerHTML += `<br>`;

    paraop.innerHTML += `<iframe width="150" height="150" src="https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}"></iframe><br>`;

    paraop.innerHTML += `<b>Steps:</b><br>`;
    paraop.innerHTML += `<p>${meal.strInstructions}</p><br>`;

    paraop.innerHTML += `<img src="${meal.strMealThumb}" alt="Meal Image"height="100+" width="200"><br>`;

    document.querySelector('#ipfield').value = "";
    //////////////////////
    }
   catch(error){
    console.error("Error:", error);
    alert("failed to fetch")
   }
    
})