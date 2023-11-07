import { choice, remove } from "./helpers";
import foods from "./foods";

let drawnFruit = choice(foods);
console.log(`I'd like one ${drawnFruit}, please.`);
console.log(`Here you go: ${drawnFruit}` );
remove(foods, drawnFruit)
console.log(`Delicious! May I have another?`);
console.log(`I’m sorry, we’re all out. We have ${foods.length} left.`);