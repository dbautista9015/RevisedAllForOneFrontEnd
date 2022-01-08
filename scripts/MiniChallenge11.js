import { ModelMethod } from "./NewModelMethod.js";

const SingleInputField = (text) => {

    //Create input-group

    
    //Create input tag
    let h2 = document.createElement('h2');
    h2.className = 'text-white';
    h2.textContent = 'Ask yourself a question and click button to get answer';
    
    //Append it to injectHere ID
    
    injectHere.appendChild(h2);


}


const MakeMiniCh11 = () => {
    SingleInputField("Ask yourself a question and get an answer");
    let button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Enter';

    injectHereUpper.appendChild(button);

    button.addEventListener('click', () => {
        
        let magicBallArray = ['No', 'Yes', 'Maybe', 'I dont know', 'Try again', 'What would your future self say'];

        let miniCh11Model = {
            answer: magicBallArray
        };

        ModelMethod('http://localhost:5000/allforone/minich11', miniCh11Model);


    });

}

export {MakeMiniCh11}
