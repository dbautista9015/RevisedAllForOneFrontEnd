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

const MakeMiniCh5 = () => {
    SingleInputField('Enter an adjective');
    SingleInputField('Enter a biry type');
    SingleInputField('Enter a room');
    SingleInputField('Enter a verb');
    SingleInputField('Enter a verb');
    SingleInputField("Enter a relative's name");
    SingleInputField('Enter a noun');
    SingleInputField('Enter a liquid');
    SingleInputField('Enter a verb');
    SingleInputField('Enter a body part');


    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Enter';

    injectHere.appendChild(button);

    let inputFields = document.getElementsByClassName('form-control');

    button.addEventListener('click', () => {
        if (inputFields[0].value !== '' && inputFields[1].value !== '' && inputFields[2].value !== '' && inputFields[3].value !== ''
        && inputFields[4].value !== '' && inputFields[5].value !== '' && inputFields[6].value !== '' && inputFields[7].value !== ''
        && inputFields[8].value !== '' && inputFields[9].value) {
            alert("I made it part 5");
            const miniCh5Model = {
                adjective: inputFields[0].value,
                birdType: inputFields[1].value,
                room: inputFields[2].value,
                verb1: inputFields[3].value,
                verb2: inputFields[4].value,
                relativeName: inputFields[5].value,
                noun: inputFields[6].value,
                liquid: inputFields[7].value,
                verb3: inputFields[8].value,
                bodyPart: inputFields[9].value

            };

            ModelMethod('http://localhost:5000/allforone/minich5', miniCh5Model);
        }
    });

}

export {MakeMiniCh5}