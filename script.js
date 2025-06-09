function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "701f9bcct4d39645ea0eo7e3b2303a9d";
  let =
    prompt = `User instructions are: Generate a love poem about ${instructionsInput.value}`;
  let = context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Do not include a title to the poem. Make sure to follow user instructions. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem. Do not include the word html and the backticks.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating the love poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
