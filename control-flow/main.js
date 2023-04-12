const inputNilai = prompt("Please a valid input")
const category = ["A", "B", "C", "D", "E"]

if (inputNilai >= 80) {
    alert(`Nilai anda : ${category[0]}`)
} else if (inputNilai < 80 && inputNilai >= 60) {
    alert(`Nilai anda : ${category[1]}`)
}else if (inputNilai < 60 && inputNilai >= 40) {
    alert(`Nilai anda : ${category[2]}`)
}else if (inputNilai < 40 && inputNilai >= 20) {
    alert(`Nilai anda : ${category[3]}`)
}
 else{
    alert(`Nilai anda : ${category[4]}`)
 }