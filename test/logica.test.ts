import { describe, expect, it } from 'vitest';
import { verificaCollegamento, calcolaSomma } from '../src/logica.js';

describe('verificaCollegamento', () => {
  it('ritorna pong senza messaggio', () => {
    expect(verificaCollegamento()).toBe('pong');
  });

  it('ritorna pong con messaggio', () => {
    expect(verificaCollegamento('ciao')).toBe('pong: ciao');
  });
});

describe('calcolaSomma', () => {
  it('somma correttamente interi', () => {
    expect(calcolaSomma(2, 3)).toBe(5);
  });

  it('somma correttamente decimali', () => {
    expect(calcolaSomma(2.5, 3.2)).toBe(5.7);
  });
});
