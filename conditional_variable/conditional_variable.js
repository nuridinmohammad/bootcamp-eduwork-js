const isMerried = false;
const statusMarried = isMerried ? "Menikah" : "Lajang";
console.log(statusMarried); 

const isLajang = isMerried < 50 && "Lajang";
const isNikah = isMerried > 50 || "Menikah";  
console.log(isLajang); 
console.log(isNikah); 

const listMenu = [
  {
    nama: "Soto Ayama",
    harga: 25_000
  },
  {
    nama: "Sate Kambing",
    harga: 60_000
  },
  {
    nama: "Nasi Putih",
    harga: 5_000
  }
];

const listMakanan = listMenu.map((menu) => menu.nama);
console.log(listMakanan);

const makananMahal = listMenu.filter((menu) => menu.harga > 50_000);
console.log(makananMahal);
