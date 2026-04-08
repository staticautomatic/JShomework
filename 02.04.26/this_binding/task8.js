function resOfMatch() {
    console.log(`${this.name} has ${this.points} points`);
}

const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };

resOfMatch.call(p1);
resOfMatch.apply(p2);