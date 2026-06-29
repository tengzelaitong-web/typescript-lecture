import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp);
    this.weapon = weapon;
  }

  override attack(opponent: Character): void {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
    opponent.takeDamage(10);
  }
}
