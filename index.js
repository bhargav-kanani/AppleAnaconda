let snake = document.getElementById('snake');
let apple = document.getElementById('apple');
// let spider = document.getElementById('spider');
let point = document.getElementById('score');
let seconds = document.getElementById('counter');
let r = false;
let d = false;
let l = false;
let u = false;
let appleY
let appleX
const time = 100
const maxLeft = 290
const maxTop = 12
const maxDown = 493
const maxRight = 970
let s = 0
let gameOn = 1



const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function myFunction() {
    snake.style.top = maxTop + 'px'
    snake.style.left = maxLeft + 'px'
    countDown();
    fruit();
}

const right = async () => {
    if (r) {
        let s = window.getComputedStyle(snake), t = s.getPropertyValue('left');
        for (let i = parseInt(t); i < 990; i += 10) {
            if (r) {
                snake.style.left = i
                r = true
                l = false
                u = false
                d = false
                await sleep(time)
            } else {
                break;
            }
        }
    }
}
const down = async () => {
    if (d) {
        let s = window.getComputedStyle(snake), t = s.getPropertyValue('top');

        for (let i = parseInt(t); i < 503; i += 10) {
            if (d) {
                snake.style.top = i
                d = true
                r = false
                u = false
                l = false
                await sleep(time)
            } else {
                break;
            }
        }
    }
}
const left = async () => {
    if (l) {
        let s = window.getComputedStyle(snake), t = s.getPropertyValue('left');
        for (let i = parseInt(t); i >= 290; i -= 10) {
            if (l) {
                snake.style.left = i
                l = true
                r = false
                u = false
                d = false
                await sleep(time)
            } else {
                break;
            }
        }
    }
}
const up = async () => {
    if (u) {
        let s = window.getComputedStyle(snake), t = s.getPropertyValue('top');
        for (let i = parseInt(t); i >= 12; i -= 10) {
            if (u) {
                snake.style.top = i
                u = true
                r = false
                l = false
                d = false
                await sleep(time)
            } else {
                break;
            }
        }
    }
}
window.addEventListener('keydown', function (e) {
    e = e || this.window.event;

    if (e.key == 'ArrowUp') {
        // up arrow

        // let s = window.getComputedStyle(snake) , t = s.getPropertyValue('top'); 
        // if(parseInt(t) > maxTop) {
        //     snake.style.top =  parseInt(t) - 10 + 'px'
        // }
        u = true
        r = false
        l = false
        d = false
        up();
    } else if (e.key == 'ArrowDown') {
        //down arrow
        // let s = window.getComputedStyle(snake) , t = s.getPropertyValue('top'); 

        // if(parseInt(t)<maxDown) {
        //     snake.style.top =  parseInt(t) + 10 + 'px'
        // }
        d = true
        r = false
        u = false
        l = false
        down();
    } else if (e.key == 'ArrowLeft') {
        //left arrow 
        // let s = window.getComputedStyle(snake) , t = s.getPropertyValue('left'); 
        // if(parseInt(t) > maxLeft) {
        //     snake.style.left =  parseInt(t) - 10 + 'px'
        // }
        l = true
        r = false
        u = false
        d = false
        left();

    } else if (e.key == 'ArrowRight') {
        //right arrow   
        // let s = window.getComputedStyle(snake) , t = s.getPropertyValue('left');
        // if(parseInt(t)<maxRight) {
        //     snake.style.left =  parseInt(t) + 10 + 'px'
        // } 
        r = true
        l = false
        u = false
        d = false
        right();
    }

})

const eat = () => {
    let s = window.getComputedStyle(snake), l = s.getPropertyValue('left'), t = s.getPropertyValue('top');
    if (appleX - 10 <= parseInt(l) && appleX + 10 >= parseInt(l) && appleY - 10 <= parseInt(t) && appleY + 10 >= parseInt(t)) {
        score();
        fruit();
    }
    setTimeout(eat, 1);
}

const fruit = () => {
    // let s = window.getComputedStyle(snake) , l = s.getPropertyValue('left'), t = s.getPropertyValue('width');
    // snake.style.width = parseInt(t) + 20 + 'px'
    appleY = Math.floor(Math.random() * (493 - 12) + 12)
    appleX = Math.floor(Math.random() * (970 - 290) + 290)
    apple.style.top = appleY
    apple.style.left = appleX
    // predator();
}

// const predator = () => {
//     let s1 = window.getComputedStyle(apple), l = s1.getPropertyValue('left');
//     let s2 = window.getComputedStyle(spider), t = s2.getPropertyValue('top');
//     let i = parseInt(l)
//     spider.style.left = i - 5 + 'px'
//     console.log(spider.style.top)
//     // if(snake.style.top - 10 <= parseInt(t) && snake.style.left + 10 >= parseInt(l) && appleY -10 <= parseInt(t) && appleY + 10 >= parseInt(t)) {
//     //     alert("ggg")
//     // }
//     //  setTimeout(predator, 1);
// }

const score = () => {
    s += 10
    if (s > 999999) {
        point.style.fontSize = 'x-large';
    }
    point.innerHTML = s
}

const countDown = () => {
    var count = 60, timer = setInterval(function () {
        seconds.innerHTML = count--;
        if (count == -1) {
            clearInterval(timer);
            
           alert(`Your Score is ${s}`)
           // alert('Your Score is',  + s)
           window.location.reload();
        }
    }, 1000);
}

eat();

