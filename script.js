let imgList = [
    'animal-6714423_1280.jpg',
    'antelope-4840335_1280.jpg',
    'bachalpsee-7572681_1280.jpg',
    'bird-6935465_1280.jpg',
    'lemur-6762935_1280.jpg',
    'meerkat-7465819_1280.jpg',
    'mountain-8047293_1280.jpg',
    'oak-tree-2018822_1280.jpg',
    'spotted-owlet-5093773_1280.jpg',
    'sunset-7760143_1280.jpg',
    'water-6579313_1280.jpg',
    'winter-4742436_1280.jpg'
]

function initGallery(){
    for (let index = 0; index < imgList.length; index++) {
        document.getElementById('gallery').innerHTML += renderSingleGalleryImg(index);
    }
}

function renderSingleGalleryImg(index){
    return `<img src="img/gallery/${imgList[index]}" alt="">`
}