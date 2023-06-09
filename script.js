function random(min, max) {
    //min in exclusive and max in inclusive
    min = min || 0;
    return (Math.floor(Math.random() * (max - min) + min + 1));
}

function getComputerChoice() {
    return random(0,3)
}