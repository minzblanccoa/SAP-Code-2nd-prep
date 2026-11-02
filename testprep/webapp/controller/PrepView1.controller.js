sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("testprep.testprep.controller.PrepView1", {
      onInit() {},

      onCalcul() {                                              //함수 등록
        var dan = this.getView().byId("gugu").getValue();       //Input 박스의 단수를 불러옴.

        if (dan == "") {
            MessageToast.show("단을 입력하세요!");               //단수가 공백이라면 MessageToast 뜨도록
            } else {                                            //위 조건 만족하지 않을 時,
          for ( var i = 1; i <= 9; i++ )                        //박스에 입력된 단수에 곱할 숫자를 for문으로 작성
            console.log(dan * i);                               //콘솔로 '단수' x '1~9 반복'
        }
      },

      forClick() {
        for( var a = 2; a <= 9; a++ ) {
            for( var b = 1; b <=9; b++ ) {
                console.log(`${a} x ${b} = ${a * b}`);
            }
        }
      },

      whileClick() {

        var c = 2;
        var d = 1;

        while( c <= 9 ) {
            while( d <= 9 ) {
                console.log(`${c} x ${d} = ${c * d}`)
                d++;
            }
            c++;
            d = 1;
        }
      },

      mixClick() {

        var e = 2;

        while( e <= 9 ) {
            for( var f = 1; f <= 9; f++ ) {
                console.log(`${e} x ${f} = ${e * f}`);
            }
            e++;
            f = 1;
        }
      },

      skipCalcul() {

        var g = this.getView().byId("skipDan").getValue();

        for( var h = 2; h <= 9; h++ ) {
            if( h == g ) {
                continue;
            }
            for( var j = 1; j <= 9; j++ ) {
                console.log(`${h} x ${j} = ${h * j}`);
            }
        }

      },

      oddNumber () {

        for( var k = 2; k <= 9; k++ ) {
            if( k % 2 == 0 ) {
                continue;
            }
            for( var l = 1; l <= 9; l++ ) {
                console.log(`${k} x ${l} = ${k * l}`);
            }
        }

      }

    });
  },
);
