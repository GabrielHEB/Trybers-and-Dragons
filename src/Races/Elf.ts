// src/Races/Elf.ts
import Race from './Race';

let elfInstances = 0;

export default class Elf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    elfInstances += 1;
  }

  public static createdRacesInstances(): number {
    return elfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
