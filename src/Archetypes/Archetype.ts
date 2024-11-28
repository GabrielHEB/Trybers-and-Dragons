// src/Archetypes/Archetype.ts
import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special = 0;
  private _cost = 0;

  constructor(name: string) {
    this._name = name;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
