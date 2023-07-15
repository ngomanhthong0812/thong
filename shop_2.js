var sanPhamAll = document.querySelectorAll('.ao_1, .ao_2, .ao_3, .ao_4, .ao_5, .ao_7, .ao_8');
var sanPhamAll_1 = document.querySelectorAll('.ao_1, .ao_2, .ao_3, .ao_4, .ao_6, .ao_5, .ao_7, .ao_8');
var sanPham = document.querySelectorAll('.ao_5, .ao_6, .ao_7, .ao_8');
var sanPham_1 = document.querySelectorAll('.ao_1, .ao_2, .ao_3, .ao_4');
var sanPham6 = document.querySelectorAll('.ao_6');

function ao(index) {
  var parentElement = document.querySelector('.san_pham_menu');
  
  // Xoá các phần tử đã được thêm vào từ nút 4 và 5
  sanPhamAll_1.forEach(function(element) {
    element.remove();
  });
  
  // Xoá các phần tử đã được thêm vào từ nút 1, 2, 3
  sanPhamAll.forEach(function(element) {
    element.remove();
  });
  
  // Xoá các phần tử .ao_6 đã được thêm vào từ nút 3
  sanPham6.forEach(function(element) {
    element.remove();
  });

  // Xoá thông báo và lớp CSS 'none' nếu đã tồn tại
  var existingMessage = parentElement.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }
  parentElement.classList.remove('none');
  
  if (index === 1) { 
    sanPham_1.forEach(function(element) {
      parentElement.appendChild(element);
    });
     // Xoá các phần tử .ao_5, .ao_6, .ao_7, .ao_8
    sanPham.forEach(function(element) {
      element.remove();
    });
  }
  
  if (index === 2) {
    // Thêm các phần tử .ao_5, .ao_6, .ao_7, .ao_8
    sanPham.forEach(function(element) {
      parentElement.appendChild(element);
    });
    
    // Xoá các phần tử .ao_1, .ao_2, .ao_3, .ao_4
    sanPham_1.forEach(function(element) {
      element.remove();
    });
  }

  if (index === 3) {
    // Thêm các phần tử .ao_6
    sanPham6.forEach(function(element) {
      parentElement.appendChild(element);
    });
    
    // Xoá tất cả các phần tử .ao_1, .ao_2, .ao_3, .ao_4, .ao_5, .ao_7, .ao_8
    sanPhamAll.forEach(function(element) {
      element.remove();
    });
  }

  if (index === 4 || index === 5) {
    // Thêm thông báo và lớp CSS 'none'
    parentElement.classList.add('none');
  
    var messageElement = document.createElement('span');
    messageElement.classList.add('message');
    
    var paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'Không có sản phẩm nào trong danh mục này.';
    
    messageElement.appendChild(paragraphElement);
    parentElement.appendChild(messageElement);
  }
}

//vay
var sanPhamVayAll = document.querySelectorAll('.vay_1, .vay_2, .vay_3, .vay_4, vay_5, .vay_6, .vay_7, .vay_8');
var sanPhamVayXuong = document.querySelectorAll('.vay_1, .vay_2, .vay_3, .vay_4');
var sanPhamVayChuA = document.querySelectorAll('.vay_5, .vay_6, .vay_7, .vay_8');
var parentElement = document.querySelector('.san_pham_menu');

