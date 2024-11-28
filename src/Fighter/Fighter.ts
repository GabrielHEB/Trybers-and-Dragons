import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void;
  special?(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
  attack(enemy: Fighter | SimpleFighter): void;
}