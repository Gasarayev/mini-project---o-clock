const strips: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>(".strip"));
const numberSize: number = 8;

function highlight(stripIndex: number, d: number): void {
  const strip = strips[stripIndex];
  const numberEl = strip.querySelector<HTMLElement>(`.number:nth-of-type(${d + 1})`);

  if (numberEl) {
    numberEl.classList.add("pop");

    setTimeout(() => {
      numberEl.classList.remove("pop");
    }, 950);
  }
}

function stripSlider(stripIndex: number, number: number): void {
  const d1 = Math.floor(number / 10);
  const d2 = number % 10;

  const strip1 = strips[stripIndex];
  const strip2 = strips[stripIndex + 1];

  if (strip1) {
    strip1.style.transform = `translateY(${d1 * -numberSize}vmin)`;
    highlight(stripIndex, d1);
  }

  if (strip2) {
    strip2.style.transform = `translateY(${d2 * -numberSize}vmin)`;
    highlight(stripIndex + 1, d2);
  }
}

setInterval(() => {
  const time = new Date();

  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();

  stripSlider(0, hours);
  stripSlider(2, mins);
  stripSlider(4, secs);
}, 1000);
