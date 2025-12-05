const marvel = {
  characters: [
    { name: "Thor", surname: "Odinson", age: 1047 },
    { name: "Loki", surname: "Laufeyson", age: 1046 },
    { name: "Peter", surname: "Parker", age: 16 },
  ],

  getFullName(i) {
    const character = this.characters[i];
    return `${character.name} ${character.surname}`;
  },

  getAllNames() {
    let text = "";

    for (let i = 0; i < this.characters.length; i++) {
      const character = this.characters[i];
      text += `${character.name}, `;
    }

    return text;
  },

  getAverageAge() {
    let sum = 0;

    for (let i = 0; i < this.characters.length; i++) {
      const character = this.characters[i];
      sum += character.age;
    }

    return `Average age: ${sum / this.characters.length}`;
  },
};

function printFullName(i) {
  console.log(marvel.getFullName(i));
}

function printAllNames() {
  console.log(marvel.getAllNames());
}

function printAverageAge() {
  console.log(marvel.getAverageAge());
}

printFullName(0);
printAllNames();
printAverageAge();
