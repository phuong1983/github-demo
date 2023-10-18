console.log('fillBlankAns');

// Lấy thẻ input và div chứa chuỗi cần thay thế
var maincontent = document.getElementById("container");               //console.log(maincontent.innerHTML+'why not?');
let score = 0;//alert('scoreDisplay : '+score);
const scoreDisplay = document.getElementById('score-value'); 
const wordDivs = document.getElementById('wordDivs');

myPattern = /\(q\s?(\w{1,}-\w{1,})\s?q\)/g; 
maincontent.innerHTML = maincontent.innerHTML.replace(myPattern,function (match, p1) {
    // match là kết quả của tìm kiếm, p1 là các nhóm bên trong mẫu
    let  arrayp1 = p1.split("-");
    return "<input type='text' class='inputBox dropTarget' name="+arrayp1[1]+" id="+arrayp1[0]+" >";         //padding to pattern
  });                                                                   //console.log(maincontent.innerHTML+'why not?');

  var inputBox = document.getElementsByClassName("inputBox");
  for(let i = 0;i<  inputBox.length;i++){        
      
      inputBox[i].addEventListener("blur", function() {   // Lắng nghe sự kiện khi người dùng nhập giá trị vào input
          var inputValue = inputBox[i].value;
          // Kiểm tra nếu giá trị nhập vào là "eq1-b" thì hiển thị thông báo
          if (inputValue.trim() == inputBox[i].name.trim()) {
              console.log("Chúc mừng bạn đã trả lời đúng : " 
              + inputBox[i].id.trim()+'-'+inputBox[i].name.trim()+';'+inputValue);
              score++;
              scoreDisplay.textContent = score;
          }
          else{
              console.log('fail : '+ inputBox[i].id.trim()+'-'+inputBox[i].name.trim()+';'+inputValue);
          }
      });
        inputBox[i].addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        inputBox[i].addEventListener('drop', (e) => {
            e.preventDefault();
            const word = e.dataTransfer.getData('text/plain');
            const txtbox = e.target.closest('.dropTarget');
            txtbox.value = word;
            
            // Tạo một sự kiện "blur" tới phần tử
            var blurEvent = new Event("blur");
            // Gọi sự kiện "blur" cho phần tử
            txtbox.dispatchEvent(blurEvent);
        });

      //tạo ra các element để kéo thả vào textbox, được tự động tạo ra--------------------------------------
      let wordDiv = createItemCard(inputBox[i].name.trim());
      wordDivs.appendChild(wordDiv);
  }
