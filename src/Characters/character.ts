export abstract class Character {
  protected name: string;
  protected hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus(): void {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  public takeDamage(damage: number): void {
    this.hp -= damage;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  public isDead(): boolean {
    return this.hp <= 0;
  }

  abstract attack(opponent: Character): void;
}
