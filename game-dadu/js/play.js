//variabel tombol
//var a = document.getElementById('slot1').value;
//var b = document.getElementById('slot2').value;
//var c = document.getElementById('slot3').value;
//var d = document.getElementById('slot4').value;

var arrPlay = [];



//fungsi untuk ngambil angka random dan di store ke value button
//dadu harus dilempar berurutan
//button 1
function makeid1(){
    var randomnumber=Math.floor(Math.random()*6)+1;
    document.getElementById('slot2').disabled = false;
    arrPlay.push(randomnumber);
    return randomnumber;
}

//button 2
function makeid2(){
    var randomnumber=Math.floor(Math.random()*6)+1;
    document.getElementById('slot3').disabled = false;
    arrPlay.push(randomnumber);
    return randomnumber;
}
//button 3
function makeid3(){
    var randomnumber=Math.floor(Math.random()*6)+1;
    document.getElementById('slot4').disabled = false;
    arrPlay.push(randomnumber);
    return randomnumber;
}
//button 4
function makeid4(){
    var randomnumber=Math.floor(Math.random()*6)+1;
    //document.getElementById('slot6').disabled = false;
    arrPlay.push(randomnumber);
    
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
    console.log(arrPlay);

    return randomnumber;
}

console.log(arrPlay);

//dadu harus dilempar berurutan
function play(arrPlay){
    modalawal = 2000;
    hasilkali = 1;
    hasiltambah = 0;
    //aturan main
    //jika terdapat angka 1 maka akan didenda 1000 jika ada 2 dadu yang kena maka didenda 2000 dst
    //jika terdapat angka berbeda selain 1, setiap dadu dikali 200
    //jika semua dadu menghasilkan angka yang sama maka setiap dadu dikali 500
    //berikutnya bisa dikembangkan lagi aturannya
    for(i = 0; i < 4; i++) {
        if(arrPlay[i] == 1){
            hasilkali = arrPlay[i] * -1000;
        } else if(arrPlay[i] == arrPlay[1] == arrPlay[2] == arrPlay[3]){
            hasilkali = arrPlay[i] * 500;      
        } else {
            hasilkali = arrPlay[i]*200;
        }
        hasiltambah += hasilkali;    
    }
    
    var total = modalawal + hasiltambah;
    if(modalawal < total){
    document.getElementById('hasil').innerHTML = ('Point Buffer Anda : '+ modalawal + '\n dan Point Sekarang: ' + total);
    } else {
    document.getElementById('hasil').innerHTML = ('Anda Kalah dengan Point Buffer : '+ modalawal + '\n Malah berkurang jadi : ' + total + '. Coba Lagi deh!');    
    }
}