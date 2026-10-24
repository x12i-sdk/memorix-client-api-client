import assert from 'node:assert/strict';
import { createMemorixReadClient } from '@x12i/memorix-client-api-client';

const client = createMemorixReadClient({ baseUrl: 'https://memorix.example.invalid', orgId: 'demo-org', agentIds: ['demo-agent'], caller: 'usage-example', fetchImpl: async (url, init) => {
  const headers = new Headers(init.headers);
  assert.equal(headers.get('x-memorix-org-id'), 'demo-org');
  assert(String(url).includes('data/content'));
  return Response.json({ items: [{ recordId: 'demo-record', data: { title: 'Example' } }] });
} });
const result = await client.memorixGet('data/content', { objectType: 'demo' });
assert.equal(result.items[0].recordId, 'demo-record');
console.log(result);
// Only client scoping and response handling are exercised; the fixture does not prove server authorization.
