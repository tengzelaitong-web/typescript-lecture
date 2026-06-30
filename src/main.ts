import { Warrior } from "./warrior";
import { Mage } from "./mage";

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const mage = new Mage("メディア", 80);

warrior.showStatus();
mage.showStatus();

warrior.attack(mage);
mage.attack(warrior);

warrior.showStatus();
mage.showStatus();
