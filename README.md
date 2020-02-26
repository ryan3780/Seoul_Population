
<img width="1274" alt="스크린샷 2020-02-18 오후 5 28 58" src="https://user-images.githubusercontent.com/45477679/74732019-a841b900-528c-11ea-8058-e1211f253fcd.png">

## 서울시 인구 자료

서울 열린데이터 광장 -> 데이터셋 -> 서울시 인구밀도 (동별) 통계 자료 이용  
  URL : https://data.seoul.go.kr/dataList/10584/S/2/datasetView.do?tab=S  
<br/>

### `기능`

1. `input box`를 이용한 검색 기능
2. `선택된 구`에 대항하는 `해당 동` 보여주는 기능
3. `선택된 구` && `선택된 동`을 색깔로 표현하는 기능
4. `구`&&`동`을 오름차순으로 보여주는 기능  
5. `.reduce`로 합계를 계산


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

### 제일 많이 사용한 보조 기능  

1. `console.log()`  
통계자료를 정규식으로 수정하고, `import`시 원하는 값을 가져오는지, 가져오지 못한다면 왜 그런지 제일 많이 사용했다.  
`변수`,`함수`의 return value, `반복문`과 `조건문`을 선언하고, 원하는 값이 맞는지 판별할 때도 항상 사용했다.  
</br>

2.`크롬 개발자 도구`  
`onClick`기능을   

                      

### `가장 많이 고민하고 현재도 고민하는 것`

#### `Naming` 
value를 담을 Box의 이름을 짓는 것이 매우 고민이 된다.  
기준은 남들이 `Naming`만 보고도, '이게 어떤 기능을 할 것인지, 혹은 어떤 곳에 필요로 하는지'에 대해서  
충분한 추론을 넘어서 확신을 가질 수 있도록 `Naming`을 고민하면서 코드를 작성하고 있다.  
특히, 변수명의 길이가 길더라도 최대한 자세히 `묘사`가 되어 있어야 한다는 생각으로 지금도 코딩을 하고 있다.
#### `Component Divide`  
제일 힘들고 어려운 부분이라고 생각한다. 코 앞에 나무를 보지 말고, 숲을 봐야 하는데... 쉽지 않다.  
그래도 실제 코딩을 하기전에 `가장 중요한`과정이며, 선행하지 않으면 코딩을 하면서 굉장히 짜증나는 상황이 많이 발생한다.  
예를 들어, `State와 Props`를 주거나 받아 와야 하는데, 컴포넌트가 제대로 분리 되어 있지 않으면, 같은 코드를 작성하고, 지우고를 반복한다. 
<br/>
그래서 찾아낸 방법은 github에 올린 자료를 검색하여, 현재 만들고 있는 것과 `비슷한` 것 혹은 `가독성`이 좋은 사람의 코드를 보면서 컴포넌트를 `어떻게` 분리를 했는지 눈으로 보고, 말하면서, 감탄하면서 현재 작업하는 것에 적용하려고 노력하고 있다.
#### `Remove Duplicated Code`
중복 코드를 제거하는 것이 `가독성`과 `퍼포먼스`를 향상시키는 것이라고 생각한다.  
허나, 이것 역시 어렵다. 막상, `중복`코드를 찾아 냈는데, 이걸 어떻게 고쳐야 할지, 무슨 방법이 좋을지 고민한다.  
여러 컴포넌트에서 사용할 것 같다 ? 새로운 컴포넌트를 만든다 : 기존 컴포넌트에서 수정한다  
함수일 경우도 마찬가지라고 생각한다. 공통함수를 만들고, 파라미터와 조건을 통해서 `return`값을 다르게 만든다.
같은 값을 가지고 있는 변수는 따로 코드 관리의 `편리성`과 `가독성`을 위해서 따로 빼놓는다.  

#### `해야하는 것`
삶을 영위하면서 계속 개발을 할 것이므로, 죽기전까지 위 3가지의 해답을 찾을 것이다.  
현업에 있는 개발자들의 의견을 종합적으로 결론을 내리면, `답은 없다` 허나, 끊임없이 개발을 하다보면
언젠가는, 현실적이면서 이상적인 해답을 높은 확률로 얻을 수 있다고 가정한다.
