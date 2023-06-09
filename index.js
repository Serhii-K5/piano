console.log('Executing index.js script...');

// const divElem = document.querySelector('div');
// divElem.addEventListener('click', (event) => {
//     console.log(event);
// })



// 0. Розглянемо приклад з конспекту щоб зрозуміти детальніше
// + stopPropagation() i stopImmediatePropagation()
//
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", (event) => {
//   console.log("Parent click handler");
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// child.addEventListener("click", (event) => {
//   console.log("Child click handler");
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// descendant.addEventListener("click", (event) => {
//   console.log("Grandchild click handler");
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// 
//
//
//
// 1. Будемо на базі нашої розмітки писати невеличке фортепіано.
// В нас є наперед готова функція яка викликає звук при нажатті на елемент.
// Нам потрібно організувати виклик цієї функції при нажатті на кожну окрему кнопку.
// Спочатку робимо надаючи слухач подій на кожну кнопку - потім переробляємо через 
// event delegation.
// const user = {
//     name: "Jake",
//     lastName: 'Jakeson'
// }
// const { name, lastName } = user;
// const users = ['Jake', 'John'];
// const [jakeUserName, johnUserName] = users;

// const [ piano ] = document.getElementsByClassName('piano');
// piano.addEventListener('click', (event) => {
//     const targetElem = event.target;
//     playNote(targetElem);
// });
// /**
//  * @param {Object} key - HTML елемент (клавіша) на яку було натиснуто
//  * @returns {void} - нічого не повертає, включаю звуковий ефект на кнопку
//  */
let playNote = (key) => {
    // console.dir(key);
    const noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add('active');
    noteSound.addEventListener('ended', () => {
        key.classList.remove('active')
    });
}

// ["d", "d", "f", "d", "s", "d", "f", "s", "d", "f", "d", "s", "a"].map((el) => {
//   console.log(el);
//   let timerId = setInterval(() => {
//     const existingButtton = el.toLocaleUpperCase();
//     console.log(existingButtton);
//     playNote(existingButtton);

//     //   let referenceTime = new Date(inputText.value) - new Date();
//     //   btnStart.disabled = true;
//     //   // creating a shimmering effect
//     //   flag *= -1;
//     //   divTimer.style.color = flag < 0 && referenceTime < 5500 ? "red" : "black";
//     //   if (flag < 0) {
//     //     return;
//     //   }

//     //   if (referenceTime >= 0) {
//     //     let conversionResult = convertMs(referenceTime);
//     //     spanDays.textContent = conversionResult.days;
//     //     spanHours.textContent = conversionResult.hours
//     //       .toString()
//     //       .padStart(2, "0");
//     //     spanMinutes.textContent = conversionResult.minutes
//     //       .toString()
//     //       .padStart(2, "0");
//     //     spanSeconds.textContent = conversionResult.seconds
//     //       .toString()
//     //       .padStart(2, "0");
//     //   } else {
//     //     // window.alert('Countdown finished');
//     //     Notiflix.Notify.success("Countdown finished");
//     //     clearInterval(timerId);
//     //   }
//   }, 500);
// });

//
//
//
// 2. Покращимо наше фортепіано. Зробимо так щоб воно працювало при нажаття на клавішу в будь якій
// точні нашого веб-додатку.
const keys = document.querySelectorAll('.key');
// document.addEventListener("keydown", (event) => {
//   [...keys].forEach((existingButtton) => {
//     const text = existingButtton.innerText;
//     const lowerCaseText = text.toLocaleLowerCase();
//     const eventCodeLower =
//       event.code[event.code.length - 1].toLocaleLowerCase();
//     if (lowerCaseText === eventCodeLower) {
//       playNote(existingButtton);
//       return;
//     }
//   });
// });

document.addEventListener("keydown", (event) => {
  playFn(event);
});

function playFn(event) {
  // console.log("event=", event);
  [...keys].forEach((existingButtton) => {
    const text = existingButtton.innerText;
    const lowerCaseText = text.toLocaleLowerCase();
    const eventCodeLower = event.code[event.code.length - 1].toLocaleLowerCase();   
    if (lowerCaseText === eventCodeLower) {
      playNote(existingButtton);
      return;
    }
  });
}

const chords = ["d", "d", "f", "d", "s", "d", "f", "s", "d", "f", "d", "s", "a"];
const greet = (chord) => {
  console.log(chord);
  [...keys].forEach((existingButtton) => {
    const text = existingButtton.innerText;
    const lowerCaseText = text.toLocaleLowerCase();
    const chordCodeLower = chord.toLocaleLowerCase();
    if (lowerCaseText === chordCodeLower) {
      playNote(existingButtton);
      return;
    }
  });
};

function createPromise(position, delay, el) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      greet(el);
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      };
    }, delay);
  });
  return promise;
}


  
//   chords.map((el) => {
//     [...keys].forEach((existingButtton) => {
//       const text = existingButtton.innerText;
//       const lowerCaseText = text.toLocaleLowerCase();
//       const chordCodeLower = el.toLocaleLowerCase();
//       if (lowerCaseText === chordCodeLower) {
//         playNote(existingButtton);
//         return;
//       }
//     });
//     let timerId = setInterval(() => {
//       const text = existingButtton.innerText;
//       const lowerCaseText = text.toLocaleLowerCase();
//       const chordCodeLower = el.toLocaleLowerCase();
//       if (lowerCaseText === chordCodeLower) {
//         playNote(existingButtton);
//         return;
//       }
//     }, 300);

//     const timerId = setTimeout(greet, 300);

//     clearTimeout(timerId);
//   });
// };


const btn = document.querySelector(".btn_autoplay");
// document.addEventListener('click', (evt) => {
//   let delay = 0;
//   chords.map((el) => {
//     const timerId = setTimeout(greet(el), 300 * (delay++));

//     // clearTimeout(timerId);
//   });  
// });


function createPromise(position, delay, el) {
  const promise = new Promise(() => {
    setTimeout(() => {
      greet(el);      
    }, delay);
  });
  return promise;
}

btn.addEventListener("click", (evt) => {
  evt.preventDefault();

  for (let i = 0; i < chords.length; i++) {
    createPromise(1 + i, i * 250, chords[i])
      .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      // Notiflix.Notify.failure(
      //   `❌ Rejected promise ${position} in ${delay}ms`
    });
  }
});



// function fn(chords) {
//   chords.map((el) => {
//     console.log(el);
//     // let timerId = setInterval(() => {
//     //   const existingButtton = el.toLocaleUpperCase();
//     //   console.log(existingButtton);
//     //   playNote(existingButtton);
//     // }, 300);
//   });
// };


// [1, 2, 3, 4, 5].forEach((item) => {
//     console.log(item, '===1');
//     if (item === 2) {
//         console.log(item, '===2');
//         
//     }
//     console.log(item, '===3');
// });
//
//
//
// 3. Наш товариш Jake зламав клавішу W на нашому фортепіано і вона більше не працює.
// Ми повинні зробити так щоб при натисканні на неї не було 
// жодного звуку а лише виводився лог що клавіша зламана. 
// Вспливання евенту повинне припинитись.
// const [ piano ] = document.getElementsByClassName('piano');
// piano.addEventListener('click', (event) => {
//     console.log(event);
//     const targetElem = event.target;
//     playNote(targetElem);
// });
// const wElem = document.getElementById('w-key-on-piano');
// wElem.addEventListener('click', (event) => {
//     console.log(event);
//     event.stopPropagation();
//     alert('Jake broken the button!');
// });
//
//
//
