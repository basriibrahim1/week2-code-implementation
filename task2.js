/*
Demy membeli makanan menggunakan aplikasi PijarFood. Dimana terdapat 2 buah
kode promo:
- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal 50rb akan
mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan minimal 25rb akan
mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
- Jika tidak menggunakan kode promo tidak mendapatkan potongan (false)
Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu
kilometer selanjutnya dikenakan penambahan 3rb.
Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang
dipesan (true), jika tidak dikenakan pajak (false).

*/

const pijarFoods = (harga, voucher, jarak, pajak) => {
  let tarif = jarak == 2 ? 5000 : 5000 + (jarak - 2) * 3000;
  let discount = 0;

  if (voucher === "PIJARFOOD5" && harga >= 50000) {
    discount = harga * 0.5;
    discount = discount >= 50000 ? 50000 : discount;
  }

  if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
    discount = harga * 0.6;
    discount = discount >= 30000 ? 30000 : discount;
  }

  let hitungPajak = pajak == true ? harga * 0.05 : 0;
  let subTotal = harga - discount + tarif + hitungPajak;

  console.log(`harga : ${harga}`);
  console.log(`discount: ${discount}`);
  console.log(`tarif: ${tarif}`);
  console.log(`pajak: ${hitungPajak}`);
  console.log(`subTotal: ${subTotal}`);
};

pijarFoods(120000, "", 10, true);
