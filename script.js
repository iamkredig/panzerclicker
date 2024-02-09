function classRemove(item, classname) {return item.classList.remove(classname)} 
function classAdd(item, classname) {return item.classList.add(classname)} 
function classToggle(item, classname) {return item.classList.toggle(classname)} 

let clicks = 0;
let cursor = 0;
let granny = 0;
let bullet3 =0;
let bullet4 =0;
let bullet5 =0;

let sound = false;

let clickscount = document.querySelector('#clicks');
let incomecount = document.querySelector('#income'); 
let tank = document.querySelector('.panzer');
let cursorBtn = document.querySelector('#cursor');
let grannyBtn = document.querySelector('#granny');
let bullet3Btn = document.querySelector('#bullet3');
let bullet4Btn = document.querySelector('#bullet4');
let bullet5Btn = document.querySelector('#bullet5');
let resetBtn = document.querySelector('#reset');

function updateUtils() {

    // update ui
    let clicks1 = clicks.toFixed()
    clickscount.textContent = clicks1

    document.querySelector('#cursor_amount').textContent = cursor;
    document.querySelector('#granny_amount').textContent = granny;
    document.querySelector('#bullet3_amount').textContent = bullet3;
    document.querySelector('#bullet4_amount').textContent = bullet4;
    document.querySelector('#bullet5_amount').textContent = bullet5;
   
    let incomen1  = cursor*0.1 + granny*1 + bullet3*8 + bullet4*47 + bullet5*260;
    let incomen2  = Number(incomen1).toFixed(1);
    incomecount.textContent=(incomen2)

    // update save game
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('cursor', cursor);
    localStorage.setItem('granny', granny);
    localStorage.setItem('bullet3', bullet3);
    localStorage.setItem('bullet4', bullet4);
    localStorage.setItem('bullet5', bullet5);
}
function load() {

    // load save game
    clicks = localStorage.getItem('clicks');
    clicks = parseInt(clicks);
    clickscount.textContent = clicks;

    if (localStorage.getItem('cursor').length != 0) {
        cursor = localStorage.getItem('cursor');
        cursor = parseInt(cursor);
        document.querySelector('#cursor_amount').textContent = cursor;
        document.querySelector('#cursor_cost').textContent = Math.round(15*(Math.pow(1.2, cursor)));
    }
    if (localStorage.getItem('granny').length != 0) {
        granny = localStorage.getItem('granny');
        granny = parseInt(granny);
        document.querySelector('#granny_amount').textContent = granny;
        document.querySelector('#granny_cost').textContent = Math.round(110*(Math.pow(1.045, granny)));
    }
    if (localStorage.getItem('bullet3').length != 0) {
        bullet3 = localStorage.getItem('bullet3');
        bullet3 = parseInt(bullet3);
        document.querySelector('#bullet3_amount').textContent = bullet3;
        document.querySelector('#bullet3_cost').textContent = Math.round(1100*(Math.pow(1.14, bullet3)));
    }
    if (localStorage.getItem('bullet4').length != 0) {
        bullet4 = localStorage.getItem('bullet4');
        bullet4 = parseInt(bullet4);
        document.querySelector('#bullet4_amount').textContent = bullet4;
        document.querySelector('#bullet4_cost').textContent = Math.round(12000*(Math.pow(1.15, bullet4)));
    }
    if (localStorage.getItem('bullet5').length != 0) {
        bullet5 = localStorage.getItem('bullet5');
        bullet5 = parseInt(bullet5);
        document.querySelector('#bullet5_amount').textContent = bullet5;
        document.querySelector('#bullet5_cost').textContent = Math.round(130000*(Math.pow(1.15, bullet5)));
    }
}


