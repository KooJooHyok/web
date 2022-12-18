const searchEl = document.querySelector('.search'); /* 변수를 찾고 요소 찾기 */
const searchInputEl =document.querySelector('input');


searchEl.addEventListener('click', function() { /* 클릭 이벤트 추가 */

    searchInputEl.founs();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색'); /* 검색창에 글씨 추가 */

});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',''); /* 포커스 해제 될 경우 글씨 지우기 */
    
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {    /* 보고있는 화면 */
console.log(window.scrollY);
if (window.scrollY > 500) {
    //배지 숨기기
   //gsap.to(요소, 지속시간, 옵션);
   gsap.to(badgeEl, .6, {
    opacity: 0,
    display: 'none'
   });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
        x: 0
    });
}else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
        opacity: 1
        }); 
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
        x: 100
    });
    }

}, 300)); /* 0.3초 단위로 부하를 줘서 함수가 많이 실행되는걸 방지 _.throttle 함수, 시간 */

// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
     //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1 간격으로 이미지가 생성된다.
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
      autoplay : {
          delay: 5000
     },
    pagination: {
        el: '.promotion .swiper-pagination' , //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, 
    loop: true, 
    spaceBetween: 30, 
    slidesPerView: 5, 
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', 
      nextEl: '.awards .swiper-next' 
        
    }

});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion' );
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion  // 느낌표 뒤에있는것이 반대값으로 넣음
    if (isHidePromotion) {
        //숨김 처리!
        promotionEl.classList.add('hide');
    }else{
        //보임 처리!
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }


function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 말함
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022숫자가 나옴

