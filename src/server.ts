import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { pingItaliano, sommaSicura } from './logica.js';

const server = new McpServer({
  name: 'mcp-tester-italiano',
  version: '0.1.0'
});

server.tool(
  'ping_italiano',
  'Risponde con pong oppure pong: <messaggio>',
  {
    messaggio: z.string().optional().describe('Messaggio opzionale')
  },
  async ({ messaggio }) => {
    const risposta = pingItaliano(messaggio);
    return {
      content: [{ type: 'text', text: risposta }]
    };
  }
);

server.tool(
  'somma_due_numeri',
  'Somma due numeri interi o decimali',
  {
    numero_a: z.number().describe('Primo numero'),
    numero_b: z.number().describe('Secondo numero')
  },
  async ({ numero_a, numero_b }) => {
    const risultato = sommaSicura(numero_a, numero_b);
    return {
      content: [{ type: 'text', text: `Risultato: ${risultato}` }]
    };
  }
);

async function avviaServer(): Promise<void> {
  const trasporto = new StdioServerTransport();
  await server.connect(trasporto);
}

avviaServer().catch((errore: unknown) => {
  console.error('Errore avvio server MCP', errore);
  process.exit(1);
});
