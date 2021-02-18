const audio_ = document.querySelector('#my_audio');
const audio_2 = document.querySelector('#my_audio2');

const ck_1 = document.querySelector('.chickens1');
const ck_2 = document.querySelector('.chickens2');
const ck_3 = document.querySelector('.chickens3');
const ck_4 = document.querySelector('.chickens4');

ck_1.addEventListener('click', ()=>{ 
    /* ck_1.style.display = 'none' */
    audio_.play();
});

ck_2.addEventListener('click', ()=>{ 
    /* ck_1.style.display = 'none' */
    audio_2.play();
});

ck_3.addEventListener('click', ()=>{ 
    /* ck_1.style.display = 'none' */
    audio_2.play();
});

ck_4.addEventListener('click', ()=>{ 
    /* ck_1.style.display = 'none' */
    audio_1.play();
});