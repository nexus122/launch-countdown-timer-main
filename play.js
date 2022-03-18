/* Primer intento, funciona pero nos complicamos... */
// Creamos el estado de la aplicacion con los dias, horas, minutis y segundos.

let state = {
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 0,
    daysBox: document.querySelector(".timer--days .timer--box--bottom"),
    hoursBox: document.querySelector(".timer--hours .timer--box--bottom"),
    minutesBox: document.querySelector(".timer--minutes .timer--box--bottom"),
    secondsBox: document.querySelector(".timer--seconds .timer--box--bottom"),
}

//Queremos que cada segundo nos reste un segundo del tiempo total. Cuando los segundos llegan a 0 nos tiene que restar un minuto. Cuando mlos minutos llegan a 0 nos tiene que restar una hora,  cunado las horas llegan a 0 nos tiene que restar un dia y cunado las 4 variables llegan a cero terimina el contador.

// Funcion que nos inicia el contador
function timer() {
    // Inicializamos las variables a sus valores correspondientes
    dubleNumber(state.days, state.daysBox);
    dubleNumber(state.hours, state.hoursBox);
    dubleNumber(state.minutes, state.minutesBox);
    dubleNumber(state.seconds, state.secondsBox);

    // Set interval de 1 segundo, modifica los valores del estado e imprime por pantalla los resultados
    let timerBucle = setInterval(function () {
        // Si todos los valores estan a 0 paramos la aplicacion
        if (state.days === 0 && state.hours === 0 && state.minutes === 0 && state.seconds === 0) {
            clearInterval(timerBucle); // Para el set interval
            return;
        }

        // Si los segundos estan a 0 restamos 1 a minutos y ponemos segundos a 59        
        if (state.seconds == 0 && state.minutes >= 1) {            
            state.minutes--;
            state.seconds = 60;            

            // Modificamos el DOM
            dubleNumber(state.minutes, state.minutesBox);
        } else if (state.seconds == 0) {            

            state.seconds = 60;

            if (state.hours >= 1 || state.days >= 1) {
                state.minutes = 59;
                if (state.hours >= 1) {
                    state.hours--
                    dubleNumber(state.hours, state.hoursBox);
                }
            }

            state.minutesBox.innerHTML = state.minutes;


        }

        // Si los minutos estan a 0 restamos 1 a horas y ponemos minutos a 59
        if (state.minutes == 0 && state.hours >= 1) {            
            state.hours--;
            state.minutes = 59;            

            // Modificamos el DOM
            dubleNumber(state.minutes, state.minutesBox);
            dubleNumber(state.hours, state.hoursBox);
        } else if (state.minutes == 0 && state.hours >= 1) {            
            state.minutes = 59;
            dubleNumber(state.minutes, state.minutesBox);
            dubleNumber(state.hours, state.hoursBox);
        }

        // Si las horas estan a 0 restamos uno a dias y ponemos horas a 23.
        if (state.hours == 0 && state.days >= 1) {
            state.days--;
            state.hours = 23;
            console.log("minutos: " + state.minutes);

            // Modificamos el DOM
            dubleNumber(state.days, state.daysBox);
            dubleNumber(state.hours, state.hoursBox);
            dubleNumber(state.minutes, state.minutesBox);
            dubleNumber(state.seconds, state.secondsBox);
        } else if (state.hours == 0 && state.minutes == 0 && state.seconds == 0) {
            state.hours = 23;
            // Modificamos el DOM
            dubleNumber(state.days, state.daysBox);
            dubleNumber(state.hours, state.hoursBox);
            dubleNumber(state.minutes, state.minutesBox);
        }

        state.seconds--;        
        dubleNumber(state.seconds, state.secondsBox);

        document.title = `${state.days} ${state.hours}:${state.minutes}:${state.seconds}`

    }, 1000);

}

timer();

// Funcion para escribir un numero de dos cifras
function dubleNumber(num, donde) {
    // Comprobamos si el numero tiene menos de 2 digitos, en ese caso añadimos un 0 delante.
    if (num.toString().length == 1) {
        donde.innerHTML = "0" + num;
    } else {
        donde.innerHTML = num;
    }
}