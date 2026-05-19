# officina-mcp

[![CI](https://github.com/DanielVd/officina-mcp/actions/workflows/ci.yml/badge.svg)](https://github.com/DanielVd/officina-mcp/actions/workflows/ci.yml)
![Node](https://img.shields.io/badge/node-20%2B-green)
![License](https://img.shields.io/badge/license-MIT-blue)

Server MCP minimale per testare integrazione tra client AI e strumenti MCP, con output e messaggi in italiano.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Tools](#tools)
- [Usage with MCP Clients](#usage-with-mcp-clients)
- [Quality](#quality)
- [Troubleshooting](#troubleshooting)
- [Security Notes](#security-notes)
- [Contributing](#contributing)
- [License](#license)

## Features

- Tool MCP base per smoke test rapido
- Messaggi, tool e output in italiano
- Base pulita per estendere test MCP

## Requirements

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
npm run build
```

## Quick Start

```bash
npm run dev
```

Oppure build + start:

```bash
npm run build
npm start
```

## Tools

- `verifica_collegamento`
  - input: `messaggio` (opzionale)
  - output: `pong` oppure `pong: <messaggio>`
- `calcola_somma`
  - input: `numero_a`, `numero_b`
  - output: `Risultato: <somma>`

## Usage with MCP Clients

Esempio configurazione per client MCP su `stdio`:

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

## Quality

- TypeScript strict mode
- lint con ESLint
- test unitari con Vitest

Comandi:

```bash
npm run lint
npm run test
```

## Troubleshooting

- `tool not found`: verifica percorso `dist/server.js` e `npm run build`
- `EADDRINUSE`: porta già occupata da altro processo
- crash in startup: verifica versione Node (`node -v`, richiesta 20+)

## Security Notes

- Non esporre server MCP su rete pubblica senza controllo accessi
- Non loggare segreti in output tool

## Contributing

Pull request benvenute. Apri issue per bug o richieste feature.

## License

MIT
