// Belajar Destructuring
// =======================
// contoh destructur array
const listSiswa = [
    "Mohammad Nuridin",
    "Nizam Permadani",
    "Rezah Asepi",
    "Dimas Maulana",
    "Dede K."
  ];
  
  // Destructur
  const [udin, nizam, reza, ...lainnya] = listSiswa;
  console.log(udin, nizam, reza, ...lainnya);
  
  // contoh destructur object
  const comic = {
    judul: "Avenger: End Game",
    harga: 250000,
    halaman: 1000,
    pengarang: {
      nama: "Steven R",
      negara: "USA"
    }
  };
  
  // destructur
  const {
    judul,
    harga,
    pengarang: { nama },
    ...dataLainya
  } = comic;
  console.log(judul, harga, nama, dataLainya);
  
  // contoh destructur di function parameter
  function perkalian([angka1, angka2]) {
    const perkalian = angka1 * angka2;
    const pesan = `hasil penjulahan kedua bilangan adalah ${perkalian}`;
    console.log(pesan);
  }
  
  function printComic({ judul, harga, pengarang: { nama } }) {
    const pesan = `Komik ${judul} karya ${nama} dijual dengan harga ${harga}`;
    console.log(pesan);
  }
  
  perkalian([10, 5]);
  printComic(comic);
  