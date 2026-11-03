sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("test1.test1.controller.Test1", {
        onInit() {
        },

        onSubmit1() {                                                                  //1번 문제 첫 번째 input 박스 함수 설정
            var AAA = this.getView().byId("inputFiori").getValue();                    //inputFiori input박스의 value값을 가져오는 AAA 변수

            if( AAA == "Fiori 입력창") {                                                //만약 inputFiori input박스에 입력된 value값이 "Fiori 입력창"이라면,
                this.getView().byId("vResult1").setText("피오리 입력창입니다");           //text id 중 vResult1의 text를 "피오리 입력창입니다"로 설정
            }
        },

        onSubmit2() {                                                                   //1번 문제 두 번째 input 박스 함수 설정
            var BBB = this.getView().byId("inputRTX").getValue();                       //inputRTX input박스의 value값을 가져오는 BBB 변수

            if( BBB == "RTX1253") {                                                     //만약 inputRTX input박스에 입력된 value값이 "RTX1253"이라면
                this.getView().byId("vResult2").setText("30Ton");                       //text id 중 vResult2의 text를 "30Ton"로 설정
            }
        },
        
        forClick() {                                                                    //2번 문제 for문 구구단 함수 설정

            for( var i = 2; i <= 9; i++ ) {                                             //for문에서 변수 i를 설정함과 동시에 반복문 설정
                for( var j = 1; j <= 9; j++ ) {                                         //for문에서 변수 j를 설정함과 동시에 반목문 설정
                    console.log(`${i} x ${j} = ${i * j}`);                              //2단(i)부터 곱하는 수(j) 9까지 반복하여 콘솔창에 찍어냄 (백틱과 ${} 사용)
                }
            }

        },

        whileClick() {                                                                  //2번 문제 while문 구구단 함수 설정

            var k = 2;                                                                  //단 변수 설정
            var l = 1;                                                                  //곱하는 수 변수 설정

            while(k <= 9) {                                                             //k(단)가 9가 될 때까지 만족한다면 다음 조건문으로
                while( l <= 9) {                                                        //l(곱하는 수)이 9가 될 때까지 만족하면 다음으로
                    console.log(`${k} x ${l} = ${k * l}`)                               //콘솔창에 일단 찍어냄 (초기: 2 x 1) (백틱과 ${} 사용)
                    l++;                                                                //곱하는 수 l을 증가시키는 증감문 설정(l이 9가 될 때까지 while문 반복)
                }
                k++;                                                                    //l이 9가 되고 while문의 조건을 벗어나는 순간 밖으로 빠져나와 k(단수)를 증가시킴
                l = 1;                                                                  //k 증가 후 l을 1로 초기화
            }                                                                           //이후 다시 반복

        },

        mixClick() {                                                                    //2번 문제 for + while문 구구단 함수 설정

            var n = 1;                                                                  //곱하는 수 n 변수 설정

            for( var m = 2; m <= 9; m++) {                                              //for문에서 변수 m을 설정함과 동시에 반복문 설정
                while(n <= 9) {                                                         //for문 조건 벗어날 때까지 while문으로 들어가서 n이 9가 될 때까지 while문 반복하겠다는 뜻
                    console.log(`${m} x ${n} = ${m * n}`);                              //콘솔창에 일단 찍어냄 (초기: 2 x 1) (백틱과 ${} 사용)
                    n++;                                                                //곱하는 수 n을 증가시키는 증감문 설정(n이 9가 될 때까지 while문 반복)
                }
                n = 1;                                                                  //m의 증감문은 for문에 있으니 위 while 중첩문과 다르게, 곱하는 수를 1로 초기화하는 작업만 하면 됨
            }                                                                           //이후 다시 반복

        },

        onCalcul() {                                                                    //입력한 숫자의 단만 제외한 출력하는 구구단 함수 설정

            var gugudan = this.getView().byId("gugu").getValue();                       //gugu input박스에 입력된 값을 gugudan이라는 변수로 받아오는 작업

            for( var o = 2; o <= 9; o++ ) {                                             //for문에서 변수 o를 설정함과 동시에 반복문 설정(단수)
                if( gugudan == o ) {                                                    //만약 gugu input박스로부터 받아온 gugudan의 값이 변수 o와 동일하다면,
                    continue;                                                           //해당 반복 회차는 건너뛰는 continue 설정(입력한 단은 건너뛰기)
                }
                for( var p = 1; p <= 9; p++ ) {                                         //for문에서 변수 p를 설정함과 동시에 반복문 설정(곱하는 수)
                    console.log(`${o} x ${p} = ${o * p}`);                              //콘솔창에 찍어냄(백틱과 ${} 사용)
                }
            }

        },

        evenGugu() {                                                                    //짝수단 출력 구구단 함수 설정

            for( var q = 2; q <= 9; q++ ) {                                             //for문에서 변수 q를 설정함과 동시에 반복문 설정(단수)
                if( q % 2 === 1 ) {                                                     //만약 q를 2로 나눈 나머지가 1이라면,
                    continue;                                                           //해당 q의 반복 회차를 건너뀌는 continue 설정(홀수 단은 건너뛰기)
                }
                for( var r = 1; r <= 9; r++ ) {                                         //for문에서 변수 r을 설정함과 동시에 반복문 설정(곱하는 수)
                    console.log(`${q} x ${r} = ${q * r}`);                              //콘솔창에 찍어냄(백틱과 ${} 사용)
                }
            }
        
        },

        onMulti() {                                                                     //배열 숫자 곱셈 함수 설정

            var vData = [ 10, 20, 30, 40, 50 ];                                         //배열을 담는 vData 변수 설정
            var vMulti = 1;                                                             //배열의 수를 모두 곱한 수를 담는 vMulti 변수를 1로 설정

            for( var vValue of vData ) {                                                //for-of를 사용하여 index번호(for-in)를 굳이 받아오지 않고도 바로 value값(예: 10, 20, 30...)을 불러올 수 있음
                vMulti = vMulti*vValue;                                                 //vMulti에 value값이 vValue를 곱하여 담아줌
            }

            this.getView().byId("XXXresult").setText(vMulti);                           //곱한 결과를 나타내는 text id인 XXXresult에 vMulti의 값을 설정하는 setText 사용
        }



    });
});