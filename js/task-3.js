const refs = {
  daysRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  minsRef: document.querySelector('[data-value="mins"]'),
  secsRef: document.querySelector('[data-value="secs"]'),

  daysRef_2: document.querySelector('[data-value="days-2"]'),
  hoursRef_2: document.querySelector('[data-value="hours-2"]'),
  minsRef_2: document.querySelector('[data-value="mins-2"]'),
  secsRef_2: document.querySelector('[data-value="secs-2"]'),
};

class CountdownTimer {
  constructor({ targetDate, onTick }) {
    this.targetDate = targetDate;
    this.onTick = onTick;
  }
  start() {
    const startTime = Date.parse(this.targetDate);

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const timeBack = getTimeComponents(deltaTime);

      this.onTick(timeBack);
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 05, 2021"),
  onTick: updateCountdownTimerFace,
});

const countdownTimer_2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Aug 10, 2021"),
  onTick: updateCountdownTimerFace_2,
});

countdownTimer.start();
countdownTimer_2.start();

function getTimeComponents(time) {
  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdownTimerFace({ days, hours, mins, secs }) {
  refs.daysRef.textContent = `${days}`;
  refs.hoursRef.textContent = `${hours}`;
  refs.minsRef.textContent = `${mins}`;
  refs.secsRef.textContent = `${secs}`;
}

function updateCountdownTimerFace_2({ days, hours, mins, secs }) {
  refs.daysRef_2.textContent = `${days}`;
  refs.hoursRef_2.textContent = `${hours}`;
  refs.minsRef_2.textContent = `${mins}`;
  refs.secsRef_2.textContent = `${secs}`;
}