function vay(index) {
  // Xoá tất cả các phần tử đã được thêm vào
  sanPhamVayAll.forEach(function(element) {
    element.remove();
  });
  sanPhamVayXuong.forEach(function(element) {
    element.remove();
  });

  sanPhamVayChuA.forEach(function(element) {
    element.remove();
  });


  // Xoá thông báo và lớp CSS 'none' nếu đã tồn tại
  var existingMessage = parentElement.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }
  parentElement.classList.remove('none');

  if (index === 1) {
     // Thêm thông báo và lớp CSS 'none'
     parentElement.innerHTML = '';
     parentElement.classList.add('none');
 
     var messageElement = document.createElement('span');
     messageElement.classList.add('message');
     messageElement.textContent = 'Không có sản phẩm nào trong danh mục này.';
     parentElement.appendChild(messageElement);
  }

  if (index === 2) {
    // Hiển thị các phần tử .quan_3 và .quan_7
    sanPhamVayXuong.forEach(function(element) {
      parentElement.appendChild(element);
    });
  }

  if (index === 3) {
    // Hiển thị các phần tử .quan_1, .quan_4, và .quan_6
    sanPhamVayChuA.forEach(function(element) {
      parentElement.appendChild(element);
    });
  }

  if (index === 4) {
    // Thêm thông báo và lớp CSS 'none'
    parentElement.innerHTML = '';
    parentElement.classList.add('none');

    var messageElement = document.createElement('span');
    messageElement.classList.add('message');
    messageElement.textContent = 'Không có sản phẩm nào trong danh mục này.';
    parentElement.appendChild(messageElement);
  }
}

//quan
var sanPhamVayAll = document.querySelectorAll('.quan_1, .quan_2, .quan_3, .quan_4, .quan_6, .quan_7');
var sanPhamQuan = document.querySelectorAll('.quan_2, .quan_3, .quan_7');
var sanPhamQuanJearn = document.querySelectorAll('.quan_5, .quan_8');
var sanPhamQuan1 = document.querySelectorAll('.quan_1, .quan_4, .quan_6');

function quan(index) {
  // Xoá tất cả các phần tử đã được thêm vào
  sanPhamVayAll.forEach(function(element) {
    element.remove();
  });
  sanPhamQuan.forEach(function(element) {
    element.remove();
  });

  sanPhamQuanJearn.forEach(function(element) {
    element.remove();
  });

  sanPhamQuan1.forEach(function(element) {
    element.remove();
  });


  // Xoá thông báo và lớp CSS 'none' nếu đã tồn tại
  var existingMessage = parentElement.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }
  parentElement.classList.remove('none');

  if (index === 1) {
    // Hiển thị các phần tử .quan_5 và .quan_8
    sanPhamQuanJearn.forEach(function(element) {
      parentElement.appendChild(element);
    });
  }

  if (index === 2) {
    // Hiển thị các phần tử .quan_3 và .quan_7
    sanPhamQuan.forEach(function(element) {
      parentElement.appendChild(element);
    });
  }

  if (index === 3) {
    // Hiển thị các phần tử .quan_1, .quan_4, và .quan_6
    sanPhamQuan1.forEach(function(element) {
      parentElement.appendChild(element);
    });
  }

  if (index === 4) {
    // Thêm thông báo và lớp CSS 'none'
    parentElement.innerHTML = '';
    parentElement.classList.add('none');

    var messageElement = document.createElement('span');
    messageElement.classList.add('message');
    messageElement.textContent = 'Không có sản phẩm nào trong danh mục này.';
    parentElement.appendChild(messageElement);
  }
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


  //ao
