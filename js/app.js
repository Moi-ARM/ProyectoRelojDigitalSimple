//funciones flecha

const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let s = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr} : ${min} : ${s}`;

    //arreglo que contiene los dias de la semana
    const meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mesAño = meses[fecha.getMonth()];
    let año = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} | ${mesAño}, ${año}`;

    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar');
};

//Formato para agregar un digito más en caso de que el hora vaya del 1-9
const formatoHora = (hora) => {
    if (hora < 10) {
        hora = '0' + hora;
    }
    return hora;
};

//Para hacer que el reloj avance hora a hora
setInterval(mostrarReloj, 1000);