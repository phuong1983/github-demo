console.log('fillBlankAns');

// Lấy thẻ input và div chứa chuỗi cần thay thế
var maincontent = document.getElementById("maincontent");               //console.log(maincontent.innerHTML+'why not?');
myPattern = /\(q\s?(\w{1,}-\w{1,})\s?q\)/g; 
maincontent.innerHTML = maincontent.innerHTML.replace(myPattern,function (match, p1) {
    // match là kết quả của tìm kiếm, p1 là các nhóm bên trong mẫu
    return "<input type='text' class='inputBox' name="+p1+" >";         //padding to pattern
  });                                                                   //console.log(maincontent.innerHTML+'why not?');