export function pingItaliano(messaggio?: string): string {
  const testo = messaggio?.trim();
  if (!testo) {
    return 'pong';
  }
  return `pong: ${testo}`;
}

export function sommaSicura(a: number, b: number): number {
  return a + b;
}
