function writeCode(code) {
    let domCode = document.querySelector('#code');
    let n = 0;
    let codeinterval = setInterval(() => {
        n = n + 9;
        domCode.innerHTML += code.substring(n - 9, n);
        //这里由于速度和代码高亮冲突，所以暂时取消代码高亮。
        // domCode.innerHTML += Prism.highlight(code.substring(n - 9, n), Prism.languages.css);
        // styletag.innerHTML = code.substring(0, n);
        styletag.innerHTML += code.substring(n - 9, n);

        domCode.scrollTop = domCode.scrollHeight;
        if (n >= code.length) {
            window.clearInterval(codeinterval);
        }
    }, 1);
}

var result =
    `
html {
    height: 100%;
}

body {
    background-color: #89B9F7;
}

body .container {
    max-width: 280px;
    padding: 0;
    margin: 0 auto;
    min-height: 400px;
}

body .container :before,
body .container :after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
}

.title {
    margin-top: 3vh;
    display: block;
}

.peppa-container {
    position: absolute;
    height: 250px;
    width: 180px;
    top: calc(45% - (180px / 2));
    left: calc(70% - (180px / 2));
    z-index:1;
}

.peppa {
    height: 180px;
    width: 180px;
    position: relative;
}

.peppa * {
    position: absolute;
}

.peppa .head {
    left: calc(50% - 75px);
    height: 150px;
    width: 150px;
    background: #FFC4E0;
    border: 5px solid #E795C0;
    -moz-border-radius: 55% 45% 45% 55%/60% 55% 45% 40%;
    -webkit-border-radius: 55%;
    border-radius: 55% 45% 45% 55%/60% 55% 45% 40%;
}

.peppa .head .eye {
    height: 20px;
    width: 20px;
    background: #FFFFFF;
    border: 5px solid #E795C0;
    -moz-border-radius: 55% 45% 55% 45%/50% 50% 50% 50%;
    -webkit-border-radius: 55%;
    border-radius: 55% 45% 55% 45%/50% 50% 50% 50%;
}

.peppa .head .eye.left {
    top: -5px;
    left: 30px;
}

.peppa .head .eye.right {
    top: 10px;
    left: 65px;
}

.peppa .head .eye:after {
    top: 5px;
    left: 2px;
    height: 10px;
    width: 10px;
    background: #000000;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.peppa .head .cheek {
    top: 55px;
    right: 10px;
    height: 50px;
    width: 50px;
    background: #F5AACB;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}

.peppa .head .mouth {
    top: -90px;
    left: 25px;
    height: 200px;
    width: 90px;
    border: 5px solid #EF3F85;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    -moz-border-radius: 0 0 50% 50%/60% 60% 40% 40%;
    -webkit-border-radius: 0;
    border-radius: 0 0 50% 50%/60% 60% 40% 40%;
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(20deg);
}

/*佩奇的鼻子*/
.peppa .nose {
    top: -27px;
    left: -51px;
    height: 85px;
    width: 130px;
    background: #FFC4E0;
    border: 5px solid #E795C0;
    border-right-color: transparent;
    -moz-border-radius: 70% 20% 40% 60%/50% 0% 20% 45%;
    -webkit-border-radius: 70%;
    border-radius: 70% 20% 40% 60%/50% 0% 20% 45%;
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    transform: rotate(19deg);
}

.peppa .nose:before {
    top: 50px;
    right: 4px;
    height: 50px;
    width: 60px;
    background: #FFC4E0;
}

.peppa .nose .snout {
    top: 10px;
    left: -5px;
    height: 56px;
    width: 40px;
    background: #FFC4E0;
    border: 5px solid #E795C0;
    -moz-border-radius: 55% 45% 50% 50%/50% 45% 55% 50%;
    -webkit-border-radius: 55%;
    border-radius: 55% 45% 50% 50%/50% 45% 55% 50%;
}

.peppa .nose .snout:before {
    top: 45%;
    left: 15%;
    height: 8px;
    width: 8px;
    background: #E795C0;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -moz-box-shadow: 15px 0 0 0 #e795c0;
    -webkit-box-shadow: 15px 0 0 0 #e795c0;
    box-shadow: 15px 0 0 0 #e795c0;
}

/*佩奇的耳朵*/
.peppa .ear {
    top: -40px;
    height: 34px;
    width: 20px;
    background: #FFC4E0;
    border: 5px solid #E795C0;
    -moz-border-radius: 50% 50% 20% 20%/40% 40% 60% 60%;
    -webkit-border-radius: 50%;
    border-radius: 50% 50% 20% 20%/40% 40% 60% 60%;
    -moz-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
    z-index: -1;
}

.peppa .ear.left {
    left: 86px;
}

.peppa .ear.right {
    top: -24px;
    left: 125px;
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -webkit-transform: rotate(25deg);
    transform: rotate(25deg);
}

/*佩奇的左手右手*/
.peppa .arm {
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    height: 7px;
    width: 55px;
    background: #FFC4E0;
    top: 155px;
}

.peppa .arm.right {
    right: -40px;
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
}

/*手指*/
.peppa .arm.right .finger {
    right: -20px;
    -moz-transform-origin: left center;
    -ms-transform-origin: left center;
    -webkit-transform-origin: left center;
    transform-origin: left center;
}

.peppa .arm.right .finger:nth-of-type(1) {
    -moz-transform: rotate(-40deg);
    -ms-transform: rotate(-40deg);
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
}

.peppa .arm.right .finger:nth-of-type(2) {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
}

.peppa .arm.right .finger:nth-of-type(3) {
    -moz-transform: rotate(50deg);
    -ms-transform: rotate(50deg);
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
}

/*佩奇的裙子*/
.peppa .dress {
    top: 120px;
    background: #F8756D;
    height: 120px;
    width: 160px;
    left: calc(50% - 80px);
    z-index: -1;
    -moz-border-radius: 35% 30% 0 0/100% 100% 0 0;
    -webkit-border-radius: 35%;
    border-radius: 35% 30% 0 0/100% 100% 0 0;
    border: 5px solid #EE5253;
}

.peppa .arm.left {
    left: -28px;
    -moz-transform: rotate(-30deg);
    -ms-transform: rotate(-30deg);
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
    -moz-transform-origin: right top;
    -ms-transform-origin: right top;
    -webkit-transform-origin: right top;
    transform-origin: right top;
    z-index: -1;
}

.peppa .arm.left .finger {
    left: -20px;
    -moz-transform-origin: right center;
    -ms-transform-origin: right center;
    -webkit-transform-origin: right center;
    transform-origin: right center;
}

.peppa .arm.left .finger:nth-of-type(1) {
    -moz-transform: rotate(-40deg);
    -ms-transform: rotate(-40deg);
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
}

.peppa .arm.left .finger:nth-of-type(2) {
    -moz-transform: rotate(5deg);
    -ms-transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    transform: rotate(5deg);
}

.peppa .arm.left .finger:nth-of-type(3) {
    -moz-transform: rotate(50deg);
    -ms-transform: rotate(50deg);
    -webkit-transform: rotate(50deg);
    transform: rotate(50deg);
}

.peppa .arm .finger {
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    height: 7px;
    width: 22px;
    background: #FFC4E0;
}


/*佩奇的两只脚*/
.peppa .foot {
    bottom: -100px;
    height: 40px;
    width: 8px;
    background: #FFC4E0;
    z-index: -2;
}

.peppa .foot:after {
    bottom: -5px;
    right: 0;
    width: 45px;
    height: 12px;
    background: #333333;
    -moz-border-radius: 20% 80% 80% 20%/50% 50% 30% 50%;
    -webkit-border-radius: 20%;
    border-radius: 20% 80% 80% 20%/50% 50% 30% 50%;
}

.peppa .foot.left {
    left: calc(50% - 35px);
}

.peppa .foot.right {
    left: calc(50% + 40px);
}

/*画个地面*/
.peppa .shadow {
    bottom: -115px;
    height: 30px;
    width: 165px;
    background: rgba(0, 0, 0, 0.25);
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    z-index: -3;
}
`
writeCode(result);