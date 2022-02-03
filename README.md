# 정호랑(정이 많은 호랑이)
## 부담없이 소통할 수 있는 익명 메신저 앱
[Back-end](https://github.com/jeonghorang/2022_flow_assign3_backend_public)

## A. 개발 팀원  
- 한양대 컴퓨터소프트웨어학부 [이수정](https://github.com/SooJ2)
- 성균관대 소프트웨어학과 [이현정](https://github.com/hyunjeong408)
- 숙명여대 컴퓨터과학전공 [최윤정](https://github.com/letmeloveyou82)

## B. 개발 환경
- OS: Android, IOS
- Language: JavaScript
- Front-end : React Native Expo
- Back-end : Node.js Express
- Database : MongoDB
- IDE: VS Code

## C. 기본 구조

<img src="https://user-images.githubusercontent.com/65072995/149900747-9c608ce2-875f-4f20-8c7d-bdebaddd8767.png"  width="600" height="450"/>

* Splash Screen
* Login Screen
  * GoogleSignIn : Google 소셜 로그인 기능

## D. Tab
### Tab 1. Home
- 유저의 복주머니
- 유저의 복주머니 편지 조회
- 본인 복주머니인 경우: 복주머니 편지 답장 (쪽지)
- 타인 복주머니인 경우: 복주머니 편지 작성
<img src="https://user-images.githubusercontent.com/64190044/149932814-58e11784-1008-4ce8-8e41-d7dbdecf687f.jpeg"/>


### Tab 2. Message
- 받은쪽지: 다른 유저가 나에게 보낸 쪽지 + 답장
- 보낸쪽지: 내가 다른 유저에게 보낸 쪽지
<img src="https://user-images.githubusercontent.com/64190044/149932867-20d7357c-7195-45c4-b154-e18fe8f4b8b6.jpeg"/>
     
     
### Tab 3. Setting
- 다른 유저 검색
- 본인 닉네임 변경
- 로그아웃
## E. Reference
<details>
<summary>Packages</summary>
<div markdown="1">       
  <ul>
    <li>@react-native-community/masked-view: "^0.1.11"</li>
    <li>@react-native-masked-view/masked-view: "^0.2.6"</li>
    <li>@react-navigation/bottom-tabs: "^6.0.9"</li>
    <li>@react-navigation/native: "^6.0.6"</li>
    <li>@react-navigation/native-stack: "^6.2.5"</li>
    <li>@react-navigation/stack: "^6.0.11"</li>
    <li>expo: "~44.0.0"</li>
    <li>expo-font: "~10.0.4"</li>
    <li>expo-google-app-auth: "~8.3.0"</li>
    <li>expo-splash-screen: "~0.14.1"</li>
    <li>expo-status-bar: "~1.2.0"</li>
    <li>lottie-react-native: "^5.0.1"</li>
    <li>react: "17.0.1"</li>
    <li>react-dom: "17.0.1"</li>
    <li>react-native: "0.64.3"</li>
    <li>react-native-gesture-handler: "~2.1.0"</li>
    <li>react-native-keyboard-aware-scroll-view: "^0.9.5"</li>
    <li>react-native-reanimated: "^2.3.1"</li>
    <li>react-native-safe-area-context: "^3.3.2"</li>
    <li>react-native-screens: "~3.10.1"</li>
    <li>react-native-simple-modal: "^9.0.1"</li>
    <li>react-native-status-bar-height: "^2.6.0"</li>
    <li>react-native-vector-icons: "^9.0.0"</li>
    <li>react-native-web: "0.17.1"</li>
    <li>react-navigation-stack: "^2.10.4"</li>
    <li>expo-blur: "~11.0.0"</li>
    <li>@types/react-native-vector-icons: "^6.4.10"</li>
  </ul>

</div>
</details>
<details>
<summary>Fonts</summary>
<div markdown="1">       
  <ul>
    <li>솔뫼 김대건체</li>
    <li>고운바탕체</li>
    <li>을지로체</li>
  </ul>
</div>
</details>
<details>
<summary>Library</summary>
<div markdown="1">       
  <ul>
    <li>Mongoose</li>
  </ul>
</div>
</details>
