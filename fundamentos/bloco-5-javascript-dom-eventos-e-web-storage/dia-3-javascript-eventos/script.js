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
  

  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function decemberDays() {
    let listaDeDias = document.querySelector('#days');
    for (let index in decemberDaysList) {
        let numerosDias = decemberDaysList[index];
        let diasDezembro = document.createElement('li');
        diasDezembro.innerHTML = numerosDias;
        diasDezembro.className = 'day';

        if (numerosDias === 24 || numerosDias === 25 || numerosDias === 31) {
            diasDezembro.className = 'holiday';
            listaDeDias.appendChild(diasDezembro);
        }

        if (numerosDias === 4 || numerosDias === 11 || numerosDias === 18) {
            diasDezembro.className = 'friday';
            listaDeDias.appendChild(diasDezembro);
        }

        if (numerosDias === 25) {
            diasDezembro.className = 'holiday friday';
        }

        listaDeDias.appendChild(diasDezembro);
    }
  }

  decemberDays();

  function createButton (string) {
    let contemBotao = document.querySelector('.buttons-container');
    let bttn = document.createElement('button');
    bttn.innerHTML = string;
    bttn.setAttribute('id', 'btn-holiday');
    contemBotao.appendChild(bttn);
  }

  createButton('Feriados');