//Mengambil elemen form berdasarkan ID
const praktikumForm = document.getElementById('praktikumForm');

if (praktikumForm) {
    praktikumForm.addEventListener('submit', function(event) {
        // Mencegah form langsung pindah halaman
        event.preventDefault(); 

        // Menampilkan alert sukses
        alert("Data Telah Berhasil di Kirim");

        // Mengambil nilai dari input berdasarkan ID
        const namaValue = document.getElementById('nama').value;
        const nimValue = document.getElementById('nim').value;
        const tanggalValue = document.getElementById('tanggal').value;

        // Pindah ke halaman success.html sambil membawa data di URL
        const targetURL = `success.html?nama=${encodeURIComponent(namaValue)}&nim=${encodeURIComponent(nimValue)}&tanggal=${encodeURIComponent(tanggalValue)}`;
        
        window.location.href = targetURL;
    });
}

