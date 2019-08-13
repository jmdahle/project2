$(document).ready(() => {

                $("#fruitButton").on("click", function (event) {
                    $.get('/api/smothii/fruit', (dbFruits) => {
                        // each fruit recipe gets added to array
                        let fruits = dbFruits;
                        for (let i=0; i<fruits.length; i++) {
                          console.log(fruits)  
                        }})
                });

                $("#veggieButton").on("click", function (event) {
                    $.get('/api/smothii/vege', (dbVege) => {
                        // each vege recipe gets added to array
                        let veggies = dbVege;
                        for (let i=0; i<veggies.length; i++) {
                          console.log(veggies)  
                        }})
                });

                $("#userButton").on("click", function (event) {
                    $.get('/api/smothii/user', (dbUser) => {
                        // each fruit gets added to array
                        let userRecipes = dbUser;
                        for (let i=0; i<userRecipes.length; i++) {
                          console.log(userRecipes)  
                        }})
                })
        })

            // function checkStock(){
            // if (stock == 0){
            //     <img src="public/images/outofstock" alt="outOfStock"></img>
            // }