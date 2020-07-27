let keys = document.querySelectorAll('.key');

keys.forEach((item) => {

    item.addEventListener('click', playinClick);
    item.addEventListener('animationend', removeAnim);

});

window.addEventListener('keydown',function(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio){
         return ;
    } 

        usePlay(audio);

        document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.toggle('playing');
  
});

function removeAnim(e) {

    this.classList.remove('playing');

}

function playinClick(){

    const keycode = this.dataset.key;s

    usePlay(document.querySelector(`audio[data-key="${keycode}"]`));
    
    this.classList.add('playing');

}

function usePlay(elementAudio) {

    elementAudio.currentTime = 0 ;
    elementAudio.play();

} 