window.onload = function () {
  var heading = document.querySelector("#heading");
  heading.onclick = function () {
    heading.style.color = "red";
    heading.style.fontSize = "50px";
  };
  var text = document.querySelector("#text");
  text.onclick = function () {
    text.style.color = "grey";
    text.style.fontWeight = "600";
    text.style.fontSize = "50px";
  };
  var myname = document.querySelector("#myname");
  myname.onclick = function () {
    myname.style.color = "blue";
    myname.style.fontWeight = "600";
    myname.style.fontSize = "50px";
  };

  //글자색 바꾸기 토글
  var heading = document.querySelector("#heading");
  var isRed = false; //초기 토글 상태는 false 입니다.
  heading.onclick = function () {
    //isRed 변수 값에 따라 텍스츠 색상을 변경합니다.
    if (isRed) {
      heading.style.color = "blue"; //원래 색상으로 변경
      isRed = false;
    } else {
      heading.style.color = "red"; //빨간색으로 변경
      isRed = true;
    }
  };

  // 내 이름 글자색 바꾸기 토글
  var maname = document.querySelector("#myname");
  var isBlue = false;
  myname.onclick = function () {
    if (isBlue) {
      myname.style.color = "green";
      isBlue = false;
    } else {
      myname.style.color = "pink";
      isBlue = true;
    }
  };
};
