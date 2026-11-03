sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"                                           //JSONModel 사용을 위해 경로를 '순서대로' 적어줌
], (Controller, JSONModel) => {                                             //JSONModel 사용을 위해 경로를 '순서대로' 적어줌
    "use strict";

    return Controller.extend("test2.test2.controller.test2", {
        onInit() {

            let newModel1 = new JSONModel("/json/Asset.json");              //json 폴더를 webapp 하위에 만들고
            let newModel2 = new JSONModel("/json/Companyson.json");         //그 폴더 안에 있던 만들었던 json 파일을 import하는 과정

            this.getView().setModel(newModel1);                             //view에서 쓸 수 있도록 newModel1으로 setting한다.
            this.getView().setModel(newModel2, "Companyson");               //view에서 쓸 수 있도록 newModel2로 setting한다.(두 번째 부터는 이름 지정 필요)



            var oData3 = {                                                  //json 데이터 생성
                VizSet : [
                    {
                        Player : "박해민",
                        Assist : "1"
                    },
                    {
                        Player : "최지훈",
                        Assist : "3"
                    },
                    {
                        Player : "신민재",
                        Assist : "212"
                    },
                    {
                        Player : "문보경",
                        Assist : "118"
                    },
                    {
                        Player : "박성한",
                        Assist : "1228"
                    }
                ]
            }

            var newModel3 = new JSONModel(oData3);                          //json 데이터를 불러오는 과정
            this.getView().setModel(newModel3, "AsPoint");                  //view에서 쓸 수 있도록 newModel3로 setting한다.




            var CalData = {
                ResultDp: ""                                                //계산기 결과창에 보여줄 값(초기값은 0)
            }

            var CalModel = new JSONModel(CalData);                          //json 데이터를 불러오는 과정

            this.getView().setModel(CalModel, "Calc");                      //view에서 쓸 수 있도록 CalModel, "Calc"로 등록


        },

        onClick() {                                                         //1번 문제 함수 설정

            var vArray = [                                                  //json 데이터 생성
                    {
                        Player : "하트",
                        Team : "NC"
                    },
                    {
                        Player : "네일",
                        Team : "KIA"
                    },
                    {
                        Player : "헤이수스",
                        Team : "키움"
                    },
                    {
                        Player : "원태인",
                        Team : "삼성"
                    },
                    {
                        Player : "곽빈",
                        Team : "두산"
                    }
                ]

            var oModel = new JSONModel(vArray);                             //json 데이터를 불러오는 과정
            this.getView().setModel(oModel, "PT");                          //view에서 쓸 수 있도록 oModel로 setting한다. 버튼 클릭 시 충돌 방지를 위해 PT 별명 붙여줌.

            console.log(oModel.oData[0]);                                   //oModel에 대한 모든 데이터(Key와 Value)가 콘솔창에 출력됨
            console.log(oModel.oData[1]);
            console.log(oModel.oData[2]);
            console.log(oModel.oData[3]);
            console.log(oModel.oData[4]);                                   //console.log(oModel.oData);만 한다면 클릭 시 배열 데이터 열람 가능
        },

        onPress() {                                                         //계산기 함수 설정
            var BtnClick = this.getView().getSource().getText();
            
            var CalModel = this.getView().getModel("Calc");

            var CurrentValue = CalModel.getProperty("/ResultDp");

            CalModel.setProperty("/ResultDp", CurrentValue + BtnClick);
        },

        onEqual() {
            var CalModel = this.getView().getModel("Calc")

            var vFormula = CalModel.getProperty("/ResultDp");
        }
    });
});