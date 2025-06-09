function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "This is where the poem will go",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
