/*
Buat code dari tugas Computer Science dibawah ini
Deteksi Palindrom
- Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau
tidak. Misalnya teks “Malam”, output = palindrom.
Reverse Words
- Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi
terbalik. Misalnya kalimat “Saya belajar Javascript”, output “Javascript belajar
Saya”

*/

const deteksiPalindrom = (string) => {
  const checkPalindrom = string.split("").reverse().join("");

  return checkPalindrom === string ? "ini adalah Palindrom" : "Ini bukan palindrom";
};

// console.log(deteksiPalindrom('malam'))

const reverseWord = (x) => {
  const reversingWord = x.split(" ").reverse().join(" ");

  return reversingWord;
};

// console.log(reverseWord('Saya belajar javascript'))
