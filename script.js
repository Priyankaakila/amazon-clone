const slider = document.querySelectorAll('.image-slider ul img');
const back_btn = document.querySelector('.back');
const next_btn = document.querySelector('.next');

let n=0;

function transition(){
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    slider[n].style.display = 'block';
}
transition();

back_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = slider.length - 1;
    }
    transition();
})

next_btn.addEventListener('click', (e)=>{
    if(n < slider.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    transition();
})
