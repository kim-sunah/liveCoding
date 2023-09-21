//제출 이벤트를 받는다.
const form = document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault()//기존 기능 차단

    let userId = event.target.id.value;
    let userpw1 = event.target.pw1.value;
    let userpw2 = event.target.pw2.value;
    let username = event.target.name.value;
    let userphone = event.target.phone.value;
    let userposition = event.target.position.value;
    let usergender = event.target.gender.value;
    let useremail = event.target.email.value;
    let userintro = event.target.intro.value;

    if(userId.length<6){
        alert("아이디가 너무 짧습니다")
        return;
    }
    if(userpw1 !== userpw2){
        alert("비밀번호가 일치하지 않습니다")
        return;
    }

    //가입환영 인사를 제공한다.
    document.body.innerHTML = "";
    document.write(`<h1>${username}님 가입을 환영합니다
    <br>
    <p>회원가입시 입력하신 내역은 다음과 같습니다.
    <br>
    <p>아이디 : ${userId}
    <br>
    <p>이름 : ${username}
    <br>
    <p>전화번호 : ${userphone}
    <br>
    <p>원하는 직무 : ${userposition}`)
})

//제출된 입력 값들을 참조한다.

//입력값에 문제가 있는 경우 이를 감지한다.

