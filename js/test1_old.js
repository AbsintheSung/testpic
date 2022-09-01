let picList = document.querySelector('.picList')
let picArr = document.querySelectorAll('.pic')
let btn_left = document.querySelector('.btn_left')
let btn_right = document.querySelector('.btn_right')
let picListWidth = picList.style.width
let idxNum = 2;
let autoTime = null
console.log(picArr,picArr.length)
picList.style.width= 820*picArr.length+'px'


btn_left.addEventListener('click',leftTurn)
btn_right.addEventListener('click',rightTurn)

//使用自動後的顯示設定
function show(num){
    picList.style.transition='all .8s ease'
    picList.style.left=-820*num+'px' 
    setTimeout(()=>{
        picList.style.opacity='1'
    },800)
    if(num>=5){
        picList.style.opacity='1'
        setTimeout(()=>{
            picList.style.transition='none'
            picList.style.left=0+'px' 
        },0)
    }
}

function opacity(){
    setTimeout(()=>{
        picList.style.opacity='1'
    },800)
}

//左&右 設定
function right(){
    if(idxNum===5){
        idxNum=1
        picList.style.transition='none'
        picList.style.left=-820*idxNum+'px' 
    }
    opacity()
    setTimeout(()=>{
        idxNum=idxNum+1;
        picList.style.left=null
        picList.style.transition='all .8s ease'
        if(idxNum===4){
            picList.style.left=(-820*idxNum)+'px'; 
            setTimeout(()=>{
                picList.style.transition='none'
                picList.style.left=0+'px'
                idxNum=0
                console.log('settimeout',idxNum)
            },800)
        }
        picList.style.left=(-820*idxNum)+'px'; 
    },10)
}
function left(){        
    if(idxNum === 0){
        idxNum=4;
        picList.style.transition='none'
        picList.style.left=(-820*idxNum)+'px' 
    }
    opacity()
    setTimeout(()=>{
        idxNum=idxNum-1;
        picList.style.left=null
        picList.style.transition='all .8s ease'
        if(idxNum === 1){
            picList.style.left=(-820*idxNum)+'px'; 
            setTimeout(()=>{
                picList.style.transition='none'
                picList.style.left=(-4100)+'px'
                idxNum=5
            },800)
        }
        picList.style.left=(-820*idxNum)+'px';  
    },10)
    
}

//自動&啟動
function autoChange(num){
    autoTime = setInterval(()=>{
        idxNum++;
        picList.style.opacity='0.5'
        if(idxNum>5){
            idxNum=1
        }
        show(idxNum)
    },3000)
}
autoChange(idxNum);

//按鍵監聽
function rightTurn(){
    clearInterval(autoTime)
    picList.style.opacity='0.5'
    right() 
    autoChange()
}

function leftTurn(){
    clearInterval(autoTime)
    picList.style.opacity='0.5'
    left()
    autoChange()
}

