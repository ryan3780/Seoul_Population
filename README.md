
<img width="1274" alt="스크린샷 2020-02-18 오후 5 28 58" src="https://user-images.githubusercontent.com/45477679/74732019-a841b900-528c-11ea-8058-e1211f253fcd.png">

## 서울시 인구 자료

서울 열린데이터 광장 -> 데이터셋 -> 서울시 인구밀도 (동별) 통계 자료 이용  
  URL : https://data.seoul.go.kr/dataList/10584/S/2/datasetView.do?tab=S  
<br/>

### `기능`

1. `input box`를 이용한 검색 기능
2. `선택된 구`에 대항하는 `해당 동` 보여주는 기능
3. 


### `설계`

1. 디자인 계획
2. 다운 받은 통계 자료를 .js 파일로 변환
3. 통계 자료를 활용 할 수 있도록 `정규표현식`으로 객체를 원소로 가진 배열로 수정 후 `import`
4. `react-strap` && `react-scroll`라이브러리로 디자인
5. `React로 사고하기`와 `구글링`을 통해 컴포넌트 분리 및 필요 기능 코딩
6. `React Hook`으로 리팩토링

<br />

### `App 확인 방법`

1. `yarn`사용 시 : yarn install  
    ㄱ. yarn create react-app `원하는 명칭`  
    ㄴ. cd `원하는 명칭으로 생성된 디렉토리`  
    ㄷ. yarn add install react-scroll  
    ㄹ. yarn add reactstrap react react-dom  
    ㅁ. yarn add bootstrap  
    ㅂ. yarn start  
<br/> 

2. `npm && npx`사용 시 : npm install

    ㄱ. npm install -g create-react app `원하는 명칭`  
    ㄴ. cd `원하는 명칭으로 생성된 디렉토리`  
    ㄷ. npm install --save bootstrap  
    ㄹ. npm install --save reactstrap react react-dom  
    ㅁ. npm install react-scroll  
    ㅂ. npm start  
<br/>

### `가장 많이 고민하고 현재도 고민하는 것`

#### `Naming` 
#### `Component Divide`
#### `Void Duplicated Code`
