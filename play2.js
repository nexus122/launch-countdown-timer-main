/* A la segunda va la vencida! */
// Creamos el estado de la aplicacion con los dias, horas, minutis y segundos.
let state = {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
    daysBox: document.querySelector(".timer--days .timer--box"),
    hoursBox: document.querySelector(".timer--hours .timer--box"),
    minutesBox: document.querySelector(".timer--minutes .timer--box"),
    secondsBox: document.querySelector(".timer--seconds span"),      
}

//Queremos que cada segundo nos reste un segundo del tiempo total. Cuando los segundos llegan a 0 nos tiene que restar un minuto. Cuando mlos minutos llegan a 0 nos tiene que restar una hora,  cunado las horas llegan a 0 nos tiene que restar un dia y cunado las 4 variables llegan a cero terimina el contador.
 
// Funcion que nos inicia el contador
function timer() {
    // Inicializamos las variables a sus valores correspondientes
    dubleNumber(state.seconds, state.secondsBox);
    dubleNumber(state.minutes, state.minutesBox);
    dubleNumber(state.hours, state.hoursBox);
    dubleNumber(state.days, state.daysBox);

    // Set interval de 1 segundo, modifica los valores del estado e imprime por pantalla los resultados
    let timerBucle = setInterval(function() {
        // Si todos los valores estan a 0 paramos la aplicacion
        if (state.days === 0 && state.hours === 0 && state.minutes === 0 && state.seconds === 0){
            clearInterval(timerBucle); // Para el set interval
            return;
        }
        // Si los segundos estan a 0 y los minutos son mayores o iguales a 1, restamos uno a minutos y reiniciamos segundos        
        if(state.seconds == 0 && state.minutes >= 1){
            state.minutes--;
            state.seconds = 60;
        }

        // Si los minutos estan a 0 y las horas son mayores o iguales a 1, restamos 1 hora y reiniciamos minutos y segundos
        if(state.minutes == 0 && state.hours >=1){
            state.hours--;
            state.minutes = 59;
            state.seconds = 60;
        }
        // Si las horas estan a 0 y los dias son mayores o iguales a 1 restamos 1 dia, y reiniciamos horas, minutos y segundos.
        if(state.hours == 0 && state.days >= 1){
            state.days--;
            state.hours = 23;
            state.minutes = 59;
            state.seconds = 60;
        }

        // Siempre restamos 1 segundo
        state.seconds--;
        
        // Convocamos funcion dobleNumber.
        dubleNumber(state.seconds, state.secondsBox);
        dubleNumber(state.minutes, state.minutesBox);
        dubleNumber(state.hours, state.hoursBox);
        dubleNumber(state.days, state.daysBox);        
        
    }, 1000);
    
 }

 function dubleNumber(num, donde){
    // Comprobamos si el numero tiene menos de 2 digitos, en ese caso añadimos un 0 delante.
    if(num.toString().length == 1){
        donde.innerHTML = "0"+num;
    }else{
        donde.innerHTML = num;
    }
 }

 // Iniciamos la funcion timer.
 timer();