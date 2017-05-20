// Pseudocode
// Ambil dan Simpan Nama Player
// Ambil dan Simpan Pilihan Player
// Ambil dan Simpan Pilihan Komputer
// Proses Pilihan Player vs Komputer
// Tampilkan Hasil
// Konfirmasi Selesai / Melanjutkan Aplikasi 


//Aturan Main:
//Gunting vs Kertas - Menang Gunting
//Gunting vs Batu - Menang Batu
//Kertas vs Batu - Menang Kertas
function suwit() {
    
var playerName = document.getElementById("player").value;
var playerSuwit = document.getElementById("suwit").value;
var cpuSuwit = Math.random();

//pilihan cpu
if( cpuSuwit < 0.34 ) {
    cpuSuwit = 'Batu';
} else if (cpuSuwit >= 0.34 && cpuSuwit < 0.67) {
    cpuSuwit = 'Kertas';
} else {
    cpuSuwit = 'Gunting';
}


//win solution
var hasil = '';
if(playerSuwit == cpuSuwit){
    hasil = 'SERI bro!';
} else if (playerSuwit == 'Gunting') {
    hasil = (cpuSuwit == 'Kertas') ? 'MENANG !' : 'KALAH !';
} else if (playerSuwit == 'Kertas') {
    hasil = (cpuSuwit == 'Batu') ? 'MENANG !' : 'KALAH !';
} else if (playerSuwit == 'Batu') {
    hasil = (cpuSuwit == 'Gunting') ? 'MENANG !' : 'KALAH !';
} else {
    hasil = 'Kamu belum menentukan Pilihan, Ulangi Ya!';
}

//win info
alert('Halo ' + playerName + '\nKamu Memilih : ' + playerSuwit + ' dan \nKomputer memilih : ' + cpuSuwit + '. \nDan hasilnya kamu : ' + hasil);
    

}
