// src/Races/Race.ts
abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static instances = 0;
  
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.instances += 1;
  }
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
  
  get name(): string {
    return this._name;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  abstract get maxLifePoints(): number;
}
  
export default Race;
