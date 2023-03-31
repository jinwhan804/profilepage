function menu(){
    // 메뉴 확장
    let headerExpend = document.querySelector(".header");
    if(headerExpend.classList.contains("isExpend")){
        headerExpend.classList.remove("isExpend");
    }else{
        headerExpend.classList.add("isExpend");
    }

    // 메뉴 버튼 하이라이트 생성
    let menuBtn = document.querySelector(".menu-btn");
    if(menuBtn.classList.contains(".highlight")){
        menuBtn.classList.remove(".highlight");
    }else{
        menuBtn.classList.add(".highlight");
    }
}