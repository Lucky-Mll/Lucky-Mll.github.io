 
 //定义一个全局变量，来表示当前图片的索引
 var currentIndex = 0;

 //将轮播切换到指定的图片上
 function slideTo(index){
     if(index === 4){
         index = currentIndex = 0;
     }
     if(index === -1){
         index = currentIndex = 3;
     }
     var lis = document.querySelectorAll('.slider .list li');
     //清除旧焦点
     //xxx.classList.remove(yyyClass);
     //xxx.classList.add(xxxClass);
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

 //绑定事件
 document.querySelector('.slider .prev').onclick = function (){
    slidePrev();
 }
 document.querySelector('.slider .next').onclick = function (){
    slideNext();
 }

 var bullets = document.querySelectorAll('.pagination .bullet');
 for(var i = 0; i < bullets.length; i++){
     bullets[i].index = i;
     bullets[i].onmouseover = function () {
         //console.log(this.index);
         currentIndex = this.index;
         slideTo(currentIndex)
     }
 }
 
 document.querySelector('.slider').onmouseover = function(){
     stop();
 }
 document.querySelector('.slider').onmouseout = function(){
     auto();
 }
 //自动轮播
 var id;
 function auto() {
     id = setInterval(function(){
         slideNext();
     }, 1500)
 }
 function stop (){
     clearInterval(id);
 }
 auto();