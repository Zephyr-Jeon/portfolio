'use strict';
// play
const playBtn = document.querySelector('#playBtn');

playBtn.addEventListener('click', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  header.classList.add('active');
  main.classList.remove('off');
  footer.classList.remove('off');
  ready();
});

// ready
function ready() {
  let yourCurrentScore = 0;
  let computerCurrentScore = 0;

  // pick  yours
  const options = document.querySelectorAll('.option');
  console.log(options);
  options.forEach((option) => {
    option.addEventListener('click', start);
  });

  // start
  function start() {
    console.log(this);

    //yourChoice
    let yourChoice = this.id;
    console.log(yourChoice);

    //computerChoice
    const possibleComputerChoice = ['rock', 'scissors', 'paper'];
    const computerNumber = Math.floor(Math.random() * 3);
    console.log(computerNumber);
    let computerChoice = possibleComputerChoice[computerNumber];
    console.log(computerChoice);

    // animation
    async function animation() {
      const yourImg = document.querySelector('#yours img');
      const computersImg = document.querySelector('#computers img');
      imgReset();
      yourImg.style.animation = 'your-hand 2s ease';
      computersImg.style.animation = 'computer-hand 2s ease';
      await delay(2000);
      yourImg.style.animation = '';
      computersImg.style.animation = '';
    }

    // delay
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // run after animation
    afterAnimation();
    async function afterAnimation() {
      await animation();
      // compare
      const compareResult = compare();
      console.log(compareResult);
      function compare() {
        if (yourChoice === computerChoice) {
          return 'draw';
        } else if (
          (yourChoice === 'rock' && computerChoice === 'scissors') ||
          (yourChoice === 'scissors' && computerChoice === 'paper') ||
          (yourChoice === 'paper' && computerChoice === 'rock')
        ) {
          return 'you';
        } else {
          return 'computer';
        }
      }

      // update status by compare result

      imgUpdate();

      if (compareResult === 'you') {
        yourCurrentScore++;
        scoreUpdate();
        messageUpdate(0);
      } else if (compareResult === 'computer') {
        computerCurrentScore++;
        scoreUpdate();
        messageUpdate(1);
      } else {
        messageUpdate(2);
      }
    }
    // image update
    function imgUpdate() {
      const yourImg = document.querySelector('#yours img');
      const computersImg = document.querySelector('#computers img');
      yourImg.src = `img/${yourChoice}-illu.svg`;
      computersImg.src = `img/${computerChoice}-illu-white.svg`;
    }

    // score update
    function scoreUpdate() {
      const yourScore = document.querySelector('#yourScore');
      const computerScore = document.querySelector('#computerScore');
      if (yourCurrentScore < 10 && computerCurrentScore < 10) {
        yourScore.textContent = `0${yourCurrentScore}`;
        computerScore.textContent = `0${computerCurrentScore}`;
      } else if (yourCurrentScore < 10 && computerCurrentScore >= 10) {
        yourScore.textContent = `0${yourCurrentScore}`;
        computerScore.textContent = computerCurrentScore;
      } else if (yourCurrentScore >= 10 && computerCurrentScore < 10) {
        yourScore.textContent = yourCurrentScore;
        computerScore.textContent = `0${computerCurrentScore}`;
      } else {
        yourScore.textContent = yourCurrentScore;
        computerScore.textContent = computerCurrentScore;
      }
    }

    // message board update
    function messageUpdate(i) {
      const boardMsg = document.querySelector('#boardMsg');
      const messageList = ['you win', 'you lost', 'draw', 'make a choice'];
      boardMsg.textContent = messageList[i];
    }

    // reset
    const resetBtn = document.querySelector('#resetBtn');
    resetBtn.addEventListener('click', () => {
      imgReset();
      yourCurrentScore = 0;
      computerCurrentScore = 0;
      scoreUpdate();
      messageUpdate(3);
    });

    // image reset
    function imgReset() {
      const yourImg = document.querySelector('#yours img');
      const computersImg = document.querySelector('#computers img');
      yourImg.src = `img/rock-illu.svg`;
      computersImg.src = `img/rock-illu-white.svg`;
    }
  }
}
