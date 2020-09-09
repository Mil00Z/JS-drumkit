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

function playinClick(){

    const keycode = this.dataset.key;
    // console.log(keycode);

    usePlay(document.querySelector(`audio[data-key="${keycode}"]`));
    
    this.classList.add('playing');

}

function usePlay(elementAudio) {

    try {

        elementAudio.currentTime = 0 ;
        elementAudio.play();

    } catch (error) {

        window.location.href = `http://stackoverflow.com/search?q=[js]+${error.message}`;
        
    }
 

} 

function removeAnim(e) {

    this.classList.remove('playing');

}

