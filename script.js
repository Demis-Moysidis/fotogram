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
    return `<img onclick="showImgInDialog(${index})" src="img/gallery/${imgList[index]}" alt="">`
}

function toggleDialogView(){
    document.getElementById('dialog').classList.toggle('d_none');
}

function showImgInDialog(index){
    toggleDialogView();

    document.getElementById('dialog').innerHTML = rederSingleDialogImg(index);
}

function rederSingleDialogImg(index){
    return `
        <div onclick="event.stopPropagation()" class="dialog-content">
            <div class="dialog-content-title">
                <p>${imgList[index]}</p>
                <a onclick="toggleDialogView()" href="#"><img src="./img/icons/xmark-solid.svg" alt=""></a>
            </div>
            
            <img src="img/gallery/${imgList[index]}" alt="">

            <div class="dialog-content-arrow_btn">
                <a href=""><img src="./img/icons/arrow-left-solid.svg" alt=""></a>
                <p>${index + 1}/12</p>
                <a href=""><img src="./img/icons/arrow-right-solid.svg" alt=""></a>
            </div>
        </div>
    `
}