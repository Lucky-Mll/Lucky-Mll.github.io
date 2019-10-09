var currentIndex = 0;

function slideTo(index){
    console.log(currentIndex);
    if(index === 4){
        index = currentIndex = 0;
    }
    if(index === -1){
        index = currentIndex = 3;
    }
    var lis = document.querySelectorAll('.slider .list li');
    document.querySelector('.current').classList.remove('current');
    lis[index].classList.add('current');
}

function slideNext(){
    currentIndex++;
    slideTo(currentIndex);
}
function slidePrev(){
    currentIndex--;
    slideTo(currentIndex);
}

//自动轮播
var id;
function auto(){
    id = setInterval(function(){
        slideNext();
    }, 1500)
}
function stop (){
    clearInterval(id);
}
auto();
document.querySelector('.slider').onmouseover = function(){
    stop();
}
document.querySelector('.slider').onmouseout = function(){
    auto();
}

//按钮
document.querySelector('.slider .prev').onclick = function () {
    slidePrev()  
} 
document.querySelector('.slider .next').onclick = function () {
    slideNext();
}

//鼠标上移 
var bullets = document.querySelectorAll('.pagination .bullet');
for(var i = 0; i < bullets.length; i++){
    bullets[i].index = i;
    bullets[i].onmouseover = function () {
        currentIndex = this.index;
        slideTo(currentIndex);
    }
}

