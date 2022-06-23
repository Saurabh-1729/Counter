const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const show = document.getElementById('value');
// value woh ek span hai jaha outputshow hoga

// MY CODE
let num = 0;
const check = () => {
    if (num > 0) {
        show.style.color = "green";
    }
    if (num < 0) {
        show.style.color = "red";
    }
    if (num === 0) {
        show.style.color = "#222";
    }
}

reset.addEventListener('click', () => {
    num = 0;
    show.textContent = num;
    show.style.color = 'black';
});

decrease.addEventListener('click', () => {
    num = num - 1;
    check();
    show.textContent = num;
});

increase.addEventListener('click', () => {
    num = num + 1;
    check();
    show.textContent = num;

});

// ----------------------------------------------------
// set inital value to zero
// let count = 0;
// // select value and buttons
// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function(e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }

//         if (count > 0) {
//             value.style.color = "green";
//         }
//         if (count < 0) {
//             value.style.color = "red";
//         }
//         if (count === 0) {
//             value.style.color = "#222";
//         }
//         value.textContent = count;
//     });
// });