var currentIndex = 0;
function slideTo(index){
    console.log(index);
    var list = document.querySelector('.list');
    var liWidth = document.querySelector('.list li').offsetWidth;
    if(index === 5){
        list.style.transitionDuration = '0s';
        list.style.left = 0;
        setTimeout(function(){
            list.style.transitionDuration = '';
            currentIndex = 1;
            list.style.left = -liWidth + 'px';
        }, 50)
        return;
    }
    if(index === -1){
        list.style.transitionDuration = '0s'
        list.style.left = -2360 + 'px';
        setTimeout(function (){
            list.style.transitionDuration = ''
            currentIndex = 3
            list.style.left = -liWidth * 3 + 'px';
        },50)
        return;
    }
    var left = -index * liWidth;
    list.style.left = left + 'px';
}
function slideNext() {
    currentIndex++;
    slideTo(currentIndex);
}
function slidePrev() {
    currentIndex--;
    slideTo(currentIndex);
}


//绑定事件
document.querySelector('.slider .prev').onclick = function () {
    slidePrev();
}

document.querySelector('.slider .next').onclick = function () {
    slideNext();
}

var bullets = document.querySelectorAll('.pagination .bullet');
for (var i = 0; i < bullets.length; i++) {
    bullets[i].index = i;
    bullets[i].onclick = function () {
        // console.log(this.index);
        currentIndex = this.index;
        slideTo(currentIndex);
    }
}

document.querySelector('.slider').onmouseover = function () {
    stop()
}
document.querySelector('.slider').onmouseout = function () {
    auto()
}
//自动轮播
var id;
function auto() {
    id = setInterval(function () {
        slideNext();
    }, 3000)
}

function stop() {
    clearInterval(id)
}
auto();
