// src/Races/Dwarf.ts
import Race from './Race';

// Declaração externa para rastrear instâncias
let dwarfInstances = 0;

export default class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    dwarfInstances += 1;
  }

  public static createdRacesInstances(): number {
    return dwarfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
