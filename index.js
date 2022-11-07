
let timer= document.getElementById ("clock")

function actualizar (){

    let fechahora= new Date();
    let hour= fechahora.getHours();
    let min= fechahora.getMinutes();
    let seg= fechahora.getSeconds();
    let mer= " am"

    if (hour == 12){
        hour = 0
    }
    if (hour>12){
        mer = " pm"
        hour = hour-12
    }
    // if ((hour,min,seg)<10){

    // }

    let time = hour + ":" + min + ":" + seg + mer;
    timer.innerHTML = time;
    setTimeout(actualizar,1000);
}

actualizar()