if(j==13){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/ujfb9jsyjr0rygdja304-simg-cf603b-938x938-max.jpg?v=1673192703397'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/ujfb9jsyjr0rygdja304-simg-cf603b-938x938-max.jpg?v=1673192703397'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/bcbchsie3amjuunh6y8j-simg-e8409c-967x967-max.jpg?v=1673192704330'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/sk4wqsh4zap2erxlvegs-simg-fb5b2e-928x928-max.jpg?v=1673192704817'
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
if (cardRoom4) {
  cardRoom4.remove();
}
  containerZoom.querySelector('.card-title').innerHTML = 'Áo Phông, Thun Nữ Form Rộng';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '109.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '199.000đ';
}
if(j==14){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/sibzkh-simg-d0daf0-800x1200-max.jpg?v=1673192305083'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/sibzkh-simg-d0daf0-800x1200-max.jpg?v=1673192305083'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/3t9emg-simg-d0daf0-800x1200-max.jpg?v=1673192305940'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/lgcsc9-simg-d0daf0-800x1200-max.jpg?v=1673192306483'
var cardRoom4 = containerZoom.querySelector('.card_room_4');
if (cardRoom4) {
  cardRoom4.remove();
}
  containerZoom.querySelector('.card-title').innerHTML = 'Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '159.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==15){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/7w92pf-simg-d0daf0-800x1200-max.jpg?v=1673191992470'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/7w92pf-simg-d0daf0-800x1200-max.jpg?v=1673191992470'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/jkmkqt-simg-d0daf0-800x1200-max.jpg?v=1673191992967'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/6xh3wj-simg-d0daf0-800x1200-max.jpg?v=1673191993357'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/7w7siy-simg-d0daf0-800x1200-max.jpg?v=1673191993633'
  containerZoom.querySelector('.card-title').innerHTML = 'Áo phông nữ trơn';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '90.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==16){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/la7rmu8jev3ix8bm05ac-simg-d0daf0-800x1200-max.jpg?v=1673191600363'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/la7rmu8jev3ix8bm05ac-simg-d0daf0-800x1200-max.jpg?v=1673191600363'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/7ww77hfrp7dxfaf5ohef-simg-d0daf0-800x1200-max.jpg?v=1673191600363'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/ctnxcfno1f5hjeyfrxid-simg-d0daf0-800x1200-max.jpg?v=1673191600363'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/jwiiub9ifrmkxbiig0gy-simg-d0daf0-800x1200-max.jpg?v=1673191600363'
  containerZoom.querySelector('.card-title').innerHTML = 'Áo Phông Nữ Cá Tính In Chữ';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '120.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==17){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/d0gi81nixmurbpnmu8w7-simg-d0daf0-800x1200-max.jpg?v=1673190878413'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/d0gi81nixmurbpnmu8w7-simg-d0daf0-800x1200-max.jpg?v=1673190878413'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/9ivyoa7csvvssancmskv-simg-d0daf0-800x1200-max.jpg?v=1673190879357'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/hkxfs8nidthal8kioioi-simg-d0daf0-800x1200-max.jpg?v=1673190880080'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/o3skx2yeqrlc7fftokoz-simg-d0daf0-800x1200-max.jpg?v=1673190880483'
  containerZoom.querySelector('.card-title').innerHTML = 'Áo sơ mi nữ ngắn tay kiểu cổ Lá Sen Vải';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '149.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '250.000đ';
}
if(j==18){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/2119133-1-l.jpg?v=1673149456003'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/2119133-1-l.jpg?v=1673149456003'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/2119133-2-l.jpg?v=1673149456383'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/2119133-l.jpg?v=1673149458110'
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
   if (cardRoom4) {
     cardRoom4.remove();
   }
  containerZoom.querySelector('.card-title').innerHTML = 'Áo kiểu nữ TosonFashion Xanh cổ tròn';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '250.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '450.000đ';
}
if(j==19){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/2118672-l.jpg?v=1673149377907'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/2118672-l.jpg?v=1673149377907'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/2118672-2-l.jpg?v=1673149378317'
  var cardRoom3 = containerZoom.querySelector('.card_room_3');
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom3) {
         cardRoom3.remove();
     }
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Áo kiểu nữ Quyên tay bồng nhún';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '199.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '350.000đ';
}
if(j==20){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/1956052-l.jpg?v=1673149062907'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/1956052-l.jpg?v=1673149062907'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/1956052-1-l.jpg?v=1673149064770'
  var cardRoom3 = containerZoom.querySelector('.card_room_3');
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom3) {
         cardRoom3.remove();
     }
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Áo sơ mi kiểu cổ tròn tay bèo rũ thời trang';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '199.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '350.000đ';
}

