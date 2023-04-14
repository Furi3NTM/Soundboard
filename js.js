

const buttons = document.querySelectorAll('.sound-button');
const sounds = document.querySelectorAll('audio');

buttons.forEach((button, index) => {
    let isPlaying = false;
    let sound;

    button.addEventListener('click', () => {
        if (!isPlaying) {
            sound = sounds[index].cloneNode();
            sound.addEventListener('ended', () => {
                isPlaying = false;
            });
            sound.play();
            isPlaying = true;
        } else {
            sound.pause();
            sound.currentTime = 0;
            isPlaying = false;
        }
    });
});