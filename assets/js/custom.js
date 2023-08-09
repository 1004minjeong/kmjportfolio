//counter
function counter() {
    if ($('.skill_wrap .count').size()) {
        $c = $('.skill_wrap .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#000',
                        trackColor: '#999',
                        scaleColor: '#999',
                        scaleLength: 4,
                        lineWidth: 4,
                        size: 180,
                        lineCap: 'round',
                        animate: {
                        duration: speed,
                        enabled: true
                        }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}


//intro- box2
window.addEventListener('mousemove',function(e){
    document.querySelector('#slidephoto').style.top=`${e.clientY}px`;
    document.querySelector('#slidephoto').style.left=`${e.clientX}px`;
    document.querySelector('#slidephoto').style.transform=`translate(${-e.clientX*0.2}px,${-e.clientY*0.2}px)`
 })


document.querySelector('#chainn').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="0%"
    document.querySelector('#chainn').style.color="rgba(177,177,177)"
})

document.querySelector('#chainn').addEventListener('mouseleave',function(){
    document.querySelector('#chainn').style.color="initial";
})

document.querySelector('#aty').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="-120%"
    document.querySelector('#aty').style.color="rgba(177,177,177)"
})

document.querySelector('#aty').addEventListener('mouseleave',function(){
    document.querySelector('#aty').style.color="initial";
})

document.querySelector('#mic').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="-240%"
    document.querySelector('#mic').style.color="rgba(177,177,177)"
})

document.querySelector('#mic').addEventListener('mouseleave',function(){
    document.querySelector('#mic').style.color="initial";
})


//about me
let galleryWrapper=document.querySelectorAll('.hero_gallery_wrapper');//직접적으로 부르기


//console.log(galleryWidth)

let scroll={
    current:[],//배열로바꾸기
    target:[],//배열로바꾸기
    ease:0.05,
    speed:0.25,
    limit:[]//배열로바꾸기
}
let init=()=>{
    onResize();
    initAnimation();
}

let onResize=()=>{
    galleryWrapper.forEach((wrapper,index)=>{
        let galleryWidth=wrapper.getBoundingClientRect().width;
        scroll.limit[index]=galleryWidth- window.innerWidth //갤러리의넓이 각각받기

    })//galleryWrapper의 배열의 item(index)이들어옴
}
let initAnimation=()=>{
    galleryWrapper.forEach((wrapper,index)=>{
        scroll.current[index]=0;
        scroll.target[index]=0;
    })
}


let onScroll=function(e){

    let speed=e.deltaY;//마우스휠을 올릴때와 내릴떄
    //console.log(speed)

    galleryWrapper.forEach((wrapper,index)=>{
       if(index%2==0){//나머지구하기 나머지가 0인애
        scroll.target[index] += speed * scroll.speed;
       }else{
        scroll.target[index] -= speed * scroll.speed;
       }
    })
    return speed;
}
function clamp(max,number){
    return Math.min(number,max)
}
function lerp(p1,p2,p3){//lerp 값을 줄이기위한함수
    return p1+(p2 -  p1)*p3;
}
let update=()=>{

    galleryWrapper.forEach((wrapper,index)=>{
        scroll.target[index]=clamp(scroll.limit[index],scroll.target[index])
        scroll.current[index]=lerp(scroll.current[index], scroll.target[index],scroll.ease)
        scroll.current[index]=parseFloat(scroll.current[index].toFixed(2))
        wrapper.style.transform=`translate3d(${-scroll.current[index]}px,0,0)`
       
    })
    window.requestAnimationFrame(update)//계속실행되게만듬
}
update();
window.addEventListener('resize',onResize)
window.addEventListener('wheel',onScroll)
window.addEventListener('load',()=>{
    init();
})


        let executed = false;

        const observer = new IntersectionObserver((entries) => {
            // entries는 관찰 대상들의 상태 변경 정보를 담은 배열
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 0.8 && !executed) {
                    $('.skill-per').each(function() {
                        let $this = $(this);
                        let per = $this.attr('per');
                        $this.css({
                            width: per + "%"
                        });
                        $({
                            aniValue: 0
                        }).animate({
                            aniValue: per
                        }, {
                            duration: 1000,
                            step: function() {
                                $this.attr("per", Math.ceil(this.aniValue) + "%")
                            }
                        });
                    });
                    executed = true;
                }
            });
        }, {
            threshold: 0.8  // 관찰 대상이 뷰포트에 80% 보일 때 콜백 함수가 실행
        });
        
        const target = document.querySelector('.skillbarwrap');
        observer.observe(target);

        /* section3 */
let posterBtn = $('.poster_btn ul li');
let posterCont = $('.poster_cont .poster');

//posterCont 모두 안보이게
//posterCont.hide().eq(0).show();

posterBtn.click(function (e) {
    e.preventDefault();
    let target = $(this);
    let index = target.index();
/*     console.log(index) */
  //  posterCont.hide().eq(index).fadeIn();
    posterCont.find('figure').removeClass('move')
   // posterCont.eq(index).find('figure').addClass('move')
   posterCont.css({'z-index':5});
    posterCont.eq(index).css({'z-index':30});

    posterBtn.removeClass('active')
    target.addClass('active')
})



//section4
let pTag1 = document.querySelector('.first-parallel');
let pTag2 = document.querySelector('.second-parallel');
let pTag3 = document.querySelector('.third-parallel');


let textArr1 = 'HAVE A GOODTIME HAVE A GOODTIME HAVE A GOODTIME HAVE A GOODTIME HAVE A GOODTIME HAVE A GOODTIME HAVE A GOODTIME'.split(' ');
let textArr2 = 'THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU THANK YOU'.split(' ');
let textArr3 = 'KO MIN JEONG KO MIN JEONG KO MIN JEONG KO MIN JEONG KO MIN JEONG KO MIN JEONG KO MIN JEONG KO MIN JEONG KO MIN JEONG'.split(' ');

let count1 = 0;
let count2 = 0;
let count3 = 0;

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)

function initTexts(element, textArry) {
    textArry.push(...textArry)
    for (let i = 0; i < textArry.length; i++) {
        element.innerHTML += `${textArry[i]}\u00A0\u00A0\u00A0`;
    }
}



function animate() {
    count1++;
    count2++;
    count3++;


    count1 = marqueeText(count1, pTag1,-1)
    count2 = marqueeText(count2, pTag2,1)
    count3 = marqueeText(count3, pTag3,-1)


    window.requestAnimationFrame(animate)

}
function marqueeText(count, element, direction){

    if(count>element.scrollWidth /2){
    count=0;
        element.style.transform=`translate(0,0)`

    }
    element.style.transform=`translate(${count * direction}px,0)`
    return count;
}


    function scrollHandler(){
        count1 += 25;
        count2 += 25;
        count3 += 25;
    }
animate();

window.addEventListener("scroll",scrollHandler)


//팝업창
var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

// 24시간 기준 쿠키 설정하기  
var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
    var expires = "expires=" + todayDate.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var couponClose = function(){
    if($("input[id='check']").is(":checked") == true){
        setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
    }
    $(".popup").hide();
}

$(document).ready(function(){
    cookiedata = document.cookie;
    //console.log(cookiedata);
    if(cookiedata.indexOf("close=Y")<0){
        $(".popup").show();
    }else{
        $(".popup").hide();
    }
    $(".close").click(function(){
        couponClose();
    });
});
