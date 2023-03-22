function randomNums(max) {
    let min = 20;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateArray() {
    var temp = document.querySelector('#first');
    let outer = document.querySelector('.pillar-outer');
    if(outer.children.length != 0) {
        for(element of outer.children) {
            element.style.height = `${randomNums(250)}px`;
        }
    } else {
        for(let i = 0; i < 200; i++) {
            var clon = temp.content.cloneNode(true);
                clon.querySelector(".plr").style.height = `${randomNums(250)}px`;
            outer.appendChild(clon);
        }
    }
}

const colors = ["red", "green", "white", "blue", "pink", "yellow"];
var color = 0;
async function bblSort() {
    let localcolor = color++;
    let outerKids = document.querySelector('.pillar-outer').children;
    for(var i = 0; i < outerKids.length; i++){
        for(var j = 0; j < ( outerKids.length - i -1 ); j++){
            if(parseInt(outerKids[j].style.height) > parseInt(outerKids[j+1].style.height)){
                outerKids[j].style.background = colors[localcolor];
                outerKids[j+1].style.background = colors[localcolor];
                var temp = outerKids[j].style.height;
                outerKids[j].style.height = outerKids[j + 1].style.height;
                outerKids[j+1].style.height = temp;
                await new Promise((resolve) => 
                    setTimeout(() => {
                        resolve();
                    }, 5)
                );
                outerKids[j].style.background = "gray";
                outerKids[j+1].style.background = "gray";
            }
        }
    }
    color--;
}

async function selectionSort() {
    let outerKids = document.querySelector('.pillar-outer').children;
    let localcolor = color++;
    var i, j, min_idx;
    for (i = 0; i < outerKids.length-1; i++)  {
        min_idx = i;
        for (j = i + 1; j < outerKids.length; j++) {
            if (parseInt(outerKids[j].style.height) < parseInt(outerKids[min_idx].style.height)) {
                min_idx = j;
            }
        }
            outerKids[min_idx].style.background = colors[localcolor];
            outerKids[i].style.background = colors[localcolor];
            var temp = outerKids[min_idx].style.height;
            outerKids[min_idx].style.height = outerKids[i].style.height;
            outerKids[i].style.height = temp;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 30)
            );
            outerKids[min_idx].style.background = "gray";
            outerKids[i].style.background = "gray";
    }
    color--;
}

async function insertionSort() {
    let localcolor = (color == colors.length-1) ? 0 : color++;
    let outerKids = document.querySelector('.pillar-outer').children;
    let i, key, j;
    for (i = 1; i < outerKids.length; i++) { 
        key = outerKids[i].style.height;
        j = i - 1; 
        while (j >= 0 && parseInt(outerKids[j].style.height) > parseInt(key)) { 
            outerKids[j + 1].style.height = outerKids[j].style.height;
            outerKids[j + 1].style.background = colors[localcolor];
            j = j - 1; 
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1/(i * outerKids.length))
            );
        } 
        for(kid of outerKids) {
            if(kid.style.background != "gray") {
                kid.style.background = "gray";
            }
        }
        outerKids[j + 2].style.background = "gray";
        outerKids[j + 1].style.height = key; 
    }
    color--;
}