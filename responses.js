function getBotResponse(input) {
    if (input == "1") {
        return "Silahkan hubungi customer service kami via WhatsApp Berikut +628811564391";
    } else if (input == "2") {
        return "Silahkan kunjungi link berikut https://www.telkom.co.id/sites untuk informasi produk kami";
    } else if (input == "3") {
        return "Lokasi Kami yang berada di Kota Bandung https://shorturl.at/tADNV";
    } else if (input == "4") {
        return "Lokasi Kami yang berada di Kota Jakarta https://shorturl.at/zBGQ0";
    } else if (input == "5") {
        return "Silahkan kunjungi link berikut untuk mengetahui lebih lanjut mengenai perusahaan kami https://www.telkom.co.id/sites/about-telkom/id_ID/page/profil-dan-riwayat-singkat-22";
    } else if (input == "Heart clicked!") {
        return "Terimakasih atas apresiasi yang anda berikan kepada kami (: ";
    } 


    //Simple chat bot
    if (input == "Selamat pagi") {
        return "Selamat pagi ada yang bisa dibantu? silahkan pilih angka berikut <br> (1) Berbicara langsung dengan CS Kami <br>(2) Informasi Produk Kami <br> (3) Lokasi Layanan Kami di Kota Bandung <br> (4) Lokasi Layanan Kami di Kota Jakarta ";
    } else if (input == "Terimakasih") {
        return "Semoga harimu menyenangkan (:";
    } else {
        return "Jika ada ingin yang ditanyakan silahkan pilih angka berikut ya  <br> (1) Berbicara langsung dengan CS Kami <br>(2) Informasi Produk Kami <br> (3) Lokasi Layanan Kami di Kota Bandung <br> (4) Lokasi Layanan Kami di Kota Jakarta <br> (5) Informasi Tentang Perusahaan Kami";
    }
}