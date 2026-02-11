Penjawab : Andi Juliansyah
Tugas VUE-11-feb-26
jawaban soal 
1. karena .value berfungsi untuk merubah data. sementara template memiliki fungsi memuat dan menampilkan data.jadi, vue otomatis mengambil nilainya
js itu alur logika sistem dan perubahan data dan .value merupakan bagian logika sistem maka hanya berjalan dijs.
2. bukti dari deep reactivity adalah saat ada data nama umur didalam object profile menerima input click, seketika ui berubah tanpa refresh.
3. karena vue hanya memantau proxy dari reactivity bukan raw atau objek asli. karena template menggunakan proxy untuk menampilkan data, karena itu perubahan data raw/asli tidak terdeteksi oleh vue dan tampilan tak berubah.
4. karena nilai yang diambil dari obj reactive menjadi normal variable yang tidak lagi terhubung dengan obj realnya.
5. karena updateDOM di vue tidak berjalan langsung. kita harus menunggu nextTick agar DOM terUpdate
6. A. ref didalam reactive obj -> otomatis tanpa .value
const count = ref (0)
const state = reactive ({ count })
console.log(state.count)
state.count++
   B. Ref didalam array atau Map -> perlu .value
   const books = reactive([ref("Vue")])
console.log(books[0].value) // wajib .value
    C. Template hanya auto unwrap untuk ref top-level
    <p> {{count}}</p>

7. ShallowRed dipakai agar Vue lebih ringan karena hanya memantau data bagian luar, bukan isi dalam obj nya.