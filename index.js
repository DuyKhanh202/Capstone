document.getElementById("switchButton").onclick = function () {
    //khi button được click thì tìm đến thẻ body có id là myBody
    // dùng classlist để gọi thuộc tính class của thẻ body
    //Sử dụng toggle() để thêm hoặc xóa 1 class của thẻ html. Nếu thẻ body không có class dark thì toggle sẽ thêm class dark vào body. Ngược lại, nếu thẻ body đang có class dark thì toogle sẽ xóa class dark đi.
    document.getElementById("myBody").classList.toggle("dark");
    document.getElementById("myBody").classList.toggle("text-white");
    document.getElementById("teamskills").classList.toggle("dark");
    document.getElementById("teamskills").classList.toggle("text-white");
    document.getElementById("about_team").classList.toggle("dark");
    document.getElementById("about_team").classList.toggle("text-white");
    // document.getElementById("footer_icon").classList.toggle("text-dark");
    // let a = document.getElementById("footer_icon");
    // console.log(a);
    // document.getElementById("findUs").classList.toggle("dark");
  };
  
  function openOverlay() {
    document.getElementById("overlay").classList.toggle("open");
  }
  
  function closeOverlay() {
    document.getElementById("overlay").classList.toggle("open");
  }

  //OWL CAROUSEL
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false
        }
    }
})
  