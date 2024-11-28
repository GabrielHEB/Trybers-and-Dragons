// src/Archetypes/Warrior.ts
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _instanceCount = 0;
  private readonly _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._instanceCount += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
