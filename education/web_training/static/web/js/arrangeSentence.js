console.log('arrangeSentence');
const container = document.getElementById('container');
const btnAns = document.getElementById('check-button');

function randomSort(a, b) {
  return Math.random() - 0.5;
}        
sentences.sort(randomSort); console.log(typeof sentences + sentences.length);

var i = 5;

function showquestionrearrange(i,sentences,container){
    var arrayWords = sentences[i].words;
    arrayWords.sort(randomSort);
    if (container.hasChildNodes()) {
        // Xóa tất cả các phần tử con
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    // btnAns.name = sentences[i].content;
    arrayWords.forEach((word) => {
        // //alert(sentence.content);
        // const pictureDiv = document.createElement('div');
        // pictureDiv.classList.add('container-item');
        // //pictureDiv.name = sentence.name;
        // pictureDiv.className +=' p-2 flex-fill align-self-center';
        // pictureDiv.innerHTML = word;

        let pictureDiv = createItemCard(word);
           
        container.appendChild(pictureDiv);
        
    });
}
showquestionrearrange(i,sentences,container);

$(document).ready(function () {
    // Kích hoạt tính năng kéo thả
    console.log($.fn.jquery); // In phiên bản jQuery
    console.log($.ui.version); // In phiên bản jQuery UI
    $("#container").sortable();
    $("#container").disableSelection();
    console.log('done');            

            // Khi người chơi nhấp vào nút kiểm tra
            $("#check-button").click(function () {
                var currentOrder='';
                // Lấy thứ tự hiện tại của các từ
                $("#container").ready(function() {  
                    // Chọn tất cả các thẻ <li> trong danh sách có id "sortable"
                    var myArray = $("#container div");
                    myArray.each(function() {
                      // Lấy giá trị HTML của từng thẻ <li> và in ra
                      var htmlValue = $(this).id;          //alert('ptu hiện tại : '+htmlValue);
                      currentOrder += htmlValue + " ";
                    });
                    var ans = sentences[i].content+" ";                 //alert('mảng hiện tại : '+currentOrder);
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
