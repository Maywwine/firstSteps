const selectMenu = document.querySelectorAll('select');
const actualTime = document.querySelector('.actual-time');
const setAlarmBtn = document.querySelector('.btn');
const content = document.querySelector('.content');

let alarmTime, alarmState = 'noset';
const ringtone = new Audio('../Assets/ringtone.mp3');

for(let i = 23 ; i >=0 ; i--){
   i = i < 10 ? "0"+ i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option);
}

for(let i = 59; i >= 0 ; i-- ){
    i = i < 10 ? "0" + i : i;
    let option = `<option value=${i}>${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option);
}

setInterval( ()=> {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

     h = h < 10 ? '0'+ h : h;
     m = m < 10 ? '0' + m : m;
     s = s <10 ? '0' + s : s;
    
     actualTime.innerHTML = `${h}:${m}:${s}`;
     
    
    if(alarmTime === `${h}:${m}`){
        console.log('now');
        ringtone.play();
        ringtone.loop = true;       
    }
    
} , 1000);

setAlarmBtn.addEventListener('click', ()=>{
    alarmTime =  `${selectMenu[0].value} : ${selectMenu[1].value}`
    if(alarmTime.includes('Hour') || alarmTime.includes('Minute')){
        return alert('You should set the right Time');
    }
    checkState(alarmState);
})

function checkState(state){
    if(state == 'noset'){
        content.classList.add('disable');
        setAlarmBtn.innerText = 'Clear';
        alarmState = 'set';
    } else {
        content.classList.remove('disable');
        alarmTime = ' ';
        ringtone.pause();
        alarmState = 'noset';
        setAlarmBtn.innerText = 'set';
    }
}