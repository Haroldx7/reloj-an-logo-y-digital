let d = document

const horas = d.querySelector('.horas');
const minutos = d.querySelector('.minutos');
const segundos = d.querySelector('.segundos');

let gra = 6;

setInterval(()=>{
    let tiempo = new Date();
    let hor = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * gra;
    let seg = tiempo.getSeconds() * gra;

    horas.style.transform = `rotate(${(hor)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
});

let digital = d.querySelector('.digital');

setInterval(function(){
    let tiempo = new Date();
    let hor = tiempo.getHours();
    let min = tiempo.getMinutes();
    let seg = tiempo.getSeconds();

    hor = hor < 10 ? `0`+hor : hor;
    min = min <= 10 ? `0`+min : min;
    seg = seg <= 10 ? `0`+seg : seg;

    let mostrar = `${hor}:${min}:${seg}`;
    
    if(hor > 12){
        let nuevaHora = hor % 12;
        mostrar = nuevaHora + ":" + min +":"+seg+"PM";
    }else{
        mostrar = hor + ":" + min +":"+seg+"AM";
    }

  

    digital.innerHTML = mostrar;
});