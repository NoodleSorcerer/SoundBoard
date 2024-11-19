function ClickEvent(audio) {
    // Don't let the wizard see
    var audioYoda = new Audio(audio);
    console.log(audioYoda);
    audioYoda.currentTime = 0.01;
    audioYoda.play();
    
}
