# MCP Tester Italiano

Server MCP minimale pensato per testare integrazione tra client AI e strumenti MCP.

## Obiettivi

- offrire strumenti base, facili da validare
- mantenere codice e messaggi in italiano
- dare base pulita per estendere test MCP

## Strumenti disponibili

- `verifica_collegamento`
  - input: `messaggio` opzionale
  - output: `pong` o `pong: <messaggio>`
- `calcola_somma`
  - input: `numero_a`, `numero_b`
  - output: `Risultato: <somma>`

## Requisiti

- Node.js 20+
- npm 10+

## Installazione

```bash
npm install
```

## Sviluppo

```bash
npm run dev
```

## Test

```bash
npm run test
```

## Build

```bash
npm run build
npm start
```

## Uso con client MCP

Esempio configurazione (client che supporta comando stdio):

```json
{
  "mcpServers": {
    "officina-mcp": {
      "command": "node",
      "args": ["/percorso/progetto/dist/server.js"]
    }
  }
}
```

## Qualità

- TypeScript strict mode
- lint con ESLint
- test unitari con Vitest
