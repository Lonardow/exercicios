function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days')
  for (index = 0; index < dezDaysList.length; index += 1){
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    if(day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18){
      dayItem.className = 'day friday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday';
  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');


function changeColor() {
  let daysToBeChanged = document.querySelectorAll('.holiday');
  let holidayButton = document.querySelector('#btn-holiday');

  holidayButton.addEventListener('click', function() {
    for (let index = 0; index < daysToBeChanged.length; index += 1){
      if (daysToBeChanged[index].style.backgroundColor === 'white' ){
        daysToBeChanged[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        daysToBeChanged[index].style.backgroundColor = 'white';
      }
    }
  })
}

changeColor();

function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');
  let newButtonId = 'btn-friday';
  fridayButton.innerHTML = 'Sexta-Feira';
  fridayButton.id = newButtonId;
  buttonContainer.appendChild(fridayButton)
}

createFridayButton();


function changeColorFriday() {
  let fridayButton = document.querySelector('#btn-friday');
  let friday = document.getElementsByClassName('friday');
  let newFridayText = 'BORABORA!'

  fridayButton.addEventListener('click', function(){
    for (let index = 0; index < friday.length; index += 1) {
        if (friday[index].innerHTML !== newFridayText) {
            friday[index].innerHTML = newFridayText;
        } else {
        friday[index].innerHTML = friday[index]
      }
    }
  })
}

changeColorFriday();

// function displayFridays(fridaysArray) {
//   let getFridayButton = document.querySelector('#btn-friday');
//   let fridays = document.getElementsByClassName('friday');
//   let newFridayText = 'SEXTOU o/';
  

//   getFridayButton.addEventListener('click', function() {
//   for (let index = 0; index < fridays.length; index += 1) {
//     if (fridays[index].innerHTML !== newFridayText) {
//         fridays[index].innerHTML = newFridayText;
//     } else {
//         fridays[index].innerHTML = fridaysArray[index];
//       }
//     }
//   })
// };

// displayFridays();
// // let dezFridays = [ 4, 11, 18, 25 ];
// // displayFridays(dezFridays);