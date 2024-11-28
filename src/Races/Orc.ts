// src/Races/Orc.ts
import Race from './Race';

let orcInstances = 0;

export default class Orc extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    orcInstances += 1;
  }

  public static createdRacesInstances(): number {
    return orcInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
