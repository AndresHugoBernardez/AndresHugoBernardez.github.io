var inText;
var CreateButton;
var MulChoice;
var closeButton;
var outputWindow;
var correctAnswers;

document.addEventListener("DOMContentLoaded", function () {

  inText = document.getElementById("inText");
  CreateButton = document.getElementById("CreateButton");
  MulChoice = document.getElementById("MulChoice");
  closeButton = document.getElementById("close");
  outputWindow = document.getElementById("Output");
  correctAnswers = document.getElementById("correctAnswers");

  CreateButton.addEventListener("click", function () {

    createMultipleChoice();
    outputWindow.style.display = 'flex';
  });
  closeButton.addEventListener("click", function() {
    outputWindow.style.display = 'none';
      });
  
});

var correctAmount=[];
var N_OPTIONS = 4;
 var MCjsn = '';
function createMultipleChoice() {

  let Noptions = N_OPTIONS;
  let jsnResult;

  MCjsn = parseMulChoice(inText.value);
console.log(MCjsn);
  try {
    jsnResult = JSON.parse(MCjsn);
  } catch (e) {
    console.error("Error parsing JSON:", e.message);
  }

  // delete all the content
  while (MulChoice.firstChild) {
    MulChoice.removeChild(MulChoice.firstChild);
  }

  if (jsnResult.multiple) {

    let N = jsnResult.multiple.length;
    let Clength = correctAmount.length;
    for(let l=0; l<Clength; l++){
    correctAmount.pop();
    }
    for(let l=0; l<N; l++){
    correctAmount.push(0);
    }


    for (let i = 0; i < N; i++) {

      let Question = document.createElement('p');
      Question.innerHTML = jsnResult.multiple[i].Q;
      MulChoice.appendChild(Question);

      let TrueAnswer = document.createElement('p');
      TrueAnswer.innerHTML = jsnResult.multiple[i].T;

      


     

      let NJ = jsnResult.multiple[i].F.length;

      if(NJ < Noptions ) {
        Noptions = NJ;      
      }
      else {
        Noptions = N_OPTIONS-1;
      }

       let randomNumber = Math.floor(Math.random() * (Noptions+1));

      let order = new Array(NJ);
        for (let k = 0; k < NJ; k++) {

          order[k] = k;
        }
        for (let k = 0; k < NJ; k++) {
          let randomIndex = Math.floor(Math.random() * NJ);
          let temp = order[k];
          order[k] = order[randomIndex];
          order[randomIndex] = temp;
          
        }

        let formAnswer = document.createElement('form');

        let j=0;
      for (j = 0; j < Noptions; j++) {

        if (randomNumber == j) {
           let radio = document.createElement('input');
        radio.type = 'radio';
        radio.id = 'answer' + i;
        radio.name = 'answer' + i;
        radio.value = 'option' + j;
        TrueAnswer.prepend(radio);
        formAnswer.appendChild(TrueAnswer);
        formAnswer.onclick = function() {
          let trueAnswer = document.getElementById('answer' + i);
          if (trueAnswer.checked) {
            correctAnswer.style.display = 'block';
            incorrectAnswer.style.display = 'none';
            correctAmount[i]=1;
          }else {
            correctAnswer.style.display = 'none';
            incorrectAnswer.style.display = 'block';
            correctAmount[i]=0;
          }
          checkAnwers();
        };

      
      }
        let FalseAnswer = document.createElement('p');
        FalseAnswer.innerHTML = jsnResult.multiple[i].F[order[j]];
        let radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer' + i;
        radio.value = 'option' + j;
        FalseAnswer.prepend(radio);
        formAnswer.appendChild(FalseAnswer);
        

      }

       if (randomNumber >= j) {
           let radio = document.createElement('input');
        radio.type = 'radio';
        radio.id = 'answer' + i;
        radio.name = 'answer' + i;
        radio.value = 'option' + j;
        TrueAnswer.prepend(radio);
        formAnswer.appendChild(TrueAnswer);
        formAnswer.onclick = function() {
          let trueAnswer = document.getElementById('answer' + i);
          if (trueAnswer.checked) {
            correctAnswer.style.display = 'block';
            incorrectAnswer.style.display = 'none';
            correctAmount[i]=1;
          }else {
            correctAnswer.style.display = 'none';
            incorrectAnswer.style.display = 'block';
            correctAmount[i]=0;
          }
          checkAnwers();
        };

      
      }



      let correctAnswer = document.createElement('p');
      correctAnswer.innerHTML = "¡Respuesta correcta!";
      correctAnswer.style.color = 'green';
      formAnswer.appendChild(correctAnswer);
      correctAnswer.style.display = 'none';
      let incorrectAnswer = document.createElement('p');
      incorrectAnswer.innerHTML = "¡Respuesta incorrecta!";
      incorrectAnswer.style.color = 'red';
      formAnswer.appendChild(incorrectAnswer);
      incorrectAnswer.style.display = 'none';
      MulChoice.appendChild(formAnswer);
    }
      
  }
      }




