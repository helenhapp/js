const team = {
  heroes: [
    { name: "Стів", strength: 6, speed: 5, magic: 2 },
    { name: "Леон", strength: 6, speed: 9, magic: 6 },
    { name: "Крімсон Кіт", strength: 9, speed: 8, magic: 4 },
    { name: "Маріо", strength: 8, speed: 9, magic: 6 },
  ],

  getHeroInfo(i) {
    const hero = this.heroes[i];

    if (hero) {
      return `${hero.name}: ⚔️ сила = ${hero.strength}, 🏃 швидкість = ${hero.speed}, ✨ магія = ${hero.magic}`;
    } else {
      return "Героя з таким індексом немає.";
    }
  },

  getAllHeroesInfo() {
    let text = "";

    for (let i = 0; i < this.heroes.length; i++) {
      const hero = this.heroes[i];
      text += `${hero.name}: ⚔️ сила = ${hero.strength}, 🏃 швидкість = ${hero.speed}, ✨ магія = ${hero.magic}\n`;
    }

    return text;
  },

  getAveragePower() {
    let sum = 0;

    for (let i = 0; i < this.heroes.length; i++) {
      const hero = this.heroes[i];
      sum += hero.strength + hero.speed + hero.magic;
    }

    const average = sum / (this.heroes.length * 3);

    return `Середній рівень здібностей героїв: ${average}`;
  },
};

const result = document.getElementById("result");

function showHero(i) {
  result.innerText = team.getHeroInfo(i);
}

function showAllHeroes() {
  result.innerText = team.getAllHeroesInfo();
}

function showAveragePower() {
  result.innerText = team.getAveragePower();
}
