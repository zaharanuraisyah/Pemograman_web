// Mengambil elemen form dari index.html
const praktikumForm = document.getElementById('praktikumForm');

// Menambahkan event listener saat form dikirim (submit)
praktikumForm.addEventListener('submit', function(event) {
    // 1. Tampilkan pesan konfirmasi sesuai instruksi
    alert("Data Telah Berhasil di Kirim");

    // 2. Browser secara otomatis akan mengarah ke 'success.html' 
    // karena kita sudah mengatur atribut 'action' di HTML.

    // 3. Opsional: Alert konfirmasi sebelum pindah ke success.html
    document.querySelector('form').addEventListener('submit', function() {
    alert("Data Telah Berhasil di Kirim! Klik OK untuk melihat detail.");
});
});