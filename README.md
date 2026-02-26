# 📑 Dear mood (감정 일기장)

> **오늘의 감정을 기록하고 시각적으로 회고하는 다이어리 서비스**
> 
> 🔗 [Dear Mood 바로가기](https://dear-mood.vercel.app/ "감정 일기장")

---

## 🌟 프로젝트 소개 (Project Overview)
 **Dear mood**는 단순히 글을 기록하는 것을 넘어,

 그날의 감정을 아이콘으로 시각화하여 한눈에 나의 심리 상태를 돌아볼 수 있도록 돕는 웹 애플리케이션입니다.

 프런트엔드 개발자로서 React의 핵심 기능을 활용하여 일상적인 도구를 구현해 보았습니다.

---

## 🚀 주요 기능 (Key Features)
* **감정 기반 CRUD**: 5단계 감정 아이콘 중 하나를 선택하여 일기를 작성, 수정, 삭제할 수 있습니다.
* **스마트 필터링**: 날짜순(최신/오래된순) 및 감정별 필터링을 통해 원하는 기록을 빠르게 조회합니다.
* **월별 아카이브**: 월별 일기 리스트 보기와 페이지네이션을 통해 기록을 체계적으로 관리합니다.
* **데이터 지속성**: `localStorage`를 활용하여 새로고침 시에도 데이터가 안전하게 유지됩니다.

---

## 🛠 기술 스택 (Tech Stack)

### 💻 개발 환경 (Development)
* **언어:** JavaScript (ES6+)
* **라이브러리:** React
* **스타일링:** CSS3

### ⚙️ 도구 및 배포 (Tools & Deployment)
* **버전 관리:** Git, GitHub
* **개발 도구:** VS Code
* **배포:** Vercel

---

## 📂 프로젝트 구조 (Project Structure)

```text
src/
 ┣ 📂 components  # 재사용 가능한 공통 컴포넌트 (Button, Header, Editor 등)
 ┣ 📂 pages       # 페이지 단위 컴포넌트 (Home, New, Edit, Diary)
 ┣ 📂 hooks       # 로직 분리를 위한 커스텀 훅
 ┣ 📂 util        # 공통 함수 및 상수 (날짜 포맷팅, 감정 데이터 등)
 ┣ 📜 App.js      # 메인 로직 및 라우팅 설정
 ┗ 📜 index.js    # 앱 엔트리 포인트 (진입점)
```

## 💻 실행 방법 (Getting Started)
### 저장소 클론 (Clone)
```
git clone https://github.com/2JoongHo/dear_mood.git
```
### 의존성 설치 (Install)
```
npm install
```
### 로컬 실행 (Run)
```
npm start
```

