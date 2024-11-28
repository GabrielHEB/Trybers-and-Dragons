// src/Races/Halfling.ts
import Race from './Race';

let halflingInstances = 0;

export default class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    halflingInstances += 1;
  }

  public static createdRacesInstances(): number {
    return halflingInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
