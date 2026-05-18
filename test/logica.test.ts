import { describe, expect, it } from 'vitest';
import { pingItaliano, sommaSicura } from '../src/logica.js';

describe('pingItaliano', () => {
  it('ritorna pong senza messaggio', () => {
    expect(pingItaliano()).toBe('pong');
  });

  it('ritorna pong con messaggio', () => {
    expect(pingItaliano('ciao')).toBe('pong: ciao');
  });
});

describe('sommaSicura', () => {
  it('somma correttamente interi', () => {
    expect(sommaSicura(2, 3)).toBe(5);
  });

  it('somma correttamente decimali', () => {
    expect(sommaSicura(2.5, 3.2)).toBe(5.7);
  });
});
