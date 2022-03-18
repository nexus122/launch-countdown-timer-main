/* Primer intento, funciona pero nos complicamos... */

// Creamos el estado de la aplicacion con los dias, horas, minutis y segundos.
let state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 3,
    daysBox: document.querySelector(".timer--days .timer--box"),
    hoursBox: document.querySelector(".timer--hours .timer--box"),
    minutesBox: document.querySelector(".timer--minutes .timer--box"),
    secondsBox: document.querySelector(".timer--seconds span"),      
}

//Queremos que cada segundo nos reste un segundo del tiempo total. Cuando los segundos llegan a 0 nos tiene que restar un minuto. Cuando mlos minutos llegan a 0 nos tiene que restar una hora,  cunado las horas llegan a 0 nos tiene que restar un dia y cunado las 4 variables llegan a cero terimina el contador.
 
// Funcion que nos inicia el contador
function timer() {
    // Inicializamos las variables a sus valores correspondientes
    state.daysBox.innerHTML = state.days;
    state.hoursBox.innerHTML = state.hours;
    state.minutesBox.innerHTML = state.minutes;
    state.secondsBox.innerHTML = state.seconds;

    // Set interval de 1 segundo, modifica los valores del estado e imprime por pantalla los resultados
    let timerBucle = setInterval(function() {
        // Si todos los valores estan a 0 paramos la aplicacion
        if (state.days === 0 && state.hours === 0 && state.minutes === 0 && state.seconds === 0){
            clearInterval(timerBucle); // Para el set interval
            return;
        }        

        // Si los segundos estan a 0 restamos 1 a minutos y ponemos segundos a 59        
        if (state.seconds == 0 && state.minutes >= 1){
            console.log("Entramos en segundos")
            state.minutes--;
            state.seconds = 60;
            console.log("minutos: " + state.minutes);

            // Modificamos el DOM
            state.minutesBox.innerHTML = state.minutes;
        }else if(state.seconds == 0){
            console.log("Entramos en el else de segundos")
            state.seconds = 60;

            if(state.hours >= 1 || state.days >= 1){
                state.minutes = 59;
                if(state.hours >= 1){
                    state.hours--
                    state.hoursBox.innerHTML = state.hours;
                }
            }

            state.minutesBox.innerHTML = state.minutes;
            
            
        }

        // Si los minutos estan a 0 restamos 1 a horas y ponemos minutos a 59
        if (state.minutes == 0 && state.hours >= 1){
            console.log("Entramos en minutos")
            state.hours--;
            state.minutes = 59;
            console.log("minutos: " + state.minutes);            

            // Modificamos el DOM
            state.minutesBox.innerHTML = state.minutes;
            state.hoursBox.innerHTML = state.hours;
        }else if(state.minutes == 0 && state.hours >= 1){
            console.log("Entramos en el else de minutos");
            state.minutes = 59;
            state.minutesBox.innerHTML = state.minutes;
            state.hoursBox.innerHTML = state.hours;
        }

        // Si las horas estan a 0 restamos uno a dias y ponemos horas a 23.
        if (state.hours == 0 && state.days >= 1){
            state.days--;
            state.hours = 23;
            console.log("minutos: " + state.minutes);

            // Modificamos el DOM
            state.daysBox.innerHTML = state.days;
            state.minutesBox.innerHTML = state.minutes;
            state.hoursBox.innerHTML = state.hours;
        }else if(state.hours == 0 && state.minutes == 0 && state.seconds == 0){
            state.hours = 23;
            // Modificamos el DOM
            state.daysBox.innerHTML = state.days;
            state.minutesBox.innerHTML = state.minutes;
            state.hoursBox.innerHTML = state.hours;
        }

        state.seconds--;
        console.log("segundos: ", state.seconds);                
        state.secondsBox.innerHTML = state.seconds;

    }, 1000);
    
 }

 timer();