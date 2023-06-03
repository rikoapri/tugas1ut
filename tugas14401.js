var warnaRambuLaluLintas = 'kuning';
var keteranganWarna;
var tulisan;
if (warnaRambuLaluLintas === 'merah') {
    keteranganWarna = 'MERAH';
    tulisan = 'Berhenti';
}
else if (warnaRambuLaluLintas === 'kuning') {
    keteranganWarna = 'KUNING';
    tulisan = 'Hati-hati';
}
else if (warnaRambuLaluLintas === 'hijau') {
    keteranganWarna = 'HIJAU';
    tulisan = 'Jalan';
}
else {
    keteranganWarna = 'Tidak dikenal';
    tulisan = 'Tidak ada pesan';
}
console.log("Warna rambu lalu lintas: ".concat(keteranganWarna));
console.log("Tulisan: ".concat(tulisan));
