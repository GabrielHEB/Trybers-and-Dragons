// src/Archetypes/Mage.ts
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _instanceCount = 0;
  private readonly _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._instanceCount += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    return Mage._instanceCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
