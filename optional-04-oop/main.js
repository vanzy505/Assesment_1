import Item from './Item.js';
import Inventory from './Inventory.js';

const inventaris = new Inventory();

// Membuat item baru
const item1 = new Item(1, 'Laptop', 10, 1000);
const item2 = new Item(2, 'Mouse', 50, 20);

// Menambahkan item ke dalam inventaris
inventaris.addItem(item1);
inventaris.addItem(item2);

// Menampilkan inventaris awal
console.log('Inventaris Awal:');
console.log(inventaris.listItems());
/**
 * Output yang diharapkan:
 * Inventaris Awal:
 * ID: 1, Nama: Laptop, Kuantitas: 10, Harga: 1000
 * ID: 2, Nama: Mouse, Kuantitas: 50, Harga: 20
 */

// Memperbarui detail item1
item1.updateDetails('Laptop', 8, 950);
console.log('\nInventaris setelah pembaruan:');
console.log(inventaris.listItems());

/**
 * Output yang diharapkan:
 * Inventaris setelah pembaruan:
 * ID: 1, Nama: Laptop, Kuantitas: 8, Harga: 950
 * ID: 2, Nama: Mouse, Kuantitas: 50, Harga: 20
 */

// Menghapus item2 dari inventaris
inventaris.removeItem(2);
console.log('\nInventaris setelah penghapusan:');
console.log(inventaris.listItems());

/**
 * Output yang diharapkan:
 * Inventaris setelah penghapusan:
 * ID: 1, Nama: Laptop, Kuantitas: 8, Harga: 950
 */