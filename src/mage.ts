import { Character } from "./character";

export class Mage extends Character {
  constructor(name: string, hp: number) {
    super(name, hp);
  }

  override attack(opponent: Character): void {
    console.log(`${this.name}は魔法を放った！`);
    opponent.takeDamage(15);
  }
}
