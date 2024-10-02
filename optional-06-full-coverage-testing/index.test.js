// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Pengujian fungsi sum', () => {
    // Kasus uji: penjumlahan dua angka positif
    assert.strictEqual(sum(1, 2), 3, '1 + 2 harus sama dengan 3');

    // Kasus uji: penjumlahan dengan nol
    assert.strictEqual(sum(0, 5), 5, '0 + 5 harus sama dengan 5');
    assert.strictEqual(sum(5, 0), 5, '5 + 0 harus sama dengan 5');

    // Kasus uji: penjumlahan dua angka nol
    assert.strictEqual(sum(0, 0), 0, '0 + 0 harus sama dengan 0');

    // Kasus uji: penjumlahan angka negatif (harus mengembalikan 0)
    assert.strictEqual(sum(-1, 2), 0, '-1 + 2 harus mengembalikan 0');
    assert.strictEqual(sum(1, -2), 0, '1 + -2 harus mengembalikan 0');
    assert.strictEqual(sum(-1, -2), 0, '-1 + -2 harus mengembalikan 0');

    // Kasus uji: penjumlahan dengan bukan angka (harus mengembalikan 0)
    assert.strictEqual(sum('1', 2), 0, '"1" + 2 harus mengembalikan 0');
    assert.strictEqual(sum(1, '2'), 0, '1 + "2" harus mengembalikan 0');
    assert.strictEqual(sum('a', 'b'), 0, '"a" + "b" harus mengembalikan 0');

    // Kasus uji: penjumlahan angka desimal
    assert.strictEqual(sum(1.5, 2.5), 4, '1.5 + 2.5 harus sama dengan 4');
});