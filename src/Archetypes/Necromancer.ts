// src/Archetypes/Necromancer.ts
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _instanceCount = 0;
  private readonly _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._instanceCount += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
