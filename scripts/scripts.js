import { MakeMiniCh1 } from "./MiniChallenge1.js";
import { MakeMiniCh2 } from "./MiniChallenge2.js";
import { MakeMiniCh3 } from "./MiniChallenge3.js";
import { MakeMiniCh4 } from "./MiniChallenge4.js";
import { MakeMiniCh5 } from "./MiniChallenge5.js";
import { MakeMiniCh6 } from "./MiniChallenge6.js";
import { MakeMiniCh7 } from "./MiniChallenge7.js";
import { MakeMiniCh9 } from "./MiniChallenge9.js";
import { MakeMiniCh11 } from "./MiniChallenge11.js";

import { ClearArea } from "./resetLayout.js";

const miniCh1Url = 'http://localhost:5000/allforone/minich1',
miniCh2Url = 'http://localhost:5000/allforone/minich2',
miniCh3Url = 'http://localhost:5000/allforone/minich3',
miniCh4Url = 'http://localhost:5000/allforone/minich4',
miniCh5Url = 'http://localhost:5000/allforone/minich5',
miniCh6Url = 'http://localhost:5000/allforone/minich6',
miniCh7Url = 'http://localhost:5000/allforone/minich7',
miniCh8Url = 'http://localhost:5000/allforone/minich8',
miniCh9Url = 'http://localhost:5000/allforone/minich9',
miniCh11Url = 'http://localhost:5000/allforone/minich11';

const allUrl = [miniCh1Url, miniCh2Url, miniCh3Url, miniCh4Url, miniCh5Url, miniCh6Url, miniCh7Url, miniCh8Url, miniCh9Url, miniCh11Url];

const imageBackground = ['../images/Mini_CH1_Duplicate.png', '../images/Mini_CH2_Duplicate.png', 
'../images/Mini_CH3_Duplicate.png', '../images/Mini_CH4_Duplicate.png', '../images/Mini_CH5_Duplicate.png', '../images/Mini_CH6_Duplicate.png',
'../images/Mini_CH7_Duplicate.png', '../images/Mini_CH8_Duplicate.png', '../images/Mini_CH9_Duplicate.png', '../images/Mini_CH11_Duplicate.png'];

const allMiniChallengeTitles = ['Mini Challenge #1 - Say Hello', 'Mini Challenge #2 - Add 2 Numbers', 'Mini Challenge #3 - Asking Questions',
'Mini Challenge #4 - Greater Than or Less Than', 'Mini Challenge #5 - Mad Lib', 'Mini Challenge #6 - Odd or Even', 'Mini Challenge #7 - Reverse It',
'Mini Challenge #8 - Directory', 'Mini Challenge #9 - Restauraunt Picker', 'Mini Challenge #11 - Magic 8 Ball'];

let miniBtns = document.getElementsByClassName('miniBtns');
let backgroundImage = document.getElementById('backgroundImage');
let mainMenuBtn = document.getElementById('mainMenuBtn');
let title = document.getElementsByClassName('title')[0];
let subTitle = document.getElementsByClassName('subTitle')[0];
let injectHere = document.getElementById('injectHere');

//When Mini Challenge Buttons 1-11 clicked
for (let i = 0; i < miniBtns.length; i++) {
    miniBtns[i].addEventListener('click', e => {
        backgroundImage.style.backgroundImage = `url(${imageBackground[i]})`;
        mainMenuBtn.className = 'btn btn-light px-5 visible';
        title.textContent = allMiniChallengeTitles[i];
        subTitle.className = 'heading subTitle text-white hidden';

        switch(i) {
            case 0:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh1();
                break;
            case 1:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh2();
                break;
            case 2:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh3();
                break;
            case 3:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh4();
                break;
            case 4:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh5();
                break;
            case 5:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh6();
                break;
            case 6:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh7();
                break;
            case 7:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh8();
                break;
            case 8:
                ClearArea();
                answer.textContent = '';
                MakeMiniCh9();
                break;
            case 9:
                ClearArea();
                injectHereUpper.innerHTML = '';
                answer.textContent = '';
                MakeMiniCh11();
                break;
        }

    });
}

//When Main Menu Button is clicked
mainMenuBtn.addEventListener('click', e => {
    ClearArea();
    answer.textContent = '';
    backgroundImage.style.backgroundImage = "url('../images/Main_Menu_Duplicate.png')";
    mainMenuBtn.className = 'btn btn-light px-5 hidden';
    title.textContent = 'All For One';
    subTitle.className = 'heading subTitle text-white visible';
});


