const CACHE_NAME = 'dompetku-cache-v1';
// Daftarkan SEMUA file yang dibutuhkan aplikasi agar bisa tampil offline
const assetsToCache = [
  './index.html',
  './manifest.json',
  // Masukkan file CSS, JS, atau gambar kamu di bawah ini (jika ada)
  // Contoh:
  // './style.css',
  // './script.js',
  // './icon.png'
];

// 1. Tahap Install: Menyimpan file ke dalam cache HP
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Menyimpan aset ke cache...');
      return cache.addAll(assetsToCache);
    })
  );
});

// 2. Tahap Aktivasi: Menghapus cache versi lama jika kamu update kode
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Menghapus cache lama...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 3. Tahap Fetch: Mengambil data dari cache jika HP sedang offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Jika ada di cache, pakai cache. Jika tidak, ambil dari internet.
      return cachedResponse || fetch(event.request);
    })
  );
});