// events
tank.addEventListener('click', () => {
    clicks++;
    if (sound) {
        let sound = document.createElement('audio');
        sound.id = clicks;                              // deprecated
        sound.src = "click sound.mp3";
        sound.play();
    }

    updateUtils();
});
cursorBtn.addEventListener('click', () => {
    if (clicks >= Math.round(15*(Math.pow(1.2, cursor)))) {
        clicks = clicks - Math.round(15*(Math.pow(1.2, cursor)));
        cursor++;
        document.querySelector('#cursor_cost').textContent = Math.round(15*(Math.pow(1.2, cursor)));
        updateUtils();
    } 
});
grannyBtn.addEventListener('click', () => {
    if (clicks >= Math.round(110*(Math.pow(1.045, granny)))) {
        clicks = clicks - Math.round(110*(Math.pow(1.045, granny)));
        granny++;
        document.querySelector('#granny_cost').textContent = Math.round(110*(Math.pow(1.045, granny)));
        updateUtils();
    } 
});
bullet3Btn.addEventListener('click', () => {
    if (clicks >= Math.round(1100*(Math.pow(1.14, bullet3)))) {
        clicks = clicks - Math.round(1100*(Math.pow(1.14, bullet3)));
        bullet3++;
        document.querySelector('#bullet3_cost').textContent = Math.round(1100*(Math.pow(1.14, bullet3)));
        updateUtils();
    }
});
bullet4Btn.addEventListener('click', () => {
    if (clicks >= Math.round(12000*(Math.pow(1.15, bullet4)))) {
        clicks = clicks - Math.round(12000*(Math.pow(1.15, bullet4)));
        bullet4++;
        document.querySelector('#bullet4_cost').textContent = Math.round(12000*(Math.pow(1.15, bullet4)));
        updateUtils();
    }
});
bullet5Btn.addEventListener('click', () => {
    if (clicks >= Math.round(130000*(Math.pow(1.15, bullet5)))) {
        clicks = clicks - Math.round(130000*(Math.pow(1.15, bullet5)));
        bullet5++;
        document.querySelector('#bullet5_cost').textContent = Math.round(130000*(Math.pow(1.15, bullet5)));
        updateUtils();
    }
});
resetBtn.addEventListener('click', () => {
    clicks = 0;
    granny = 0;
    cursor = 0;
    bullet3 = 0;
    bullet4 = 0;
    bullet5 = 0;
});

document.querySelector('video').volume = 0;

document.querySelector('#emotionalid').addEventListener('click',() => {

    document.querySelector('video').volume = 1;
    document.querySelector('video').currentTime = 0;
    document.querySelector('video').play();
});

    
// loop
let clicker = setInterval(() => {
    if (cursor > 0)
        clicks = clicks + cursor*0.1;
    if (granny > 0)
        clicks = clicks + granny*1;
    if (bullet3 > 0)
        clicks = clicks + bullet3*8;
    if (bullet4 > 0)
        clicks = clicks + bullet4*47;
    if (bullet5 > 0)
        clicks = clicks + bullet5*260;
}, 1000);

let upateIfavailable = setInterval(() => {
    if (clicks >= Math.round(15*(Math.pow(1.2, cursor)))) { classRemove(cursorBtn, "greyout")} else{  classAdd(cursorBtn, "greyout")}
    if (clicks >= Math.round(110*(Math.pow(1.045, granny)))) { classRemove(grannyBtn, "greyout")} else{  classAdd(grannyBtn, "greyout")}
    if (clicks >= Math.round(1100*(Math.pow(1.14, bullet3)))) { classRemove(bullet3Btn, "greyout")} else{  classAdd(bullet3Btn, "greyout")}
    if (clicks >= Math.round(1100*(Math.pow(1.14, bullet4)))) { classRemove(bullet4Btn, "greyout")} else{  classAdd(bullet4Btn, "greyout")}
    if (clicks >= Math.round(1100*(Math.pow(1.14, bullet5)))) { classRemove(bullet5Btn, "greyout")} else{  classAdd(bullet5Btn, "greyout")}

    updateUtils()
}, 10);

load();