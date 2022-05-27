function getPilihanComputer() {  //ini untuk pilihan komputer
    const comp = Math.random(); // bisa juga pake Math.floor(Math.random() * 3); 'floor' akan bikin hasilnya bulat, 3nya bisa diganti dengan ***.length.
    if( comp < 0.34 ) return 'batu';  // 0,34, 0,67 da nilai acak lainnya merupakan hasil dari Math.random
    if( comp >= 0.34 && comp < 0.67 ) return 'gunting'; // blangannya hasil acak  aritmatika math random
    return 'kertas'; //langusng kertas karena jika nilai arimatika tidak ditemukan di interval < 0,67 maka hasil lgsg kertas
}

function getHasil(comp, player) {  //ini fungsi untuk aturan game dan hasil nya
    if( player == comp ) return 'Draw';
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'Player Win' : 'Comp Win'; // jika player (batu), kembalikan nilai dan liat pilihan komputer, jika komputer(gunting) maka player menang, jika komputer(kertas) maka player kalah
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'Comp Win' : 'Player Win'; // player (gunting) vs comp (batu) -> player kalah, player (gunting) vs comp (kertas) player menang
    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'Comp win' :'Player Win'; // kurang lebih sama dengan atas
}

/* function acakGambar () {
    const imgComputer = document.querySelector(.img-Computer);
    const gambar =['gajah','semut', 'orang'];
    let i = 0;
    setInterval(function() {
        imgComputer.setAttribute('src', 'assets/' + gambar[i++] + '.png');
        if( i == gambar.length) i= 0;
    }, 100)

} eror tidak jalan huhuhu */

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        const imgComputer = document.querySelector('.img-Computer');
        imgComputer.setAttribute('src', 'assets/' + pilihanComputer + '.png');
    
        const info =document.querySelector('.info');
        info.innerHTML = hasil;

    });
});

/* ini kalau buat satu persatu
const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-Computer');
    imgComputer.setAttribute('src', 'assets/' + pilihanComputer + '.png');
    
    const info =document.querySelector('.info');
    info.innerHTML = hasil;
});

const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-Computer');
    imgComputer.setAttribute('src', 'assets/' + pilihanComputer + '.png');
    
    const info =document.querySelector('.info');
    info.innerHTML = hasil;
});

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imgComputer = document.querySelector('.img-Computer');
    imgComputer.setAttribute('src', 'assets/' + pilihanComputer + '.png');
    
    const info =document.querySelector('.info');
    info.innerHTML = hasil;
}); */