if(j==21){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/rufkqze8ki024f0lzru6-simg-d0daf0-800x1200-max.jpg?v=1673361556170'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/rufkqze8ki024f0lzru6-simg-d0daf0-800x1200-max.jpg?v=1673361556170'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/8ismbno6w1kd3xcq5zgk-simg-d0daf0-800x1200-max.jpg?v=1673361556707'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/gn2b9avop3iykr5cez0s-simg-d0daf0-800x1200-max.jpg?v=1673361556987'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/whbiqrwuv9lrrhcqjbm2-simg-d0daf0-800x1200-max.jpg?v=1673361557207'
  containerZoom.querySelector('.card-title').innerHTML = 'Quần Short Nữ Cạp Cao 4 Cúc Cạp Chéo Cách Điệu';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '100.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '165.000đ';
}
if(j==22){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/qp8uj7-simg-d0daf0-800x1200-max.jpg?v=1673194114947'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/qp8uj7-simg-d0daf0-800x1200-max.jpg?v=1673194114947'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/kxzlvf-simg-d0daf0-800x1200-max.jpg?v=1673194115517'
  var cardRoom3 = containerZoom.querySelector('.card_room_3');
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom3) {
         cardRoom3.remove();
     }
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Quần kaki nữ co giãn cao cấp';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '109.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '250.000đ';
}
if(j==23){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/smlytlsooirt2bvjftxy-simg-d0daf0-800x1200-max.jpg?v=1673193431223'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/smlytlsooirt2bvjftxy-simg-d0daf0-800x1200-max.jpg?v=1673193431223'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/szu2uh77lrfd14pyhhv8-simg-d0daf0-800x1200-max.png?v=1673193432787'
  var cardRoom3 = containerZoom.querySelector('.card_room_3');
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom3) {
         cardRoom3.remove();
     }
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Quần Jeans Nữ Thêu Hình Chú Mèo Cao Cấp';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '400.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}

