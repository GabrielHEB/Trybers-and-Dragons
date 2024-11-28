// src/Archetypes/Ranger.ts
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _instanceCount = 0;
  private readonly _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instanceCount += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return Ranger._instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
