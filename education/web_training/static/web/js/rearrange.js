        // Dữ liệu về các button và hình ảnh
        const container = document.getElementById('sortable');
        const btnAns = document.getElementById('check-button');

        function randomSort(a, b) {
          return Math.random() - 0.5;
        }        
        sentences.sort(randomSort); //alert(typeof sentences);
        var i = 0;

        function showquestionrearrange(i){
            var sen = sentences[i].words;
            sen.sort(randomSort);
            if (container.hasChildNodes()) {
                // Xóa tất cả các phần tử con
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            }
            btnAns.name = sentences[i].content;
            sen.forEach((word) => {
                //alert(sentence.content);
                const pictureDiv = document.createElement('div');
                pictureDiv.classList.add('sortable-item');
                //pictureDiv.name = sentence.name;
                pictureDiv.className +=' p-2 flex-fill align-self-center';
                pictureDiv.innerHTML = word;
                   
                container.appendChild(pictureDiv);
                
            });
        }
        showquestionrearrange(i);

        $(document).ready(function () {
            // Kích hoạt tính năng kéo thả
            $("#sortable").sortable();
            $("#sortable").disableSelection();
            
            // Khi người chơi nhấp vào nút kiểm tra
            $("#check-button").click(function () {
                var currentOrder='';
                // Lấy thứ tự hiện tại của các từ
                $("#sortable").ready(function() {  
                    // Chọn tất cả các thẻ <li> trong danh sách có id "sortable"
                    var myArray = $("#sortable div");
                    myArray.each(function() {
                      // Lấy giá trị HTML của từng thẻ <li> và in ra
                      var htmlValue = $(this).html();          //alert('ptu hiện tại : '+htmlValue);
                      currentOrder += htmlValue + " ";
                    });
                    var ans = btnAns.name+" ";                 //alert('mảng hiện tại : '+currentOrder);
                    // So sánh thứ tự với câu gốc
                    if (currentOrder == ans) {
                        alert('Chúc mừng! Bạn đã sắp xếp câu [ '+ans+' ]đúng thứ tự.['+currentOrder+']');
                        i++; if (i>2) { i=0; }; showquestionrearrange(i);
                    } else {
                        alert('Câu bạn sắp xếp [ '+ans+' ] chưa đúng thứ tự. Hãy thử lại.['+currentOrder+']');
                        i++; if (i>2) { i=0; };showquestionrearrange(i);
                    }
                  });

            });
        });
