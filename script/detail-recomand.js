document.addEventListener("DOMContentLoaded",()=>{


    // ul태그에 li태그의 형태로 상품 데이터를 넣는 소스코드
    const list = document.querySelector(".list-grid")
    let result = ""
    listArray.forEach(item=>{
        result +=`
        <li>
            <a href="#">
                <figure>
                    <img src="./img/${item.pThumbnail}" alt="${item.pName}">
                </figure>
                <div class="list-option">
                    <span class="btn-heart">
                        <img src="./img/icn-heart-line.svg" alt="좋아요 아이콘">
                    </span>
                </div>
                <h4>${item.pName}</h4>
                <p class="fwm">${item.pDesc}</p>
                <div class="price fwb">${toWon(item.pPrice)}</div>
            </a>
        </li>`
    })

    list.innerHTML = result

    



    // heart 버튼 클릭 이벤트
    const btnHearts = document.querySelectorAll(".btn-heart")
    btnHearts.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            
            let imgtag = btn.children[0]
            let originSrc = btn.children[0].getAttribute("src")
            if(originSrc == './img/icn-heart-line.svg'){
                imgtag.setAttribute("src", './img/icn-heart-fill.svg')
            } else {
                imgtag.setAttribute("src", './img/icn-heart-line.svg')
            }
        })
    })
})