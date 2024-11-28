import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  // Deve retornar 1 se o player ganhar, -1 caso contrário
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
