document.getElementById("switchButton").onclick = function () {
  // Tìm thẻ <body> với thuộc tính id là myBody.
  // Sử dụng classList để truy cập danh sách các lớp CSS (class) của thẻ <body>.
  // Dùng phương thức toggle() để thêm hoặc xóa một lớp CSS.
  // Nếu thẻ <body> chưa có lớp dark, toggle() sẽ thêm lớp dark vào thẻ <body>.
  // Ngược lại, nếu thẻ <body> đã có lớp dark, toggle() sẽ xóa lớp dark khỏi thẻ <body>.
  // Phương thức toggle() giúp thay đổi qua lại giữa hai trạng thái, giống như bật và tắt một công tắc.

  const elements = ["myBody", "teamskills", "about_team"];
  elements.forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
          element.classList.toggle("dark");
          element.classList.toggle("text-white");
      }
  });

  // Không có phần tử nào có id là "footer_icon" trong mã HTML hiện tại, 
  // nên đoạn mã này đã được bình luận để tránh lỗi.
  // document.getElementById("footer_icon").classList.toggle("text-dark");
  // let a = document.getElementById("footer_icon");
  // document.getElementById("findUs").classList.toggle("dark");
};

function openOverlay() {
  document.getElementById("overlay").classList.toggle("open");
}

function closeOverlay() {
  document.getElementById("overlay").classList.toggle("open");
}
