/*

Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka

0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan
bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil
pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa
bilangan integer. Buatlah method/function yang menerima parameter hanya deret
angka dan menghasilkan output seperti keterangan di atas.

*/

function DivideAndSort(num) {
  let getArr = num.toString().split("0");

  for (let i = 0; i < getArr.length; i++) {
    getArr[i] = getArr[i].split("").sort().join("");
  }

  getArr.sort((a, b) => {
    return b - a;
  });

  return parseInt(getArr.join(""));
}

console.log(DivideAndSort(5956560159466056));
