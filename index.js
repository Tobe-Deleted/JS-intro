console.log("javascript loaded"); //informerer log at javascript kjører

const introSection = document.getElementById("intro-section");
console.dir(introSection); // bare for å se i log at det er hentet

const counterElement = document.getElementById("counter");
console.dir(counterElement); //samme som over. console.log er bedre

const dispaly = document.querySelector("span");
console.log(display);

const incrementButton = counterElement.querySelector("plus");

function handleIncrement() {
  const currentValue = Number(display.textContent);
  const newValue = currentValue + 1;

  display.textContent = newValue;
}

incrementButton.addEventListener("click", handleIncrement);

function createTodo(name) {
  return "name is " + name;
}

const a = createTodo(Oliver);
console.log(a);
