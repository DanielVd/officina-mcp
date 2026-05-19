# officina-mcp

[![Latest Release](https://img.shields.io/github/v/release/DanielVd/officina-mcp)](https://github.com/DanielVd/officina-mcp/releases/latest)
![Node](https://img.shields.io/badge/node-20%2B-green)
![License](https://img.shields.io/badge/license-MIT-blue)

Server MCP minimale in italiano per validare integrazione client AI e tool MCP.

## Indice

- [Funzionalità](#funzionalità)
- [Requisiti](#requisiti)
- [Installazione](#installazione)
- [Avvio Rapido](#avvio-rapido)
- [Strumenti](#strumenti)
- [Troubleshooting](#troubleshooting)
- [Sicurezza](#sicurezza)
- [Licenza](#licenza)

## Funzionalità

- Tool base per smoke test MCP
- Output in italiano
- Setup semplice su stdio

## Requisiti

- Node.js 20+
- npm 10+

## Installazione

```bash
npm install
npm run build
```

## Avvio Rapido

```bash
npm run dev
```

## Strumenti

- `verifica_collegamento`
- `calcola_somma`

## Troubleshooting

- errore avvio: controlla `node -v`
- tool non trovato: esegui `npm run build`

## Sicurezza

- non esporre MCP su rete pubblica senza controllo accessi

## Licenza

MIT
