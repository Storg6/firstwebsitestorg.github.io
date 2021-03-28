let data1 = {
    photo: 'images/pic1.jpg',
    title: 'Coffee',
    description: 'A kávé egyszerre jelenti azon termékeket, melyeket bizonyos kávéfajok magvainak feldolgozásával állít elő a mezőgazdaság és az ipar, valamint azt az italt, amelyet az előbb említett termékekből készítenek, s amely világszerte népszerű élvezeti cikk.'
};
let data2 = {
    photo: 'images/pic2.jpg',
    title: 'Smartwatch',
    description: 'Az okosóra egy számítógépesített karóra, amely az idő mutatásán kívül számos funkcióval bír, és gyakran hasonlítják a PDA-khoz. Míg a korai modellek még csak olyan alapfunkciókkal rendelkeztek, mint a számológép, a fordítás vagy játékok, a modern okosórák már egyfajta hordható számítógépként funkcionálnak.'
};
let data3 = {
    photo: 'images/pic3.jpg',
    title: 'Smartphone',
    description: 'Okostelefonnak (angolul smartphone) nevezzük a fejlett, gyakran PC-szerű funkcionalitást nyújtó mobiltelefonokat. Nincs egyértelmű meghatározás arra, hogy mi az okostelefon.[1][2] Egyesek szerint okostelefon az a mobil, aminek teljes értékű operációs rendszere szabványosított interfészeket és platformot nyújt az alkalmazásfejlesztők számára.'
};
let data4 = {
    photo: 'images/pic4.jpg',
    title: 'Laptop',
    description: 'A notebook és a laptop angol eredetű szó, az informatikában a hordozható személyi számítógépeket takarják. Ezek teljes értékű PC-k, az asztali változatokhoz képest a lényegi különbség a kompakt formai kivitelezésben és a hordozhatóságban rejlik. Ugyanazokat a funkciókat betöltő alkatrészekből épülnek fel, azonban jellemzően kisebb méretűek, könnyebbek, kevesebb hőt termelnek, és kevesebb energiát is fogyasztanak, mint az asztali PC-kben megtalálható megfelelőik. '
};
let data5 = {
    photo: 'images/pic5.jpg',
    title: 'Code',
    description: 'In communications and information processing, code is a system of rules to convert information—such as a letter, word, sound, image, or gesture—into another form, sometimes shortened or secret, for communication through a communication channel or storage in a storage medium. An early example is an invention of language, which enabled a person, through speech, to communicate what they thought, saw, heard, or felt to others.'
};
let data6 = {
    photo: 'images/pic6.jpg',
    title: 'Earth',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth'
};
let data7 = {
    photo: 'images/pic7.jpg',
    title: 'Lobby',
    description: 'A lobby is a room in a building used for entry from the outside.[1] Sometimes referred to as a foyer, reception area or an entrance hall, it is often a large room or complex of rooms (in a theatre, opera house, concert hall, showroom, cinema, etc.) adjacent to the auditorium. It may be a repose area for spectators, especially used before performance and during intermissions, but also as a place of celebrations or festivities after performance. '
};
let data8 = {
    photo: 'images/pic8.jpg',
    title: 'Argument',
    description: 'In logic and philosophy, an argument is a series of statements (in a natural language), called the premises or premisses (both spellings are acceptable), intended to determine the degree of truth of another statement, the conclusion.[1][2][3][4][5] The logical form of an argument in a natural language can be represented in a symbolic formal language, and independently of natural language formally defined "arguments" can be made in math and computer science. '
};

let currentPhoto = 0;
let imagesData = [data1,data2,data3,data4,data5,data6,data7,data8];
$('#photo').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    console.log(currentPhoto);
    
}
console.log(imagesData.length);
loadPhoto(currentPhoto);
  $('#right-arrow').click(() => {
      if(currentPhoto+1>imagesData.length-1){
          currentPhoto=0;
      }else{
        currentPhoto++;
      }
      console.log(currentPhoto);
    loadPhoto(currentPhoto);
    console.log(currentPhoto);
  })
  $('#left-arrow').click(() => {
    if(currentPhoto===0){
        currentPhoto=imagesData.length-1;
    }else{
      currentPhoto--;
    }
    console.log(currentPhoto);
    loadPhoto(currentPhoto);
    console.log(currentPhoto);
  })

  

imagesData.forEach((item, index) => {
    index++;
    let temp=1;
  $('#thumbnails').append(`<img class="box" data-index="${index}" src="images/pic${index}.jpg" alt="pic" id="${index}"></img><div class="title" id="c_${index}">${item.title}</div>`);
  $('.box').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#photo').attr('src', imagesData[numberIndex-1].photo);
    $('#photo-title').text(imagesData[numberIndex-1].title);
    $('#photo-description').text(imagesData[numberIndex-1].description);
    
    $('.box').removeClass("active");
    $(`#${numberIndex}`).addClass("active");
    
  });
});

    $('#thumbnails .box').hover(function() {
        console.log(this.id);
         let temp = document.getElementById(`c_${this.id}`);
         //temp.attr("style","display:block");
         temp.style.display ="block";
        }, function() {
            let temp = document.getElementById(`c_${this.id}`);
         //temp.attr("style","display:block");
         temp.style.display ="none";
        }
    );