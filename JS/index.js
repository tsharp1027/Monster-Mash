function Witch(name, cat, color, frogs) {
this.name = name;
this.catName = cat;
this.wandColor = color;
this.numberFrogs = frogs;
}
const agathaWitch = new Witch('Agatha', 'Spooky', 'black', 3);
const maleficentWitch = new Witch('Maleficent', 'Salem', 'brown', 5);
const glendaWitch = new Witch('Glenda', 'Sam', 'silver', 10);

function createThreeWitches(){
    const witches = [agathaWitch, maleficentWitch, glendaWitch];
    witches.forEach((witch) => {
        const details = `${witch.name} has a cat named ${witch.catName}, a wand that is ${witch.wandColor} and ${witch.numberFrogs} frogs in her cabin`;
        const elWitch = document.getElementById(witch.name);
        elWitch.querySelector('p').textContent = details;
    });
}
