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

const MakeMiniCh3 = () => {
    SingleInputField('What is your name?');
    SingleInputField('What time did you wake up?');
    SingleInputField('AM or PM');

    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Enter';

    injectHere.appendChild(button);

    let inputFields = document.getElementsByClassName('form-control');

    button.addEventListener('click', () => {
        if (inputFields[0].value !== '' && inputFields[1].value !== '' && inputFields[2].value !== '') {
            alert("I made it part 3");
            const miniCh3Model = {
                name: inputFields[0].value,
                time: inputFields[1].value,
                AMorPM: inputFields[2].value
            };
            ModelMethod('http://localhost:5000/allforone/minich3', miniCh3Model);
        }
    });



}

export {MakeMiniCh3}
