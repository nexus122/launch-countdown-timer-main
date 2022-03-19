/* Primer intento, funciona pero nos complicamos... */
// Creamos el estado de la aplicacion con los dias, horas, minutis y segundos.

let state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    // Input Values:
    days_Input: document.forms["timerConfig"].days,
    hours_Input: document.forms["timerConfig"].hours,
    minutes_Input: document.forms["timerConfig"].minutes,
    seconds_Input: document.forms["timerConfig"].seconds,
    // DOM Element
    daysBox: document.querySelector(".timer--days .timer--box--bottom"),
    hoursBox: document.querySelector(".timer--hours .timer--box--bottom"),
    minutesBox: document.querySelector(".timer--minutes .timer--box--bottom"),
    secondsBox: document.querySelector(".timer--seconds .timer--box--bottom"),
    form: document.querySelector(".configTimer"),
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
        console.log(state.days, state.hours, state.minutes, state.seconds);
        if (state.days == 0 && state.hours == 0 && state.minutes == 0 && state.seconds == 0) {
            console.log("Entramos y acabamos");
            clearInterval(timerBucle); // Para el set interval
            return;
        }

        // Si los segundos estan a 0 restamos 1 a minutos y ponemos segundos a 59        
        if (state.seconds == 0 && state.minutes >= 1) {
            console.log("Entramos en minutos");
            state.minutes--;
            state.seconds = 60;

            // Modificamos el DOM
            dubleNumber(state.minutes, state.minutesBox);
        } else if (state.seconds == 0) {
            console.log("Entramos en el else de minutos");
            state.seconds = 60;

            if (state.hours >= 1 || state.days >= 1) {
                console.log("Entramos en el else de minutos en horas");
                state.minutes = 59;
                if (state.hours >= 1) {
                    console.log("Entramos en el if de horas del else de minutos");
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
        ocultar();
        document.title = `${state.days} ${state.hours}:${state.minutes}:${state.seconds}`

    }, 1000);

}

// Funcion para escribir un numero de dos cifras
function dubleNumber(num, donde) {
    // Comprobamos si el numero tiene menos de 2 digitos, en ese caso añadimos un 0 delante.
    if (num.toString().length == 1) {
        donde.innerHTML = "0" + num;        
    } else {
        donde.innerHTML = num;        
    }
}

function ocultar(){
    if(state.days == 0){
        document.querySelector(".timer--days").style.display = "none"
    }
    if(state.days == 0 && state.hours == 0){
        document.querySelector(".timer--hours").style.display = "none"
    }
    if(state.days == 0 && state.hours == 0 && state.minutes == 0){
        document.querySelector(".timer--minutes").style.display = "none"
    }
}

/* Escucha del formulario */
document.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Se ha enviado la información");
    state.form.style.display = "none";
    // Inicializamos los valores del contador.
    state.days = state.days_Input.value;
    state.hours = state.hours_Input.value;
    state.minutes = state.minutes_Input.value;
    state.seconds = state.seconds_Input.value;

    ocultar();

    timer();
});