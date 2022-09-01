let imgList = document.querySelectorAll('.pic')
let picList = document.querySelector('.picList')
let btn_left = document.querySelector('.btn_left')            
let btn_right = document.querySelector('.btn_right')
let picListLength = 820*imgList.length
let count1 = 1    
let imgTime = null
btn_left.addEventListener('click',leftMove)            
btn_right.addEventListener('click',rightMove)    

picList.style.left=`${-820*1}px`   
function leftMove(){
    clearInterval(timerAuto)
    auto()
    picList.style.transition='all .5s ease'
    count1--;
    picList.style.opacity=0.5
    setTimeout(()=>{
        picList.style.opacity=1
    },500)
    if(count1<=0){
        setTimeout(()=>{
            picList.style.transition='none'
            picList.style.left=`${-820*4}px`
            count1=4;
        },450)
    }
    picList.style.left=`${-(picListLength-820*(imgList.length-count1))}px`;
}

function rightMove(){
    clearInterval(timerAuto)
    auto()
    picList.style.transition='all .5s ease'
    count1++;
    picList.style.opacity=0.5
    setTimeout(()=>{
        picList.style.opacity=1
    },500)
    if(count1>=4){
        setTimeout(()=>{
            picList.style.transition='none'
            picList.style.left=`${-820*0}px`
            count1=0;
        },450)
    }
    picList.style.left=`${-820*count1}px`;
}


function auto(){
    timerAuto=setInterval(()=>{
        picList.style.opacity=0.5
        showdow()
        rightMove()
    },2000)
}
auto()

function showdow(){
    setTimeout(()=>{
        picList.style.opacity=1
    },500)
}