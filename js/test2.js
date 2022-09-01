// let moveList =document.querySelector('.moveList')
let listArr = document.querySelectorAll('.list1')
let all_a = document.querySelectorAll('.point_a')
let List  = document.querySelector('.List')
let index = 0;
let moveTime = null
// console.log(listArr.length)
// console.log(all_a,all_a.length)

function move(num1,num2,num3){
    num1.style.transform =`translateX(${num2}px)` 
    if(num3>=(listArr.length-1)){
        index=0;
        setTimeout(()=>{
            num1.style.transition='none'
            num1.style.transform=`translateX(${0}px)`
            all_a[0].style.backgroundColor = 'red';
            all_a[3].style.backgroundColor = '';
        },1000)
    }
}

all_a[index].style.backgroundColor = 'red';
for(let i=0;i<all_a.length;i++){
    listArr[i].count = i
        all_a[i].onclick=function(){
            index = listArr[i].count
            console.log(index)

            List.style.transition='.5s'
            clearInterval(moveTime)
            setTimeout(()=>{
                autoMovie()
            },1000)

            // List.style.transform=`translateX(${0-(920*index)}px)`;
            move(List,(-920*index))
            setPoint()
        }
}

function setPoint(){
    for(let i=0;i<all_a.length;i++){
        all_a[i].style.backgroundColor = ''; 
    }
    //  console.log(index)          
    all_a[index].style.backgroundColor = 'red';   
    if(index>=3){
        all_a[0].style.backgroundColor = 'red';   
    }
}

function autoMovie(){
    moveTime = setInterval(()=>{
    // console.log(index)
    index++;
    List.style.transition='.5s'
    setPoint()
    move(List,(-920*index),index)
    },2500)
}
function stopAutoPlay() {
    clearInterval(moveTime);
}

List.addEventListener("mouseenter", stopAutoPlay);
List.addEventListener("mouseleave", autoMovie);
autoMovie()
