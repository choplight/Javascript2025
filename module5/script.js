// Object literal for Akamaru
const myDog = {
  name: "Akamaru",
  show: "Naruto",
  breed: "Pyrenean Mountain Dog",
  role: "Kiba Inuzuka's ninja dog",
  setting: "a fictional world heavily influenced by feudal Japan, mixed with modern elements",
  //property named mySound stores what the dog might say
  mySound: "you'd better start running!"
};

// Build and display the message using object literal
const message = `
  <p>Hello, my name is <strong>${myDog.name}</strong>.</p>
  <p>I starred in the TV show <strong>${myDog.show}</strong>.</p>
  <p>I was a <strong>${myDog.breed}</strong> and played <strong>${myDog.role}</strong>.</p>
  <p>The show was set in <strong>${myDog.setting}</strong>.</p>
  <p>When I bark, <strong>${myDog.mySound}</strong></p>
`;

// Contents of the object are displayed in a descriptive message to the browser
document.getElementById("dogInfo").innerHTML = message;


//Another dog object is created called myDogConst using a simple constructor
function Dog(name, sound, show, breed, role, setting, canTalk) {
  this.name = name;
  this.sound = sound;
  this.show = show;
  this.breed = breed;
  this.role = role;
  this.setting = setting;
  this.canTalk = canTalk;

  // Object Method: myGreeting
  this.myGreeting = function () {
    return `Hello, my name is ${this.name}, when I bark ${this.sound}. I starred in the TV show ${this.show}. My character was a ${this.breed}. I was the ${this.role} in a cartoon about ${this.setting}.`;
  };
}

// Create the object
const myDogConst = new Dog(
  "Akamaru",
  "you'd better start running!",
  "Naruto",
  "Pyrenean Mountain Dog",
  "Kiba Inuzuka's ninja dog",
  "a fictional world heavily influenced by feudal Japan, mixed with modern elements",
  true
);

// Call the method and display output
const methodOutput = document.createElement("p");
methodOutput.textContent = myDogConst.myGreeting(); // Call the method
document.body.appendChild(methodOutput); // Display the result
