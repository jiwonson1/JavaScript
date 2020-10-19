// window: 브라우저 창에 대한 정보를 담고있는 객체 (모든 객체의 최상위 객체)

str = "전역변수";           // 자동으로 window객체의 필드로 잡힘

var str2 = "var 전역변수";

// window.onload == 해당 문서 로딩되고 나서 바로 실행할 함수 지정하는 구문
window.onload = function(){

    var str = "지역변수";       // 전역변수명과 중복됨

    var str3 = "새로운 지역변수";

    str4 = "난 뭘까요?";

    console.log("----- str 호출 -----");
    console.log(str); // 해당 지역내에서 지역변수명과 전역변수명이 동일한 변수 호출시 지역변수 호출!
    // 전역변수에 접근하고자 할때 
    // window. 또는 this.
    console.log(window.str);
    console.log(this.str);

    console.log("---- str2 호출 ----");
    console.log(str2);
    console.log(window.str2);
    console.log(this.str2);

    console.log("---- str3 호출 ----");
    console.log(str3);
    console.log(window.str3); // undefined (정의되어있지 않다는 소리)
    console.log(this.str3);

    console.log("---- str4 호출 ----");
    console.log(str4);
    console.log(window.str4);
    console.log(this.str4);

    console.log(test);
};


var test = "테스트";

function typeTest(){

    //var name = "홍길동";
    var name = '홍길동';
    var age = 20;
    var check = true;
    var hobby = ["영화", "음악", "낮잠"]; // object

    var user = {
        name:"홍길동",
        age:20,
        id:"user01"
    };  // object

    var testFn = function(){
        alert("ㅋㅋㅋ");
    };

    var noVal;

    console.log(name);
    console.log(age);
    console.log(check);
    console.log(hobby);
    console.log(user);
    console.log(testFn);
    console.log(noVal);

    // 자료형 확인시 사용되는 함수 : typeof(변수명)

    var divEl = document.getElementById("area1");

    divEl.innerHTML = name + "의 자료형 : " + typeof(name) + "<br>";
    divEl.innerHTML += age + "의 자료형 : " + typeof(age) + "<br>";
    divEl.innerHTML += check + "의 자료형 : " + typeof(check) + "<br>";
    divEl.innerHTML += hobby + "의 자료형 : " + typeof(hobby) + "<br>";
    divEl.innerHTML += user + "의 자료형 : " + typeof(user) + "<br>";
    divEl.innerHTML += testFn + "의 자료형 : " + typeof(testFn) + "<br>";
    divEl.innerHTML += noVal + "의 자료형 : " + typeof(noVal) + "<br>";
    divEl.innerHTML += divEl + "의 자료형 : " + typeof(divEl) + "<br>";

    // 객체 내부의 속성에 접근 => .으로 접근
    console.log(user.name);
    console.log(user.age);
    console.log(user.id);

}