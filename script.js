$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    const ina = document.getElementById('ina')
    ina.addEventListener('click', ()=> {
        Swal.fire({
            title: "Pekerjaan 2",
            text:``
        })
    })

    const ica = document.getElementById('ica')
    ica.addEventListener('click', ()=> {
        Swal.fire({
            title: "Pekerjaan 1",
            html:`<div style="text-align: justify">
            <p>
                    A.Jenis kegiatan di tempat pkl
                    <br>
                    1. Briefing bersama leader & membaca doa
                    <br>
                    2. Packing Barang
                    <br>
                    3. Sortir Barang 
                    <br>
                    <br>
                  B.Langkah - Langkah Kerja
                  <br>
                    1. Sediakan Box utama produk yang akan dikirim
                    <br>
                    2. Susun barang yang sudah di sortir sebanyak 50pcs
                    <br>
                    3. Lipat atas plastik hingga rapih 
                    <br>
                    4. Selanjutnya lakban ujung yang sudah di lipat
                    <br>
                    5. Masukan barang ke dalam Box dan siap di kirim
                    </p>
                    </div>`
        })
    })

    const velda = document.getElementById('velda')
    velda.addEventListener('click', ()=> {
        Swal.fire({
            title: "Pekerjaan 3",
            html:`<div style="text-align: justify">
            <p>
                    A.Jenis kegiatan di tempat pkl
              <br>
                    1. Packing Barang
                      <br>
                    2. Sortir Barang 
                      <br>
                      <br>
                  B.Langkah - Langkah Kerja
                    <br>
                    1. Sediakan Box utama produk yang akan dikirim
                      <br>
                    2. Susun barang yang sudah di sortir sebanyak 50pcs
                      <br>
                    3. Lipat atas plastik hingga rapih 
                      <br>
                    4. Selanjutnya lakban ujung yang sudah di lipat
                      <br>
                    5. Masukan barang ke dalam Box dan siap di kirim
                    </p>
                    </div>`
        })
    })

     const puji = document.getElementById('puji')
    puji.addEventListener('click', ()=> {
        Swal.fire({
            title: "Pekerjaan 4",
            html:`<div style="text-align: justify">
            <p>
                   1. Meminta Tanda Tangan Merapihkan surat jalan yang sudah melalui pengecekan QC dan sudah mendapatkan tanda tangan departemen PPIC. Kemudian sesegera mungkin menuju ruangan General Manager Production lalu meminta tanda tangan agar bisa melakukan pengiriman barang.
                    <br>
                   2.Fotocopy Jika copy-an berkas label ditempat penyimpanan habis, harus cepat-cepat mengcopy lagi dengan berkas label yang asli karena label tersebut akan langsung digunakan oleh operator produksi.
                    <br>
                   3. Packing Barang Menyiapkan plastik yang sesuai dengan quantity yang tertera dilabel barang. Memakai sarung tangan yang disediakan lalu mulai memasukkan barang kedalam plastik, jika sudah sesuai dengan quantitybarang tersebut kemudian rapatkan plastik dengan staples atau lakban.
                    <br>
                   4. File Surat Jalan Memilah dan memisahkan surat jalan masuk atau keluar satu persatu, lalu bolongkan pinggiran surat jalan menggunakan pembolong kertas, kemudian mencari bantexyang terdapat nama perusahaan yang terkait dan memasukkan file tersebut kedalam bantex.
                    </p>
                    </div>`
        })
    })
        const fotoica = document.getElementById('fotoica')
        fotoica.addEventListener('click' , () => {
        Swal.fire({
            title: 'Profile Ica',
            html: `<div style="text-align: left;line-height: 2;">
            <p>


Nama : Nazwa Ica Mulani
<br>
Nis : 202110307
<br>
Kelas : XII Rekayasa Perangkat Lunak 1
<br>
Agama : Islam
<br>
Tempat Tanggal Lahir : Bekasi,23-Mei-2005
<br>
Alamat Tempat Tinggal :Jln. Yayasan Nurul Huda Rt06/RW02.
<br>
Tempat Prakerin : PT. BINTANG MATRIX INDONESIA
<br>
Mulai Prakerin : 18 January 2022
<br>
Selesai Prakerin : 28 April 2022
            </p>
            </div>`
        })
    })

    const fotopelda = document.getElementById('fotovelda')
    fotopelda.addEventListener('click' , () => {
        Swal.fire({
            title: 'Profile Velda',
            html: `<div style="text-align: left;line-height: 2;">
            <p>
Nama : Velda Feronita
<br>
Nis : 202110296
<br>
Kelas : XII Rekayasa Perangkat Lunak 1
<br>
Agama : Islam
<br>
Tempat Tanggal Lahir : Bekasi,15-February-2005
<br>
Alamat Tempat Tinggal : Jln. Lingkar Bambu,Ciketing Udik Rt:02/Rw03 CiketingUdik,Bantargebang,Kota Bekasi.
<br>
Tempat Prakerin : PT. BINTANG MATRIX INDONESIA
<br>
Mulai Prakerin : 18 January 2022
<br>
Selesai Prakerin : 28 April 2022
            </p>
            </div>`
        })
    })
})

        const fotoina = document.getElementById('fotoina')
        fotoina.addEventListener('click' , () => {
        Swal.fire({
            title: 'Profile Ina',
            html: `<div style="text-align: left;line-height: 2;">
            <p>

Nama : Ina Rostiani
<br>
Nis : 202110298
<br>
Kelas : XII Rekayasa Perangkat Lunak 1
<br>
Agama : Islam
<br>
Tempat Tanggal Lahir : Kuningan,02-Mei-2005
<br>
Alamat Tempat Tinggal : Jl. Pangkalan 5,Rt002/Rw005,Ciketing udik.
<br>
Tempat Prakerin : PT. BINTANG MATRIX INDONESIA
<br>
Mulai Prakerin : 14 February 2022
<br>
Selesai Prakerin : 14 Mei 2022
            </p>
            </div>`
        })


        const fotofuji = document.getElementById('fotofuji')
        fotofuji.addEventListener('click' , () => {
        Swal.fire({
            title: 'Profile Fuji',
            html: `<div style="text-align: left;line-height: 2;">
            <p>



Nama : Puji Wahyuningtyas
<br>
Nis : 202110351
<br>
Kelas : XII Rekayasa Perangkat Lunak 2
<br>
Agama : Islam
<br>
Tempat Tanggal Lahir : Bekasi,21-Juni-2005
<br>
Alamat Tempat Tinggal : Ciketing Udik, Bantar Gebang, Bekasi Rt:03/Rw03
<br>
Tempat Prakerin : PT. BINTANG MATRIX INDONESIA
<br>
Mulai Prakerin : 24 February 2022
<br>
Selesai Prakerin : 21 Mei 2022
            </p>
            </div>`
        })

    })

    })