async function ClickEvent(audioParam) {
    var audio = new Audio(audioParam);
    console.log(audio);
    for (let i = 0; i < 1000000000; i++) {
        audio.currentTime = 0.01;
        audio.play();
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay
    }
}