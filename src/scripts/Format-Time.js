// Formats the time and returns a string

function formatTime(time) {
    const [minutos, segundos] = [Math.floor(time / 60), time % 60]

    const pad = (n) => n.toString().padStart(2, '0');

    return pad(minutos) + ':' + pad(segundos);
}

export default formatTime;