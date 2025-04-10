let imagediv = document.getElementById('imagediv');
let images = document.querySelectorAll('.slider-image');
let find_btn = document.querySelector('#findBtn')
let x = 1;
setInterval(function () {
    imagediv.style.scrollBehavior = "smooth"
    imagediv.scrollLeft += 200
    x++;
    if (x == 570) {
        imagediv.style.scrollBehavior = "auto"
        x = 1;
        imagediv.scrollLeft = 0;
    }
}, 50);

document.querySelector('#findBtn').addEventListener('click', async function () {
    
    document.querySelector('#oppara').innerHTML = `<a href="#greet"><b>Looks like the chefs don't know that dish! 🍽️ Click here to Try another?</b></a>
<div id="meals">
  <table>
    <thead>
      <tr>
        <th>Our chef knows these</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Apam balik</td></tr>
      <tr><td>Apple & Blackberry Crumble</td></tr>
      <tr><td>Apple Frangipan Tart</td></tr>
      <tr><td>Ayam Percik</td></tr>
      <tr><td>Bakewell tart</td></tr>
      <tr><td>Banana Pancakes</td></tr>
      <tr><td>Beef and Mustard Pie</td></tr>
      <tr><td>Beef and Oyster pie</td></tr>
      <tr><td>Beef Bourguignon</td></tr>
      <tr><td>Beef Brisket Pot Roast</td></tr>
      <tr><td>Beef Dumpling Stew</td></tr>
      <tr><td>Beef Lo Mein</td></tr>
      <tr><td>Beef Rendang</td></tr>
      <tr><td>Beef stroganoff</td></tr>
      <tr><td>Beef Sunday Roast</td></tr>
      <tr><td>Bitterballen (Dutch meatballs)</td></tr>
      <tr><td>Braised Beef Chilli</td></tr>
      <tr><td>Bread and Butter Pudding</td></tr>
      <tr><td>Breakfast Potatoes</td></tr>
      <tr><td>Broccoli & Stilton soup</td></tr>
      <tr><td>Brown Stew Chicken</td></tr>
      <tr><td>Bulgogi</td></tr>
      <tr><td>Burger</td></tr>
      <tr><td>Butter Chicken</td></tr>
      <tr><td>Cajun spiced fish tacos</td></tr>
      <tr><td>Callaloo Jamaican Style</td></tr>
      <tr><td>Carrot Cake</td></tr>
      <tr><td>Cashew Ghoriba Biscuits</td></tr>
      <tr><td>Chicken & mushroom Hotpot</td></tr>
      <tr><td>Chicken Alfredo Primavera</td></tr>
      <tr><td>Chicken Basquaise</td></tr>
      <tr><td>Chicken Congee</td></tr>
      <tr><td>Chicken Couscous</td></tr>
      <tr><td>Chicken Enchilada Casserole</td></tr>
      <tr><td>Chicken Fajitas</td></tr>
      <tr><td>Chicken Ham and Leek Pie</td></tr>
      <tr><td>Chicken Handi</td></tr>
      <tr><td>Chicken Karaage</td></tr>
      <tr><td>Chicken Marengo</td></tr>
      <tr><td>Chicken Parmentier</td></tr>
      <tr><td>Chicken Quinoa Greek Salad</td></tr>
      <tr><td>Chickpea Fajitas</td></tr>
      <tr><td>Chocolate Avocado Mousse</td></tr>
      <tr><td>Chocolate Caramel Crispy</td></tr>
      <tr><td>Chocolate Gateau</td></tr>
      <tr><td>Chocolate Raspberry Brownies</td></tr>
      <tr><td>Chocolate Souffle</td></tr>
      <tr><td>Choc Chip Pecan Pie</td></tr>
      <tr><td>Christmas Pudding Flapjack</td></tr>
      <tr><td>Christmas Pudding Trifle</td></tr>
      <tr><td>Clam chowder</td></tr>
      <tr><td>Classic Christmas pudding</td></tr>
      <tr><td>Corned Beef and Cabbage</td></tr>
      <tr><td>Crab Linguine</td></tr>
      <tr><td>Cream Cheese Tart</td></tr>
      <tr><td>Creamy Tomato Soup</td></tr>
      <tr><td>Crispy Sausages and Greens</td></tr>
      <tr><td>Dal fry</td></tr>
      <tr><td>Dundee cake</td></tr>
      <tr><td>Easter Biscuits</td></tr>
      <tr><td>Eccles Cakes</td></tr>
      <tr><td>Eton Mess</td></tr>
      <tr><td>Fennel Dauphinoise</td></tr>
      <tr><td>Fish pie</td></tr>
      <tr><td>French Lentils With Garlic and Thyme</td></tr>
      <tr><td>French Onion Soup</td></tr>
      <tr><td>French Omelette</td></tr>
      <tr><td>Fresh Tomato Fettuccine</td></tr>
      <tr><td>Fruit and Cream Cheese Breakfast Pastries</td></tr>
      <tr><td>Fudge</td></tr>
      <tr><td>Full English Breakfast</td></tr>
      <tr><td>Garides Saganaki</td></tr>
      <tr><td>Gigantes Plaki</td></tr>
      <tr><td>Gluten Free Chocolate Cake</td></tr>
      <tr><td>Goan Fish Curry</td></tr>
      <tr><td>Greek Lamb Souvlaki</td></tr>
      <tr><td>Grilled Mackerel with Spicy Dabu-Dabu Relish</td></tr>
      <tr><td>Honey Balsamic Chicken with Crispy Broccoli & Potatoes</td></tr>
      <tr><td>Hot Chocolate Fudge</td></tr>
      <tr><td>Hot and Sour Soup</td></tr>
      <tr><td>Irish stew</td></tr>
      <tr><td>Jam Roly-Poly</td></tr>
      <tr><td>Jamaican Beef Patties</td></tr>
      <tr><td>Japanese Katsudon</td></tr>
      <tr><td>Jerk chicken with rice & peas</td></tr>
      <tr><td>Kafteji</td></tr>
      <tr><td>Katsu Chicken curry</td></tr>
      <tr><td>Kentucky Fried Chicken</td></tr>
      <tr><td>Key Lime Pie</td></tr>
      <tr><td>Kidney Bean Curry</td></tr>
      <tr><td>Kumpir</td></tr>
      <tr><td>Lamb Biryani</td></tr>
      <tr><td>Lamb Rogan josh</td></tr>
      <tr><td>Lamb Tagine</td></tr>
      <tr><td>Lancashire hotpot</td></tr>
      <tr><td>Lasagne</td></tr>
      <tr><td>Leblebi Soup</td></tr>
      <tr><td>Lemon Cheesecake</td></tr>
      <tr><td>Lemon Drizzle Cake</td></tr>
      <tr><td>Lentil Soup</td></tr>
      <tr><td>Lobster Thermidor</td></tr>
      <tr><td>Lyonnaise Potatoes</td></tr>
      <tr><td>Madeira Cake</td></tr>
      <tr><td>Massaman Beef curry</td></tr>
      <tr><td>Matar Paneer</td></tr>
      <tr><td>Mediterranean Pasta Salad</td></tr>
      <tr><td>Mince Pies</td></tr>
      <tr><td>Minced Beef Pie</td></tr>
      <tr><td>Moussaka</td></tr>
      <tr><td>Mustard champ</td></tr>
      <tr><td>Nasi lemak</td></tr>
      <tr><td>New York cheesecake</td></tr>
      <tr><td>Nutty Chicken Curry</td></tr>
      <tr><td>Osso Buco alla Milanese</td></tr>
      <tr><td>Oxtail with broad beans</td></tr>
      <tr><td>Pad See Ew</td></tr>
      <tr><td>Pad Thai</td></tr>
      <tr><td>Panackelty</td></tr>
      <tr><td>Pancakes</td></tr>
      <tr><td>Parkin Cake</td></tr>
      <tr><td>Pasta and Beans</td></tr>
      <tr><td>Peach & Blueberry Grunt</td></tr>
      <tr><td>Peanut Butter Cheesecake</td></tr>
      <tr><td>Pear Tarte Tatin</td></tr>
      <tr><td>Pease pudding</td></tr>
      <tr><td>Peking Duck</td></tr>
      <tr><td>Peri-peri chicken and spaghetti</td></tr>
      <tr><td>Pilchard puttanesca</td></tr>
      <tr><td>Piri-piri chicken and slaw</td></tr>
      <tr><td>Pizza Express Margherita</td></tr>
      <tr><td>Pork Cassoulet</td></tr>
      <tr><td>Pork Chop with Mango Sauce</td></tr>
      <tr><td>Pork Pie</td></tr>
      <tr><td>Portuguese prego with green piri-piri</td></tr>
      <tr><td>Potato Gratin with Chicken</td></tr>
      <tr><td>Prawn & Fennel Linguine</td></tr>
      <tr><td>Pumpkin Pie</td></tr>
      <tr><td>Pumpkin Soup</td></tr>
      <tr><td>Queijadas de Leite</td></tr>
      <tr><td>Ratatouille</td></tr>
      <tr><td>Red Peas Soup</td></tr>
      <tr><td>Recheado Masala Fish</td></tr>
      <tr><td>Ribollita</td></tr>
      <tr><td>Roast fennel and aubergine paella</td></tr>
      <tr><td>Roasted Eggplant With Tahini, Pine Nuts, and Lentils</td></tr>
      <tr><td>Rock Cakes</td></tr>
      <tr><td>Rogaliki (Polish Croissant Cookies)</td></tr>
      <tr><td>Rumbledethumps</td></tr>
      <tr><td>Salmon Avocado Salad</td></tr>
      <tr><td>Salmon Prawn Risotto</td></tr>
      <tr><td>Saltfish and Ackee</td></tr>
      <tr><td>Sardine pasta</td></tr>
      <tr><td>Sausage Plait</td></tr>
      <tr><td>Seafood fideuà</td></tr>
      <tr><td>Seri muka kuih</td></tr>
      <tr><td>Shakshuka</td></tr>
      <tr><td>Shawarma</td></tr>
      <tr><td>Shepherds Pie</td></tr>
      <tr><td>Shrimp Chow Fun</td></tr>
      <tr><td>Sichuan Pork</td></tr>
      <tr><td>Smoky Lentil Chili with Squash</td></tr>
      <tr><td>Som Tam</td></tr>
      <tr><td>Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots</td></tr>
      <tr><td>Spaghetti Bolognese</td></tr>
      <tr><td>Spanish Tortilla</td></tr>
      <tr><td>Spiced Aubergine with Rice & Lentils</td></tr>
      <tr><td>Spicy Arrabiata Penne</td></tr>
      <tr><td>Spicy North African Potato Salad</td></tr>
      <tr><td>Spicy Penne Arrabiata</td></tr>
      <tr><td>Spicy Pork Vindaloo</td></tr>
      <tr><td>Stamppot</td></tr>
      <tr><td>Steak and Kidney Pie</td></tr>
      <tr><td>Sticky Toffee Pudding Ultimate</td></tr>
      <tr><td>Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt</td></tr>
      <tr><td>Strawberry Rhubarb Pie</td></tr>
      <tr><td>Summer Pistou</td></tr>
      <tr><td>Summer Pudding</td></tr>
      <tr><td>Supreme Pizza</td></tr>
      <tr><td>Sushi</td></tr>
      <tr><td>Swedish Meatballs</td></tr>
      <tr><td>Sweet and Sour Pork</td></tr>
      <tr><td>Sweet Potato Pie</td></tr>
      <tr><td>Taco Soup</td></tr>
      <tr><td>Tahini Lentils</td></tr>
      <tr><td>Taiyaki</td></tr>
      <tr><td>Tamagoyaki Japanese Omelette</td></tr>
      <tr><td>Tandoori chicken</td></tr>
      <tr><td>Teriyaki Chicken Casserole</td></tr>
      <tr><td>Thai Green Curry</td></tr>
      <tr><td>Thai Red Curry</td></tr>
      <tr><td>Toad In The Hole</td></tr>
      <tr><td>Tomato & Mozzarella Salad</td></tr>
      <tr><td>Tomato Soup</td></tr>
      <tr><td>Tortilla</td></tr>
      <tr><td>Tuna Nicoise</td></tr>
      <tr><td>Turkey Meatloaf</td></tr>
      <tr><td>Turkish Pide</td></tr>
      <tr><td>Vegan Chocolate Cake</td></tr>
      <tr><td>Vegan Lasagna</td></tr>
      <tr><td>Vegetable Shepherd's Pie</td></tr>
      <tr><td>Vegetarian Chilli</td></tr>
      <tr><td>Venetian Duck Ragu</td></tr>
      <tr><td>Waffles</td></tr>
      <tr><td>Walnut Roll Gužvara</td></tr>
      <tr><td>Wontons</td></tr>
      <tr><td>Yaki Udon</td></tr>
      <tr><td>Yaki-soba</td></tr>
      <tr><td>Yorkshire Pudding</td></tr>
      <tr><td>Zapiekanka</td></tr>
    </tbody>
  </table>
</div>
`;

    let food_name = document.querySelector('#ipfield').value;
    console.log(food_name);

    //alerting on empty namebox
    if (food_name.trim()=="") {
        alert("Please enter valid food name.");
        return;
    }



    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`
    try {
        let response = await fetch(url)
        let data = await response.json()
        let paraop=document.querySelector('#oppara');
       

        /////////////////////////////
    let meal = data.meals[0];

    paraop.innerHTML = `<b>Meal Name:</b> ${meal.strMeal}<br><br>`;
    paraop.innerHTML += `<br>`;

    paraop.innerHTML += `<iframe width="150" height="150" src="https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}"></iframe><br>
   <br><a style="color: rgb(117, 4, 193);" href="https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}" target="_blank">Watch Video Tutorial</a><br>`;

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

