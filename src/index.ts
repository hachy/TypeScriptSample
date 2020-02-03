class Hello {
  output: HTMLSpanElement;

  constructor() {
    this.output = document.getElementById('output') as HTMLSpanElement;

    let greetBtn = document.getElementById('greet') as HTMLButtonElement;
    greetBtn.addEventListener('click', () => this.greet());
  }

  greet() {
    let input = document.getElementById('input') as HTMLInputElement;
    this.output.textContent = `Hello, ${input.value}!`;
  }
}

new Hello();
