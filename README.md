# 이영준 포트폴리오 웹사이트

프레임워크 없이 HTML · CSS · JavaScript만으로 만든 한 페이지짜리 포트폴리오입니다.
내용은 모두 노션 페이지 [Joon'space](https://app.notion.com/p/Joon-space-18740dcc6aea80e1ba89f9c60dccf0d3)를 바탕으로 했습니다.

---

## 1. 파일별 역할

| 파일 | 하는 일 |
| --- | --- |
| `index.html` | 페이지의 **뼈대**입니다. 이름·직함·한 줄 소개·버튼·메뉴·소개글·연락처가 직접 적혀 있고, 검색/공유용 정보(title, description, 미리보기 태그)도 여기에 있습니다. |
| `style.css` | 페이지의 **모양**입니다. 색, 글꼴, 여백, PC/모바일 배치를 정합니다. 맨 위에 색상이 모여 있습니다. |
| `script.js` | **내용 데이터 + 동작**입니다. 맨 위에 프로젝트·기술·타임라인·봉사활동 목록이 있고, 아래쪽은 그 목록으로 화면을 그리고 테마 전환·메뉴 강조를 하는 코드입니다. |
| `assets/profile.webp`, `assets/profile.jpg` | 프로필 사진. 작게 줄여 두었습니다(약 6KB / 14KB). webp를 못 여는 브라우저는 jpg를 씁니다. |
| `assets/og-image.jpg` | 카카오톡·슬랙 등에 링크를 붙였을 때 뜨는 미리보기 이미지(1200×630). |
| `assets/favicon.svg` | 브라우저 탭에 보이는 작은 아이콘. |

> **용어 풀이**
> - **반응형**: 화면 크기(PC/태블릿/휴대폰)에 맞춰 배치가 알아서 바뀌는 것
> - **og 태그**: 링크를 공유할 때 미리보기 카드에 들어갈 제목·설명·이미지를 알려 주는 정보
> - **배포**: 내 컴퓨터에만 있는 사이트를 인터넷 주소로 누구나 볼 수 있게 올리는 것

---

## 2. 내 정보와 프로젝트를 수정하는 방법

### 이름 · 직함 · 한 줄 소개 · 소개글 · 연락처
`index.html`을 열고 해당 글자를 찾아 바꾸면 됩니다. (예: `예비 데이터 사이언티스트` 검색)

### 이력서 PDF 버튼 켜기
1. 이력서 파일 이름을 `resume.pdf`로 바꿔 `assets` 폴더에 넣습니다.
2. `index.html`에서 `data-resume`이 붙은 줄을 찾아 아래처럼 바꿉니다.
   ```html
   <!-- 바꾸기 전 -->
   <a class="btn is-disabled" aria-disabled="true" title="이력서 PDF 준비 중" data-resume>
   <!-- 바꾼 후 -->
   <a class="btn" href="assets/resume.pdf" target="_blank" rel="noopener" data-resume>
   ```

### 프로젝트 고치기 · 추가하기
`script.js` 맨 위의 `PROJECTS` 목록만 고치면 됩니다.

```js
{
  badge: '논문 · 학회 은상',          // 카드 위 작은 꼬리표 (없으면 '')
  title: '프로젝트 이름',
  summary: '한 줄 요약',
  period: '2025.03 ~ 2025.06',        // 기간
  role: '내가 맡은 역할',
  tags: ['Python', 'PyTorch'],        // 사용 기술 태그
  problem: '어떤 문제를 풀려고 했는지',
  solution: ['어떻게 풀었는지 1', '어떻게 풀었는지 2'],
  troubles: [                          // 막혔던 점과 해결 (여러 개 가능)
    { issue: '막힌 점', fix: '해결 방법' },
  ],
  results: ['결과 1', '결과 2'],
  demoUrl: '',                         // 데모 주소 (없으면 '' → 회색 버튼)
  codeUrl: 'https://github.com/...',   // GitHub 주소
},
```

- 새 프로젝트를 넣으려면 `{ ... },` 묶음 하나를 통째로 복사해 붙이고 내용만 바꾸세요.
- 순서를 바꾸면 화면에 보이는 순서도 바뀝니다.
- 글자를 `**이렇게**` 감싸면 **굵은 글씨**가 됩니다.
- `[여기에 입력]`은 정보가 아직 없는 빈칸이라 화면에 기울어진 강조색으로 보입니다. 채워 넣으면 사라집니다.

### 기술 · 타임라인 · 봉사활동
같은 파일(`script.js`)의 `SKILLS`, `TIMELINE`, `VOLUNTEER` 목록을 같은 방식으로 고치면 됩니다.

### 색 바꾸기
`style.css` 맨 위의 `--accent`(강조색), `--bg`(배경색) 값을 바꾸면 사이트 전체에 적용됩니다.
다크 모드는 `[data-theme="dark"]`, 라이트 모드는 `[data-theme="light"]` 아래에 있습니다.

### 내 컴퓨터에서 미리 보기
`index.html` 파일을 더블클릭하면 브라우저에서 바로 열립니다.

---

## 3. 무료로 배포하기

### 방법 A. GitHub Pages (추천)

1. GitHub에 로그인하고 이 저장소(`portfolio`)로 들어갑니다.
2. 상단 **Settings** → 왼쪽 메뉴 **Pages**를 누릅니다.
3. **Build and deployment** → **Source**를 `Deploy from a branch`로 둡니다.
4. **Branch**에서 사이트 파일이 있는 브랜치(예: `main`)와 폴더 `/ (root)`를 고르고 **Save**를 누릅니다.
5. 1~2분 뒤 같은 화면 위쪽에 `https://dldudwnsdlek.github.io/portfolio/` 같은 주소가 나타납니다. 그 주소가 내 사이트입니다.
6. `index.html`의 `og:url`, `og:image` 주소가 실제 주소와 같은지 확인하세요. (다르면 고쳐서 다시 올리기)

> 지금 작업한 파일은 `claude/zealous-tesla-exnjqr` 브랜치에 있습니다. 이 브랜치를 `main`에 합친(merge) 뒤 `main`을 고르거나, 4단계에서 이 브랜치를 바로 골라도 됩니다.

### 방법 B. Netlify

1. [netlify.com](https://www.netlify.com)에 GitHub 계정으로 가입/로그인합니다.
2. **Add new site** → **Import an existing project** → **GitHub**를 누르고 `portfolio` 저장소를 고릅니다.
3. **Branch to deploy**에서 사이트 파일이 있는 브랜치를 고릅니다.
4. **Build command**는 비워 두고, **Publish directory**는 `.`(점 하나, 현재 폴더)로 둡니다.
5. **Deploy**를 누르면 `https://어떤-이름.netlify.app` 주소가 생깁니다. **Site configuration → Change site name**에서 주소 앞부분을 바꿀 수 있습니다.
6. 주소가 정해지면 `index.html`의 `og:url`, `og:image`를 그 주소로 바꿔 다시 올립니다.

> 더 쉬운 방법: Netlify 대시보드의 **Sites** 화면에 이 폴더를 통째로 끌어다 놓아도(drag & drop) 바로 배포됩니다. 다만 이렇게 하면 GitHub에 올려도 자동 갱신이 되지 않습니다.
