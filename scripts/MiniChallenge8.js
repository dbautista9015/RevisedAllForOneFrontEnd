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

const MakeMiniCh8 = () => {
    SingleInputField('Enter a number');

    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Enter';

    injectHere.appendChild(button);

    let inputFields = document.getElementsByClassName('form-control');

    button.addEventListener('click', () => {
        if (inputFields[0].value !== '') {
            alert("I made it part 8");
            const miniCh8Model = {
                userNum: inputFields[0].value
                
            };
            ModelMethod('http://localhost:5000/allforone/minich8', miniCh8Model);
        }
    });



}

export {MakeMiniCh8}