

(function(){
    var mainSlider= document.querySelector('.slider-main');
    var innerSliderOne=document.querySelector('.slider-inner-one');
    var innerSliderTwo=document.querySelector('.slider-inner-two');
    var images=document.querySelectorAll('.img');
    var imageItems=[];
    var current=0; //현재위치
    var target=0;  //스크롤탑값
    var ease=0.075;
    
    
    function lerp(start,end, t){
        return start*(1 - t) + end * t;
    }
    function transformElement(el, transform){
        el.style.transform=transform;
    }
    function animate(){
        target=window.scrollY;
        current = lerp(current, target,ease).toFixed(2);
        //console.log(current)
        transformElement(mainSlider,'translate3d( -'+ current +'px, 0, 0)')
        transformElement(innerSliderTwo,'translate3d( -'+ (current*1.1) +'px, 0, 0)')
    
        for(var i=0; i<imageItems.length; i++){
            if(current < target - 50 || current > target + 50){
                transformElement(imageItems[i], `scale(0.8)`)
            }else{
                transformElement(imageItems[i], `scale(1)`)
            }
        }
       //console.log(imageItems)
    
    
        requestAnimationFrame(animate)
    
        
    }
    
    function ImageItems(el){
       this.el =el;
       this.current=150;
       this.target=150;
       this.ease=0.1;
    
       if(this.target != 0){
        this.target=0;
       }
       this.current = lerp(this.current, this.target,this.ease).toFixed(2);
    
       //console.log(this.current);
       this.el.querySelector('img').scale= this.current+"%";
    }
    images.forEach(image => {
        imageItems.push(image)
        //console.log(imageItems)
    })
    //console.log(images);
    function init(){
        document.body.style.height=mainSlider.getBoundingClientRect().width - (
            window.innerWidth -  window.innerHeight) + "px";
        
    }
    
    
    setTimeout(()=>{
        init();
        animate();
    },1000)
})();
