// Constructor: defines the dog properties and the myGreeting method
function Dog(name, sound, show, breed, role, setting, canTalk) {
  this.name = name;
  this.sound = sound;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.setting = setting;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    // Include whether the dog can talk
    let talkLine;
    if (this.canTalk) {
      talkLine = "I can talk!";
    } else {
      talkLine = "I cannot talk.";
    }
    return `Hello, my name is ${this.name}, when I bark ${this.sound} ` +
           `I starred in the TV show ${this.show}. ` +
           `My character was a ${this.breed}. ` +
           `I was the ${this.role} in a cartoon about ${this.setting}. ` +
           talkLine;
  };
}

// Three dogs from animated TV
const dogs = [
  new Dog(
    "Akamaru",
    ", you'd better start running!",
    "Naruto",
    "Pyrenean Mountain Dog",
    "Kiba Inuzuka's ninja dog",
    "a fictional world influenced by feudal Japan mixed with modern elements",
    false
  ),
  new Dog(
    "Ein",
    "i say woof woof.",
    "Cowboy Bebop",
    "Pembroke Welsh Corgi",
    "crew member and data dog",
    "a futuristic, space-traveling bounty-hunter setting",
    false
  ),
  new Dog(
    "Mr. Peanutbutter",
    "it is always upbeat!",
    "BoJack Horseman",
    "Labrador Retriever",
    "BoJack’s friend and fellow actor",
    "a satirical world where humans and talking animals live together",
    true
  )
];

window.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("selectedDog");

  // Prompt user to select one dog by name
  const answer = prompt("Type one: Akamaru, Ein, or Mr. Peanutbutter");
  if (!answer) {
    output.textContent = "No selection made.";
    return;
  }

  // Find the selected dog (case-insensitive match)
  const picked = dogs.find(d => d.name.toLowerCase() === answer.trim().toLowerCase());

  // If not found, show error
  if (!picked) {
    output.textContent = "Error: The dog you selected does not exist.";
    return;
  }

  // Build the HTML only for the selected dog
  let html = `<h2>${picked.name}</h2>`;

  // Show myGreeting ONLY if the dog can talk; otherwise say they cannot talk
  if (picked.canTalk) {
    html += `<p>${picked.myGreeting()}</p>`;
  } else {
    html += `<p>${picked.name} cannot talk.</p>`;
  }

  // Use a for...in loop to list each property/value (skip the function)
  for (const key in picked) {
    if (typeof picked[key] !== "function") {
      html += `<p><strong>${key}:</strong> ${picked[key]}</p>`;
    }
  }

  output.innerHTML = html;
});
