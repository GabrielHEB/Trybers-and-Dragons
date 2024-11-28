import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  public player: Fighter;
  private monsters: SimpleFighter[];
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this.player = player;
    this.monsters = monsters;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.monsters.some((m) => m.lifePoints > 0)) {
      this.monsters.forEach((monster) => this.battleRound(monster));
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }

  private battleRound(monster: SimpleFighter): void {
    if (monster.lifePoints > 0) {
      this.player.attack(monster);
      if (monster.lifePoints > 0) {
        monster.attack(this.player);
      }
    }
  }
}