function parseMulChoice(inTxt) {

  let options = '"F":["';
  let jsnString = '{"multiple":[';
  let trueOption = '"T":"';
  let question = '{"Q":"';
  let character = '0';
  let indx = 0;
  let Nchar = inTxt.length;
  let Qflag = 0;
  let Tflag = 0;
  let Fflag = 0;

  while (indx < Nchar) {

    character = inTxt[indx];

    switch (character) {

      case '/':
        if (inTxt[indx + 1] == '/') {
          indx += 2;
          character = inTxt[indx];
          indx++;
          while((character == '"'||character == "'"||character == '\\') && indx < Nchar) {
          character = inTxt[indx];
          indx++;
          
          }
          while (character != '\n' && indx < Nchar) {
            character = inTxt[indx];
            indx++;
           
          }
        }
        break;

      case '#':
        if (inTxt[indx + 2] == '#') {

          character = inTxt[indx + 1];

          switch (character) {

            case 'Q':

              indx += 2;
              character = inTxt[indx];
              indx++;

              if (Qflag == 1) {


                question += '",';
                trueOption += '",';
                options += '"';
                jsnString += question;
                jsnString += trueOption;
                jsnString += options;
                jsnString += ']}';

                options = '"F":["';
                trueOption = '"T":"';
                question = ',{"Q":"';
                Tflag = 0;
                Fflag = 0;
              }

              Qflag = 1;

              while (character != '\n' && indx < Nchar) {
                character = inTxt[indx];
                indx++;
                 while((character == '"'||character == "'"||character == '\\') && indx < Nchar) {
                    character = inTxt[indx];
                    indx++;
                    }
                if (character != '\n') question += character;
                
              }

              
              break;

            case 'T':

              if (Tflag == 0) {
                Tflag = 1;
                indx += 2;
                character = inTxt[indx];
                indx++;

                while (character != '\n' && indx < Nchar) {
                  character = inTxt[indx];
                  indx++;
                  while((character == '"'||character == "'"||character == '\\') && indx < Nchar) {
                      character = inTxt[indx];
                      indx++;
                  }
                  if (character != '\n') trueOption += character;
                  
                }

                
              }
              break;

            case 'F':

              if (Fflag == 1) options += '","';
              indx += 2;
              Fflag = 1;
              character = inTxt[indx];
              indx++;

              while (character != '\n' && indx < Nchar) {
                character = inTxt[indx];
                  indx++;
                  while((character == '"'||character == "'"||character == '\\') && indx < Nchar) {
                      character = inTxt[indx];
                      indx++;
                  }
                if (character != '\n') options += character;
                
              }

              
              break;
          }
        }
        break;

        default:
          indx++;
          break;
    }

    
  }


  if(Qflag == 1) {
  question += '",';
  trueOption += '",';
  options += '"';
  jsnString += question;
  jsnString += trueOption;
  jsnString += options;
  jsnString += ']}]}';
  return jsnString;
  }
  
  else return '{"multiple":[]}';
}


function checkAnwers() {

if(correctAmount.length > 0) {

  let correct = 0;
  for(let i=0; i<correctAmount.length; i++) {
    if(correctAmount[i] == 1) correct++;
  }
  correctAnswers.innerHTML = correct + "/" + correctAmount.length+":("+(  correct/correctAmount.length*100).toFixed(0)+"%)";

}
}
