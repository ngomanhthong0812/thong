//huỷ reset trang khi nhấn vào các nút dưới
$('.heart a').click(function(event) {
  event.preventDefault();
  // Xử lý logic khi click vào thẻ <a>
});
$('.bars a').click(function(event) {
  event.preventDefault();
  // Xử lý logic khi click vào thẻ <a>
});
$('.expand a').click(function(event) {
  event.preventDefault();
  // Xử lý logic khi click vào thẻ <a>
});

var valuerCard1 = document.getElementById('soLuongSanPham_1');
      var index1 = parseInt(valuerCard1.innerHTML);

   function giam_1() {
     if (index1 > 0) {
     index1--;
   }
    valuerCard1.innerHTML = index1;
 }

 function tang_1() {
   index1++;
   valuerCard1.innerHTML = index1;
}
  //đổi ảnh sanr pham
  function zoom(img) {
    var cardZoom = document.getElementById('card_zoom');
    cardZoom.src = img.src;
  }


  
  //carrd room
  var valuerCard = document.getElementById('soLuongSanPham');
  var index = parseInt(valuerCard.innerHTML);
  
  function giam() {
  if (index > 0) {
  index--;
  }
  valuerCard.innerHTML = index;
  }
  
  function tang() {
  index++;
  valuerCard.innerHTML = index;
  }
//đổi ảnh trong card zoom
function zoom_1(img) {
  var cardZoom = document.getElementById('card_zoom_1');
  cardZoom.src = img.src;
}