if(j==24){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/7yssilmb8w5vss8zqgif-simg-d0daf0-800x1200-max.jpg?v=1673190532367'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/7yssilmb8w5vss8zqgif-simg-d0daf0-800x1200-max.jpg?v=1673190532367'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/thumb/medium/100/456/491/products/amkjvrtmo2tzw7mzza95-simg-d0daf0-800x1200-max.jpg?v=1673190532803'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/j1qmzhnnur4ovbscomm4-simg-d0daf0-800x1200-max.jpg?v=1673190533297'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/nylw9bm07lvechkw6dbk-simg-d0daf0-800x1200-max.jpg?v=1673190533767'
  containerZoom.querySelector('.card-title').innerHTML = 'Đầm suông linen tay lỡ 2 túi bổ trước';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '250.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==25){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/zhglb5ybvfie29apcipt.jpg?v=1673154130480'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/zhglb5ybvfie29apcipt.jpg?v=1673154130480'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/vtvhggvkyrkxoqeist2m.jpg?v=1673154132007'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/yo3qaakxn8rmrcgj4bwd.jpg?v=1673154132600'
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Đầm suông nữ tặng kèm dây beo thắt';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '129.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '250.000đ';
}
if(j==26){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/hbmejc.jpg?v=1673152044610'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/hbmejc.jpg?v=1673152044610'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/azv2m30fkpbcyx4bnmxs.jpg?v=1673152045537'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/isrbo9g2kquv7jox3ryd.png?v=1673152046423'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/iyungfe8prot7hxifhdx.jpg?v=1673152046847'
  containerZoom.querySelector('.card-title').innerHTML = 'Đầm suông kèm dây thắt eo tà lệch QKT';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '19.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '350.000đ';
}
if(j==27){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/3hl8agoctyvlwqtqtgu0.jpg?v=1673151079917'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/3hl8agoctyvlwqtqtgu0.jpg?v=1673151079917'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/fhceizb8ku9gfoftc5ho.jpg?v=1673151080593'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/hdekjjarbeuvwx9l488t.jpg?v=1673151081047'
  containerZoom.querySelector('.card_room_4').src = 'https://bizweb.dktcdn.net/100/456/491/products/jb215yywdy6jkzx9q1nu.jpg?v=1673151081297'
  containerZoom.querySelector('.card-title').innerHTML = 'Đầm suông nữ sát nách dáng dài';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '409.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '550.000đ';
}
if(j==28){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/8stzwdbiak6lrcsz9ukj-1.jpg?v=1673150555893'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/8stzwdbiak6lrcsz9ukj-1.jpg?v=1673150555893'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/9m7i0myhbm0ognil6ojt.jpg?v=1673150557023'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/fmdhc5c821xalx7ejczs.jpg?v=1673150610613'
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
  if (cardRoom4) {
     cardRoom4.remove();
  }
  containerZoom.querySelector('.card-title').innerHTML = 'Chân váy ngắn chữ a thu đông';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '150.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '250.000đ';
}
if(j==29){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/2102603-1-l.jpg?v=1673150245590'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/2102603-1-l.jpg?v=1673150245590'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/2102603-2-l.jpg?v=1673150245953'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/2102603-l.jpg?v=1673150246457'
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
  if (cardRoom4) {
     cardRoom4.remove();
  }
  containerZoom.querySelector('.card-title').innerHTML = 'Đầm chữ A Kyeon Fashion cổ sơ mi thắt nơ khuyên';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '330.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==30){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/2104895-1-l.jpg?v=1673150126327'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/2104895-1-l.jpg?v=1673150126327'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/2104895-l.jpg?v=1673150126530'
  var cardRoom3 = containerZoom.querySelector('.card_room_3');
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom3) {
         cardRoom3.remove();
     }
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Chân váy chữ A Emspo trang trí cúc thời trang J1.2';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '329.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '';
}
if(j==31){
  containerZoom.classList.add('container_zoom_2');
  containerZoom.querySelector('.w-99').src = 'https://bizweb.dktcdn.net/100/456/491/products/2013406-1-l.jpg?v=1673150062270'
  containerZoom.querySelector('.card_room_1').src = 'https://bizweb.dktcdn.net/100/456/491/products/2013406-1-l.jpg?v=1673150062270'
  containerZoom.querySelector('.card_room_2').src = 'https://bizweb.dktcdn.net/100/456/491/products/2013406-2-l.jpg?v=1673150063367'
  containerZoom.querySelector('.card_room_3').src = 'https://bizweb.dktcdn.net/100/456/491/products/2013406-l.jpg?v=1673150065620'
  var cardRoom4 = containerZoom.querySelector('.card_room_4');
     if (cardRoom4) {
        cardRoom4.remove();
     }
  containerZoom.querySelector('.card-title').innerHTML = 'Chân váy A Vien Tran buộc đai';
  containerZoom.querySelector('.card-text1 .h').innerHTML = '295.000đ';
  containerZoom.querySelector('.card-text1 .text-muted').innerHTML = '450.000đ';
}
  }
  
  function close_room(){
    containerZoom.classList.remove('container_zoom_2');
    valuerCard.innerHTML = 0;
    index = 0;
  }
  //huỷ reset trang khi nhấn vào các nút dưới
$('.lua_chon a').click(function(event) {
    event.preventDefault();
    // Xử lý logic khi click vào thẻ <a>
  });
  $('.lua_chon a').click(function(event) {
    event.preventDefault();
    // Xử lý logic khi click vào thẻ <a>
  });
  $('.lua_chon a').click(function(event) {
    event.preventDefault();
    // Xử lý logic khi click vào thẻ <a>
  });

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

  
  
    
    //carrd room
    var valuerCard = document.getElementById('soLuongSanPham_2');
    var index = parseInt(valuerCard.innerHTML);
    
    function giam_2() {
    if (index > 0) {
    index--;
    }
    valuerCard.innerHTML = index;
    }
    
    function tang_2() {
    index++;
    valuerCard.innerHTML = index;
    }
  //đổi ảnh trong card zoom
  function zoom_1(img) {
    var cardZoom = document.getElementById('card_zoom_1');
    cardZoom.src = img.src;
  }
  //
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

  
  
  


  
  
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    