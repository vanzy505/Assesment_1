import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum menambahkan dua angka dengan benar', () => {
  // memeriksa kesetaraan nilai 
  assert.strictEqual(sum(1, 2), 3); // Menguji penjumlahan 1 + 2
  assert.strictEqual(sum(-1, 1), 0); // Menguji penjumlahan -1 + 1
  assert.strictEqual(sum(0, 0), 0); // Menguji penjumlahan 0 + 0
});