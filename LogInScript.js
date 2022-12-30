"use strict";

let id = document.getElementsByClassName("EmailInput")[0];
let pw = document.getElementsByClassName("PasswordInput")[0];
let btwn = document.getElementsByClassName("LogInButton")[0];
let PasswordEye = document.getElementById("Eye");

function LogInButtonClickFunction(e) {
    e.preventDefault();

    // 만약 Email(=id) 칸이 빈칸이라면, EmailLabel과 EmailInput 색을 빨간색으로 변경
    if (id.value.length <= 0) {

        //IdInput 색깔을 빨간색으로 바꾸기
        id.style.borderColor = "#ff0000";
        document.getElementsByClassName("EmailAddressLabel")[0].style.color = "#ff0000";
    }

    //만약 Email(=id) Input 칸에 @가 없다면 Email is not valid(#Red) 출력
    else if (id.value.indexOf("@") == -1) {
        //Email(=id) Input 칸에 @가 없어서 "Email is not valid가 eanbled 된 상태라면 아무것도 하지 않음"
        if (document.getElementById("error-element-username") != null) {
            return;
        }

        //Email is not valid(color:red) 소환
        const newSpanElement = document.createElement('span');
        newSpanElement.textContent = "Email is not valid.";
        newSpanElement.id = "error-element-username";
        newSpanElement.className = "error-element-username";
        newSpanElement.setAttribute("style", "color:red");

        document.getElementsByClassName("error-element-username-Div")[0].appendChild(newSpanElement);

        //IdInput 색깔을 빨간색으로 바꾸기
        id.style.borderColor = "#ff0000";
        document.getElementsByClassName("EmailAddressLabel")[0].style.color = "#ff0000";
    }
 
    //이메일과 비밀번호에 오류가 없다면 MainHomePage로 가기
    else {
        window.location = ("./MainHomePage.html");
    }
}

btwn.addEventListener('click', LogInButtonClickFunction);
//document.querySelector("#btn").addEventListener("click", vOnLogInButtonClick);

