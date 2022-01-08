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

const MakeMiniCh2 = () => {
    SingleInputField('Enter First Number');
    SingleInputField('Enter Second Number');

    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Enter';

    injectHere.appendChild(button);

    let inputFields = document.getElementsByClassName('form-control');

    button.addEventListener('click', () => {
        if (inputFields[0].value !== '' && inputFields[1].value !== '') {
            alert("I made it part 2");
            const miniCh2Model = {
                userNum1: inputFields[0].value,
                userNum2: inputFields[1].value
            };
            ModelMethod('http://localhost:5000/allforone/minich2', miniCh2Model);
        }
    });

}

export {MakeMiniCh2}
