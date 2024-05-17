btn4.onclick = function(event) {
    event.preventDefault();  
    btn1.src = "img/blue_p.png";
    btn2.src = "img/blue_s.png";
    btn3.src = "img/blue_t.png";
}
btn5.onclick = function(event) {
    event.preventDefault();  
    btn1.src = "img/pink_p.png";
    btn2.src = "img/pink_s.png";
    btn3.src = "img/pink_t.png";
}
btn6.onclick = function(event) {
    event.preventDefault();  
    btn1.src = "img/yellow_p.png";
    btn2.src = "img/yellow_s.png";
    btn3.src = "img/yellow_t.png";
}

// 각 이미지와 버튼 요소를 가져옵니다.
const bluePImage = document.getElementById('btn1');
const pinkPImage = document.getElementById('btn2');
const yellowPImage = document.getElementById('btn3');
const mainOption = document.getElementById('mainoption');

// 클릭된 이미지에 해당하는 요소만을 표시하는 함수입니다.
function showSelectedProduct(imageSrc) {
    // main 영역의 모든 product 요소를 확인합니다.
    mainOption.querySelectorAll('.product').forEach(product => {
        // 각 product 요소에서 img 요소를 가져옵니다.
        const img = product.querySelector('img');
        // 현재 이미지의 src와 클릭된 이미지의 src를 비교하여 일치하면 해당 요소를 표시합니다.
        if (img.src === imageSrc) {
            product.style.display = 'block';
        } else {
            // 일치하지 않으면 해당 요소를 숨깁니다.
            product.style.display = 'none';
        }
    });
}

// 각 이미지를 클릭할 때마다 해당 이미지와 동일한 이미지를 가진 요소만을 표시하도록 설정합니다.
bluePImage.addEventListener('click', function() {
    showSelectedProduct(bluePImage.src);
});

pinkPImage.addEventListener('click', function() {
    showSelectedProduct(pinkPImage.src);
});

yellowPImage.addEventListener('click', function() {
    showSelectedProduct(yellowPImage.src);
});



document.addEventListener("DOMContentLoaded", function () {
    // JSON 파일을 가져옵니다.
    fetch("data/data.json")
        .then(response => response.json())
        .then(data => {
            // 제품 목록을 가져옵니다.
            const items = data.items;

            // 제품 목록을 순회하며 HTML에 추가합니다.
            const productList = document.querySelector(".product-list");

            items.forEach(item => {
                const li = document.createElement("li");
                li.classList.add("product");

                const img = document.createElement("img");
                img.src = item.image;
                img.width = "50px";

                const span = document.createElement("span");
                span.textContent = `${item.gender}, ${item.size}`;

                li.appendChild(img);
                li.appendChild(span);
                productList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});