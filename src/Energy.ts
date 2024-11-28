// src/Energy.ts

// Definindo o tipo EnergyType que pode ser 'mana' ou 'stamina'
export type EnergyType = 'mana' | 'stamina';

// Definindo a interface Energy
export default interface Energy {
  type_: EnergyType;
  amount: number;
}