var containerZoom = document.querySelector('.container_zoom');
function my_zoom_card(j){
 if(j == 1){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/7xtwyt-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/7xtwyt-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/a6gnv4-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/es97ga-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/ikfg7s-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card-title').innerHTML = 'Ví nữ mini da mềm khóa vuông thời trang';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '120.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '230.000đ';
  }
  if(j == 2){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/fzn0pqa4qzvuyvm6ghkg-simg-d0daf0-800x1200-max.jpg?v=1673363444327'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/t1ezoeu7zoxbnyoouqjl-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/3dedgw99ipuhyym3dsck-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/5mfnpsubqd97xddwlbr0-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/fzn0pqa4qzvuyvm6ghkg-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card-title').innerHTML = 'Ví nữ cầm tay phong cách Hàn Quốc';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '50.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j == 3){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/pdwkie-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/pdwkie-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/blhess-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/jey4ks-simg-d0daf0-800x1200-max.png'
  containerZoom.querySelector('.card_room_4').src = 'https://vn-live-01.slatic.net/p/5564b42427a977d4a1d3b82aa8e52014.jpg'
  containerZoom.querySelector('.card-title').innerHTML = 'Túi Xách Nữ Đeo Chéo Da Pu Đi Dự Tiệc Du Lịch';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '400.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '1.900.000đ';
}
if(j == 4){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/6cu2beawkolengqt4jhh-simg-d0daf0-800x1200-max.jpg?v=1673362848030'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/6cu2beawkolengqt4jhh-simg-d0daf0-800x1200-max.jpg?v=1673362848030'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/a6qejqbrovtfe5emqfk8-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/em7bhaln8ntkqer9ar3s-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/oew48anplastdklcwktd-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card-title').innerHTML = 'Túi xách nữ công sở';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '150.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '200.000đ';
}
if(j == 5){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/3ebwrtwivacljnng7u8i-simg-d0daf0-800x1200-max.jpg?v=1673362646807'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/3ebwrtwivacljnng7u8i-simg-d0daf0-800x1200-max.jpg?v=1673362646807'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/4hutomdqcnk2d5pusbas-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/b3l3nmfozab8e5dowiic-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/jssvlleak63pulkqjzd9-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card-title').innerHTML = 'Túi xách nữ vải dù chống nước cao cấp';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '290.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '400.000đ';
}
if(j == 6){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/tfwmhp8vxkztfuwuczdz.jpg?v=1673362318757'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/tfwmhp8vxkztfuwuczdz.jpg?v=1673362318757'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/k2p8mleypumx9c936wh4.jpg'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/tfwmhp8vxkztfuwuczdz.jpg'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/yaikjlagbjbsqrbme4ve.jpg'
  containerZoom.querySelector('.card-title').innerHTML = 'Quần short nữ kèm dây đai thanh lịch';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '190.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '230.000đ';
}
if(j == 7){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/bub1xb-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/bub1xb-simg-d0daf0-800x1200-max.jpg'
  containerZoom.querySelector('.card_room_2').src = 'https://cf.shopee.vn/file/20d43d6bac58200cda209d085ab8d089'
  containerZoom.querySelector('.card_room_3').src = 'https://cf.shopee.vn/file/9247b0c9b78aa01b1693712c3a092b79'
  containerZoom.querySelector('.card_room_4').src = 'https://lzd-img-global.slatic.net/g/ot/common/cb133772ebea4cdc863f6c14bd067633.jpeg_360x360q75.jpg_.webp'
  containerZoom.querySelector('.card-title').innerHTML = 'Quần baggy kaki nữ';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '90.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '150.000đ';
}
if(j==8){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/zxh2pd.jpg'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/large/100/456/491/products/zxh2pd.jpg'
  containerZoom.querySelector('.card_room_2').src = 'https://media3.scdn.vn/img3/2019/9_20/xeBnso_simg_b5529c_250x250_maxb.jpg'
  containerZoom.querySelector('.card_room_3').src = 'http://127.0.0.1:5500/img/img%20san%20pham%20moi/new/8.webp'
  containerZoom.querySelector('.card_room_4').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCe-n7iFmgFrv9y4sMatkFYW79nU4r64AY5xbjXgY4g97OX7ZsLyx0KneKfhQzBASYaY&usqp=CAU'
  containerZoom.querySelector('.card-title').innerHTML = 'Quần kaki nữ các màu';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '189.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '300.000đ';
}
if(j==9){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/jwonepcvkjlswxyixhqt-simg-d0daf0-800x1200-max.jpg?v=1673362979710'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/jwonepcvkjlswxyixhqt-simg-d0daf0-800x1200-max.jpg?v=1673362979710'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/odraybrjkx1cudni9cmp-simg-d0daf0-800x1200-max.jpg?v=1673362980193'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/oucy366s4uq4r95cz4ut-simg-d0daf0-800x1200-max.jpg?v=1673362980913'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/wd0h5cbj0stlcqqjzz21-simg-d0daf0-800x1200-max.jpg?v=1673362981463'
  containerZoom.querySelector('.card-title').innerHTML = 'Túi xách nữ họa tiết thời trang';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '150.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '230.000đ';
}
if(j==10){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/pmioumgmndfegdh4amhg-simg-d0daf0-800x1200-max.jpg?v=1673361292573'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/pmioumgmndfegdh4amhg-simg-d0daf0-800x1200-max.jpg?v=1673361292573'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/ugasezzc9qg3gcptfnf6-simg-d0daf0-800x1200-max.png?v=1673361293383'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/modlne5rt16plqla0kvh-simg-d0daf0-800x1200-max.png?v=1673361294273'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/ohruglz69ruhzbr8qkhl-simg-d0daf0-800x1200-max.png?v=1673361294787'
  containerZoom.querySelector('.card-title').innerHTML = 'Quần short đũi nữ';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '90.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '160.000đ';
}
if(j==11){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/kz6cb8fyvc2y67ftu3xx-simg-d0daf0-800x1200-max.jpg?v=1673193856937'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/kz6cb8fyvc2y67ftu3xx-simg-d0daf0-800x1200-max.jpg?v=1673193856937'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/0kzkbkmh1dck7chifown-simg-d0daf0-800x1200-max.jpg?v=1673193858470'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/7f1ucbs6vt6urv6t9wyz-simg-d0daf0-800x1200-max.jpg?v=1673193858817'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/lx5yirjkkgi2vfixemku-simg-d0daf0-800x1200-max.jpg?v=1673193859340'
  containerZoom.querySelector('.card-title').innerHTML = 'Quần Baggy Jeans Nữ Phong Cách';
  containerZoom.querySelector('.card-text1 .h').innerHTML = 'Liên hệ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==12){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/vwwnglqe36md3wsvpe6g-simg-d0daf0-800x1200-max.jpg?v=1678891245123'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/vwwnglqe36md3wsvpe6g-simg-d0daf0-800x1200-max.jpg?v=1678891245123'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/ebhyjzoqeyn96oynhveb-simg-d0daf0-800x1200-max.jpg?v=1678891245123'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/db829zjgsjisaydc7jk6-simg-d0daf0-800x1200-max.jpg?v=1678891245123'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/x49fwopqoybfjgnhpqne-simg-d0daf0-800x1200-max.jpg?v=1678891245123'
  containerZoom.querySelector('.card-title').innerHTML = 'Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '159.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}





}

function close_room(){
  containerZoom.classList.remove('container_zoom_2');
  valuerCard.innerHTML = 0;
  index = 0;
}



function hienthi_card(cardIndex) {
  var cardImage = document.getElementById("card-" + cardIndex);
  cardImage.src = "img/img san pham moi/new/" + cardIndex + ".webp";
}

function not_hienthi_card(cardIndex) {
  var cardImage = document.getElementById("card-" + cardIndex);
  cardImage.src = "img/img san pham moi/" + cardIndex + ".webp";
}


function san_pham(index){
  window.location.href = 'san_pham_'+index+'.html'
}

function gio_hang(){
  window.location.href = "gio_hang.html"
}





  
  
  
  
  
  
  
  

  
  
  
  
  
  
  