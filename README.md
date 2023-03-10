# 원티드 프리온보딩 6팀 2주차 과제

## 📝 과제 소개 및 목적

> TravelTech 스타트업 '라이크어로컬'의 기업과제로 여행 상품 목록과 장바구니를 구현하며 모범사례 도출과 동료학습을 목적으로 했습니다.

<br/>
<br/>



# 🛠️ 기술 스택
![CRA](https://img.shields.io/badge/CRA-09D3AC?style=for-the-badge&logo=React)
![ReduxToolkit](https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=fff)
![React-router](https://img.shields.io/badge/REACT--ROUTER--DOM-343a40?style=for-the-badge&logo=ReactRouter&logoColor=CA4245)
<br/>
![Chakra-UI](https://img.shields.io/badge/Chakra-UI-319795?style=for-the-badge&logo=Chakra-UI)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=fff)

<br/>
<br/>


## 📂 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📂ModalContents
 ┃ ┃ ┃ ┗ 📜ProductDetail.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂ProductCard
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂ProductFilter
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂ProductList
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜NavBar.jsx
 ┃ ┣ 📜Payment.jsx
 ┃ ┣ 📜ReservedProduct.jsx
 ┃ ┗ 📜ReservedProductList.jsx
 ┣ 📂constants
 ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┃ ┣ 📜index.js
 ┃ ┣ 📜useModal.js
 ┃ ┗ 📜useProduct.js
 ┣ 📂pages
 ┃ ┣ 📜index.js
 ┃ ┣ 📜MainPage.jsx
 ┃ ┗ 📜ReservationsPage.jsx
 ┣ 📂router
 ┃ ┗ 📜index.js
 ┣ 📂store
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜categorySlice.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜modalSlice.js
 ┃ ┃ ┣ 📜productSlice.js
 ┃ ┃ ┗ 📜reservationSlice.js
 ┃ ┗ 📜index.js
 ┣ 📂styles
 ┃ ┗ 📜index.css
 ┣ 📂utils
 ┃ ┗ 📜index.js
 ┣ 📜App.js
 ┗ 📜index.js
```

<br/>
<br/>


## 🚀 요구사항

- `/main` 페이지
    - [x] 사용자의 방문시 `/`으로부터 리다이렉트
    - [x] 여행 상품 목록 출력
    - [x] 예약 버튼 클릭시 장바구니에 상품 데이터 저장
    - [x] 여행 상품 정보 클릭 시 모달창으로 상세 정보 표시
    - [x] 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터링
    
        - [x] 개별 필터링, 다중 필터링
        - [x] 예시) [0 ~ 3000] 또는 [서울, 부산] 또는 [0 ~ 3000] && [서울, 부산]
      <br/>
- `/reservations` 페이지
    - [x] 예약한 여행 상품 목록 출력
    - [x] 예약한 상품 삭제
    - [x] 여행 상품의 구매 수량 변경 가능
    - [x] 장바구니 여행 상품의 총 결제액수 계산 및 표시

<br/>
<br/>
