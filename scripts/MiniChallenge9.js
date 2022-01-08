import { ModelMethod } from "./NewModelMethod.js";

const SingleInputField = (text) => {

    //Create input-group
    let div = document.createElement('div');
    div.className = "input-group ";
    
    //Create input tag
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.className = 'form-control';
    input.setAttribute("placeholder", text);
    
    //Append it to injectHere ID
    injectHere.appendChild(div);
    div.appendChild(input);

}


const MakeMiniCh9 = () => {
    SingleInputField("Enter type of Food or leave empty to randomize");


    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Enter';

    injectHere.appendChild(button);

    let button2 = document.createElement('button');
    button2.className = 'btn btn-primary';
    button2.textContent = 'Random Restraunt';

    

    let inputFields = document.getElementsByClassName('form-control');

    button.addEventListener('click', () => {
        let restaurantCategoriesArray = ['mexican', 'american', 'asian'];
        let mexicanRestaurant = ['pollo loco', 'taco bell', 'del taco'];
        let americanRestaurant = ['mcdonalds', 'burger King', 'in n out'];
        let asianRestaurant = ['panda express', 'china express', 'dave wong'];

        if (inputFields[0].value !== '' && restaurantCategoriesArray.includes(inputFields[0].value.toLowerCase())) {
            alert("I made it part 9");
            let miniCh9Model = {};


            if (inputFields[0].value.toLowerCase() === restaurantCategoriesArray[0]) {
                miniCh9Model = {
                    restaurant: mexicanRestaurant
                };
            }

            else if (inputFields[0].value.toLowerCase() === restaurantCategoriesArray[1]) {
                miniCh9Model = {
                    restaurant: americanRestaurant
                };
            }
             else if (inputFields[0].value.toLowerCase() === restaurantCategoriesArray[2]) {
                miniCh9Model = {
                    restaurant: asianRestaurant
                };
            }
            else {
                miniCh9Model = {
                    restaurant: ['']
                };
            }

            ModelMethod('http://localhost:5000/allforone/minich9', miniCh9Model);
        }

        else {

            let miniCh9Model = {
                restaurant: mexicanRestaurant.concat(americanRestaurant, asianRestaurant)
            };

            ModelMethod('http://localhost:5000/allforone/minich9', miniCh9Model);
        }

    });

}

export {MakeMiniCh9}
