window.addEventListener('load',function(){
   let focus=this.document.querySelector('.focus');
   let ul=focus.children[0];
   let w=focus.offsetWidth;
   let ol=focus.children[1];
   let index=0;
//    自动滚动
   var timer=this.setInterval(function(){
       index++;
       let translatex=-index*w;
       ul.style.transition='all .3s';
       ul.style.transform='translateX('+translatex+'px)';
   },2000);
//    过度完毕之后执行
   ul.addEventListener('transitionend',function(){
       if(index>=3){
           index=0;
           ul.style.transition='none';
           let translatex=-index*w;
           ul.style.transform='translateX('+translatex+'px)';
       }else if(index<0){
           index=2;
           ul.style.transition='none';
           let translatex=-index*w;
           ul.style.transform='translateX('+translatex+'px)';
       }
    //    小圆圈跟着变化
       ol.querySelector('.current').classList.remove('current');
       ol.children[index].classList.add('current');
   })
//    手动滑动
   let startX=0;
   let moveX=0;
   let flag=false;

   ul.addEventListener('touchstart',function(e){
       startX=e.targetTouches[0].pageX;
       clearInterval(timer);
   });
   ul.addEventListener('touchmove',function(e){       
       flag=true;
       moveX=e.targetTouches[0].pageX-startX;
       let translatex=-index*w+moveX;
       ul.style.transition='none';
       ul.style.transform='translateX('+translatex+'px)';
    //    阻止屏幕滚动的行为？？？
       e.preventDefault();
   })
   ul.addEventListener('touchend',function(e){
        if(flag){
            if(Math.abs(moveX)>50){
                if(moveX>0){
                    index--;
                }
                else{
                    index++;
                }
                let translatex=-index*w;
                ul.style.transition='all .3s';
                ul.style.transform='translateX('+translatex+'px)';                
            }
            else{
                let translatex=-index*w;
                ul.style.transition='all .1s';
                ul.style.transform='translateX('+translatex+'px)';
            }
        }
        clearInterval(timer);      
        timer=setInterval(function(){
            index++;
            let translatex=-index*w;
            ul.style.transition='all .3s';
            ul.style.transform='translateX('+translatex+'px)';
        },2000);
   });





   
})