export function verificaCollegamento(messaggio?: string): string {
  const testo = messaggio?.trim();
  if (!testo) {
    return 'pong';
  }
  return `pong: ${testo}`;
}

export function calcolaSomma(a: number, b: number): number {
  return a + b;
}
