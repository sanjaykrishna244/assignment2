// Code for darkmode and light mode
function Mode() {
    document.body.classList.toggle("dark-mode");
    var rename = document.getElementsByClassName(`rename-tag`);
    var icon = document.getElementById(`dlmode-btn`);
    if(document.body.classList.contains("dark-mode")){
        for(let i=0; i<rename.length; i++){
            rename[i].src = `images/edit-dm.svg`;
        }
        icon.src = `images/sun.svg`;

    }
    else{
        for(let i=0; i<rename.length; i++){
            rename[i].src = `images/edit-lm.svg`;
        }
        icon.src = `images/moon.svg`;
    }
}
var turner=0;
var count=0;
const scorex = document.getElementById(`point-x`);
const scoreo = document.getElementById(`point-o`);
const fboxes = document.getElementsByClassName(`fbox`)
const thboxes = document.getElementsByClassName(`thbox`);
const boxes5 = document.getElementsByClassName(`box5`);

function disable(boxes){
    for(let i=0; i < boxes.length; i++){
        boxes[i].disabled = true;
    }
}
function check(cells,...boxes){
    var win = true;
    for(let i = 0; i < boxes.length; i++){
        for(let j = 0; j < boxes.length; j++){
            if(boxes[i].textContent != boxes[j].textContent){
                win = false;
            }
        }
    }

    if(win){
        if(boxes[0].textContent == `X`){
            const name = document.getElementById(`player-x`).textContent
            document.getElementById(`winner`).textContent = `${name} Wins`;
            scorex.textContent++;
            disable(cells);
        }
        else if(boxes[0].textContent == `O`){
            const name = document.getElementById(`player-o`).textContent
            document.getElementById(`winner`).textContent = `${name} Wins`;
            scoreo.textContent++;
            disable(cells);
        }
    }
    
}
function re_set(boxes){
    turner = 0;
    count = 0;    
    for(let i=0; i < boxes.length; i++){
        boxes[i].textContent = ``;
        boxes[i].disabled = false;
    }
    document.getElementById(`player-x`).style.color = `red`;
    document.getElementById(`player-o`).style.color = `var(--s-color)`;
    document.getElementById(`winner`).textContent = `_`;
}
function rename(alpha){
    let name = window.prompt(`Enter the new name for ${alpha}`);
    document.getElementById(`player-${alpha}`).textContent = name;
}

function change(changer){
    if (document.getElementById(changer).textContent == "4X4"){
        document.getElementById(`game-changer1`).textContent = `3X3`;
        document.getElementById(`game-changer2`).textContent = `5X5`;
        document.getElementById(`title`).textContent = `4X4`;        
        document.getElementById(`three`).style.display = `none`;document.getElementById(`five`).style.display = `none`;
        document.getElementById(`four`).style.display = `flex`;
        re_set(thboxes);re_set(boxes5);
    }
    else if(document.getElementById(changer).textContent == "5X5"){
        document.getElementById(`game-changer1`).textContent = "3X3";
        document.getElementById(`game-changer2`).textContent = `4X4`;
        document.getElementById(`title`).textContent = `5X5`;                
        document.getElementById(`five`).style.display = `flex`;
        document.getElementById(`four`).style.display = `none`;document.getElementById(`three`).style.display = `none`;
        re_set(fboxes);re_set(thboxes);
    }
    else{
        document.getElementById(`game-changer1`).textContent = "4X4";
        document.getElementById(`game-changer2`).textContent = `5X5`;
        document.getElementById(`title`).textContent = `3X3`;                
        document.getElementById(`three`).style.display = `flex`;
        document.getElementById(`four`).style.display = `none`;document.getElementById(`five`).style.display = `none`;
        re_set(fboxes);re_set(boxes5);
    }
}
//main-function
function turn(box, boxlength){
    if(turner == 0){
        box.textContent = `X`;
        box.disabled = true;
        turner = 1;
        count++;
        document.getElementById(`player-o`).style.color = `blue`;
        document.getElementById(`player-x`).style.color = `var(--s-color)`;
    }
    else{
        box.textContent = `O`;
        box.disabled = true;
        turner = 0;
        count++;
        document.getElementById(`player-x`).style.color = `red`;
        document.getElementById(`player-o`).style.color = `var(--s-color)`;
    }
    if(boxlength == 3){
        check(thboxes, thboxes[0], thboxes[1], thboxes[2]);
        check(thboxes, thboxes[3], thboxes[4], thboxes[5]);
        check(thboxes, thboxes[6], thboxes[7], thboxes[8]);
        check(thboxes, thboxes[0], thboxes[3], thboxes[6]);
        check(thboxes, thboxes[1], thboxes[4], thboxes[7]);
        check(thboxes, thboxes[2], thboxes[5], thboxes[8]);
        check(thboxes, thboxes[0], thboxes[4], thboxes[8]);
        check(thboxes, thboxes[2], thboxes[4], thboxes[6]);
    }
    else if(boxlength == 4){
        check(fboxes,fboxes[0],fboxes[1],fboxes[2],fboxes[3]);
        check(fboxes,fboxes[4],fboxes[5],fboxes[6],fboxes[7]);
        check(fboxes,fboxes[8],fboxes[9],fboxes[10],fboxes[11]);
        check(fboxes,fboxes[12],fboxes[13],fboxes[14],fboxes[15]);
        check(fboxes,fboxes[0],fboxes[4],fboxes[8],fboxes[12]);
        check(fboxes,fboxes[1],fboxes[5],fboxes[9],fboxes[13]);
        check(fboxes,fboxes[2],fboxes[6],fboxes[10],fboxes[14]);
        check(fboxes,fboxes[3],fboxes[7],fboxes[11],fboxes[15]);
        check(fboxes,fboxes[0],fboxes[5],fboxes[10],fboxes[15]);
        check(fboxes,fboxes[3],fboxes[6],fboxes[9],fboxes[12]);
    }
    else if(boxlength == 5){
        check(boxes5, boxes5[0], boxes5[1], boxes5[2], boxes5[3], boxes5[4]);
        check(boxes5, boxes5[5], boxes5[6], boxes5[7], boxes5[8], boxes5[9]);
        check(boxes5, boxes5[10], boxes5[11], boxes5[12], boxes5[13], boxes5[14]);
        check(boxes5, boxes5[15], boxes5[16], boxes5[17], boxes5[18], boxes5[19]);
        check(boxes5, boxes5[20], boxes5[21], boxes5[22], boxes5[23], boxes5[24]);
        check(boxes5, boxes5[0], boxes5[5], boxes5[10], boxes5[15], boxes5[20]);
        check(boxes5, boxes5[1], boxes5[6], boxes5[11], boxes5[16], boxes5[21]);
        check(boxes5, boxes5[2], boxes5[7], boxes5[12], boxes5[17], boxes5[22]);
        check(boxes5, boxes5[3], boxes5[8], boxes5[13], boxes5[18], boxes5[23]);
        check(boxes5, boxes5[4], boxes5[9], boxes5[14], boxes5[19], boxes5[24]);
        check(boxes5, boxes5[0], boxes5[6], boxes5[12], boxes5[18], boxes5[24]);
        check(boxes5, boxes5[4], boxes5[8], boxes5[12], boxes5[16], boxes5[20]);
    }
}
function resetscores(){
    re_set(thboxes);
    re_set(fboxes);
    scoreo.textContent = 0;
    scorex.textContent = 0;
}
