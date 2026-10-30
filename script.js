/* =========================================================
   script.js — 사이트의 "내용 데이터"와 "동작"을 담당하는 파일

   ✏️ 내용을 고치고 싶다면 이 파일의 1번 영역(데이터)만 수정하면 됩니다.
      - 글자 안에서 **이렇게** 감싸면 굵은 글씨가 됩니다.
      - "[여기에 입력]"이라고 적힌 곳은 아직 정보가 없는 빈칸입니다.
      - 링크가 아직 없으면 "" (빈 따옴표)로 두세요. 버튼이 회색으로 바뀌고 눌리지 않습니다.
   ========================================================= */

/* ---------------------------------------------------------
   1-1. 프로젝트 목록
   하나의 { ... } 묶음이 카드 하나입니다.
   새 프로젝트를 추가하려면 { ... } 하나를 통째로 복사해 붙인 뒤 내용만 바꾸세요.
   (묶음과 묶음 사이에는 쉼표 , 를 꼭 넣어 주세요)
   --------------------------------------------------------- */
const PROJECTS = [
  {
    badge: '논문 · 학회 은상',
    title: 'K-pop 지식 그래프 융합 LightGCN 음악 추천',
    summary: 'K-pop 멤버-그룹 관계를 지식 그래프로 만들고, 여기서 배운 "그룹 정체성"을 LightGCN 추천 모델에 순차적으로 융합한 연구입니다.',
    period: '[여기에 입력] (학회 발표 2025.11 · 한국디지털콘텐츠학회 추계종합학술대회)',
    role: '제1저자 · 데이터 수집·전처리, 모델 설계·구현·평가 전 과정',
    tags: ['PyTorch', 'LightGCN', 'GCN', 'Knowledge Graph', 'GNN', 'Recommendation System'],
    problem:
      '기존 추천 시스템은 그룹 멤버의 솔로·유닛·콜라보 활동 사이의 관계를 반영하지 못합니다. 예를 들어 그룹 멤버가 첫 솔로 앨범을 내면, 그 곡에는 아직 들은 기록이 없어서 그룹 팬의 관심을 추천에 반영하기 어렵습니다(콜드 스타트 문제: 기록이 없는 새 항목을 추천하기 어려운 문제).',
    solution: [
      '멜론 플레이리스트 데이터와 Kaggle K-pop 아이돌 데이터를 결합해 **노드 1,612개 · 멤버-그룹 엣지 1,342개**의 지식 그래프 구축',
      'GCN으로 지식 그래프를 학습해 멤버마다 소속 그룹 정보가 담긴 "그룹 정체성" 임베딩(숫자 벡터) 생성',
      '이 임베딩을 LightGCN의 초기 임베딩에 가중합으로 주입한 뒤 학습(BPR Loss)하는 **순차적 융합** 방식 제안',
    ],
    troubles: [
      {
        issue: '두 데이터셋의 아티스트 이름이 한글/영문으로 달라 서로 연결되지 않았습니다.',
        fix: '영문 활동명 변수를 추가해 이름을 통일하고, 정규화·유사도 매칭으로 **18,912곡**을 매핑했습니다.',
      },
    ],
    results: [
      'Vanilla LightGCN 대비 **NDCG@20 약 6% 향상** (0.0482 → 0.0512)',
      'Vanilla LightGCN 대비 **Recall@20 약 16% 향상** (0.1345 → 0.1560)',
      '한국디지털콘텐츠학회 추계종합학술대회 **은상** 수상 (2025.11)',
    ],
    demoUrl: '', // [여기에 입력] 논문 PDF나 발표 자료를 공개할 주소가 있다면 입력
    codeUrl: 'https://github.com/dldudwnsdlek/K-pop_LightGCN',
  },
  {
    badge: '논문 · XAI',
    title: 'CNC 가공 불량 예측 Stacking 앙상블 + XAI',
    summary: 'CNC 가공 센서 데이터로 불량품을 미리 예측하고, 세 가지 XAI 기법을 교차 검증해 불량의 핵심 원인 변수를 찾은 연구입니다.',
    period: '[여기에 입력] (학회 발표 2025.08 · 대한전자공학회 인공지능 학술대회, KCI 투고 진행 중)',
    role: '제1저자 · 모델 설계, XAI 분석 프레임워크 구축',
    tags: ['XGBoost', 'LightGBM', 'TabNet', 'Logistic Regression', 'Stacking', 'SHAP', 'KernelSHAP', 'XAI'],
    problem:
      'CNC 가공에서는 불량 검사가 주로 가공이 끝난 뒤에 이루어집니다. 공정 중에 쌓이는 센서 데이터로 불량을 미리 예측하고, 모델이 왜 불량이라고 판단했는지까지 설명하는 것이 목표였습니다.',
    solution: [
      'KAMP(한국 AI 제조 플랫폼)의 CNC 가공 데이터 **48개 변수 · 32,046건** 사용, 결측값 보간·스케일링·불용 변수 제거(48 → 44개)',
      'XGBoost · LightGBM · TabNet을 1단계로, 로지스틱 회귀를 2단계로 쌓은 **Stacking 앙상블**(여러 모델의 예측을 다시 합치는 방식) 설계',
      'SHAP · TabNet Attention Mask · KernelSHAP **세 가지 XAI 기법을 교차 검증**해 핵심 변수 도출',
    ],
    troubles: [
      {
        issue: '불량 데이터가 정상 데이터보다 훨씬 적은 클래스 불균형 문제가 있었습니다.',
        fix: 'SMOTE + ADASYN 복합 오버샘플링(적은 쪽 데이터를 인공적으로 늘리는 방법)을 적용하고, 5-fold 교차검증으로 과적합과 편향을 막았습니다.',
      },
    ],
    results: [
      'Stacking 모델 **F1-score 0.9546**',
      '선행 연구 DNN 모델 Accuracy 0.9151 대비 **0.9735**',
      '세 XAI 분석 모두에서 **G-code 라인 번호(M_sequence_number)와 전류·전력 관련 변수**가 핵심 인자로 확인됨',
    ],
    demoUrl: '', // [여기에 입력]
    codeUrl: 'https://github.com/dldudwnsdlek/CNC',
  },
  {
    badge: '캡스톤 디자인',
    title: '감정 기반 사용자 맞춤형 영화 추천',
    summary: 'Amazon 영화 리뷰에서 DistilBERT로 감정을 뽑아내고, 이를 NCF 추천 모델에 결합해 감정 맥락까지 반영하는 추천 시스템입니다.',
    period: '[여기에 입력]',
    role: '데이터 전처리 파이프라인 설계, DistilBERT 감정 분류, NCF 모델 통합 및 평가',
    tags: ['TensorFlow', 'DistilBERT', 'Hugging Face Transformers', 'NCF', 'NLTK', 'TF-IDF', 'Pandas', 'scikit-learn'],
    problem:
      '기존 협업 필터링은 평점만 사용하기 때문에, 리뷰 글에 담긴 사용자의 미묘한 감정과 선호를 추천에 반영하지 못합니다.',
    solution: [
      '약 **791만 건**의 원본 리뷰를 10만 건 단위 청크 80개로 나눠 처리하는 파이프라인 구축 → 정제 후 약 126만 건',
      'NLTK로 토큰화·불용어 제거·표제어 추출, 사전학습 DistilBERT로 리뷰마다 감정 라벨 부여',
      'NCF(신경망 기반 협업 필터링)에 감정 · 장르 · 제목 임베딩을 함께 넣는 하이브리드 모델 구현',
    ],
    troubles: [
      {
        issue: '감정 라벨의 약 88%가 "즐거움"으로 쏠렸습니다. 감정 모델이 트위터 데이터로 학습되어 영화 리뷰와 성격이 달랐기 때문입니다.',
        fix: '샘플링은 데이터 누수 등의 문제가 있어 대신 "즐거움"을 유머러스·감탄 등으로 세분화했고, 비율을 **88% → 약 40%**로 낮췄습니다.',
      },
      {
        issue: '훈련 정확도(88~90%)와 검증 정확도(68%)의 차이가 큰 과적합이 생겼습니다.',
        fix: 'Dropout · EarlyStopping · BatchNorm · L2 정규화를 단계적으로 적용하고, 같은 사용자가 훈련/검증에 섞이지 않게 나눠 데이터 누수를 막았습니다.',
      },
    ],
    results: [
      '과적합 개선 후 **F1 0.6863 → 0.7882 (+14.8%)**, **Precision 0.6523 → 0.8412 (+29.0%)**',
      '최종 Accuracy 0.7134, **Hit Rate@10 0.667**',
    ],
    demoUrl: '', // [여기에 입력]
    codeUrl: 'https://github.com/dldudwnsdlek/Amazon_sentiment_analysis',
  },
  {
    badge: 'RAG · 배포',
    title: '개인채무조정 상담 챗봇 (RAG)',
    summary: '공식 채무조정 제도 자료로 직접 만든 지식 문서를 검색해 답하는 상담 챗봇으로, 금융 취약계층의 제도 접근성을 높이려 했습니다.',
    period: '[여기에 입력]',
    role: 'Streamlit 배포를 제외한 RAG 파이프라인 전체 구현',
    tags: ['LangChain', 'ChromaDB', 'OpenAI API (GPT-4o-mini)', 'Streamlit', 'PyPDFLoader'],
    problem:
      '채무조정 제도는 종류와 필요 서류 안내가 부족하고 절차가 복잡해서, 도움이 필요한 사람이 알맞은 신청 시기를 놓치는 경우가 많습니다.',
    solution: [
      '공식 채무조정 제도 자료를 모아 정리한 **지식 문서 2종(20쪽 / 46쪽)**을 직접 제작',
      'PDF 로드 → 청크 분할(1,000자) → OpenAI 임베딩 → ChromaDB 저장으로 검색용 데이터베이스 구축 (RAG: 관련 문서를 먼저 찾아 AI 답변의 근거로 쓰는 방식)',
      '이전 대화 맥락을 반영해 질문을 다시 구성하는 검색기와 대화 기록 기능으로 연속 질문에도 문맥을 유지',
    ],
    troubles: [
      {
        issue: '20쪽 ↔ 46쪽 문서를 바꿔 가며 실험하자, 벡터DB에 46쪽 정보가 남아 있어 결과가 비슷하게 나왔습니다.',
        fix: '원인을 확인한 뒤 두 버전을 모두 유지하는 이원화 전략을 택했습니다.',
      },
      {
        issue: 'Output Parser로 답변을 정해진 형식으로 출력하려 했지만, 상담 상황이 다양해 고정 형식을 적용하기 어려웠습니다.',
        fix: '향후 채무·자산·소득 등 기본 정보 입력 기능과 구조화된 상담 결과 출력으로 고도화할 계획입니다.',
      },
    ],
    results: [
      'gpt-4o-mini · 신용회복위원회 공식 챗봇 · 20쪽 버전 · 46쪽 버전 **4종을 같은 질문으로 비교**한 결과, 46쪽 버전이 더 간결하고 정확한 핵심 답변 제공',
      'Streamlit으로 웹 챗봇 배포',
    ],
    // 데모 주소 출처: GitHub 저장소(Rank_Up) README
    demoUrl: 'https://rankup-x7mg748kbfbjghcddawzmv.streamlit.app/',
    codeUrl: 'https://github.com/dldudwnsdlek/Rank_Up',
  },
];

/* ---------------------------------------------------------
   1-2. 기술 목록 (분야: [기술들])
   --------------------------------------------------------- */
const SKILLS = [
  { group: '언어 · 환경', items: ['Python', 'Git', 'Google Colab'] },
  { group: '추천 · 딥러닝', items: ['PyTorch', 'TensorFlow', 'LightGCN', 'GCN', 'NCF', 'AutoInt'] },
  { group: '머신러닝', items: ['scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'Random Forest', 'TabNet', 'SMOTE'] },
  { group: 'XAI', items: ['SHAP', 'KernelSHAP', 'TabNet Attention Mask'] },
  { group: 'NLP · LLM', items: ['Hugging Face Transformers', 'DistilBERT', 'NLTK', 'LangChain', 'ChromaDB', 'OpenAI API', 'GPTQ (LLM Compressor)', 'vLLM'] },
  { group: '데이터 · 시각화 · 배포', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'PyQt5', 'Streamlit'] },
];

/* ---------------------------------------------------------
   1-3. 경력 · 교육 · 활동 타임라인 (최신순)
   kind: 작은 꼬리표 / link: 관련 링크가 있으면 { text, url }
   --------------------------------------------------------- */
const TIMELINE = [
  {
    date: '[여기에 입력]',
    kind: '교육',
    title: '삼성 청년 SW·AI 아카데미(SSAFY) 16기',
    desc: '',
  },
  {
    date: '2026.02.26',
    kind: '교육',
    title: 'LG Aimers 8기 수료',
    desc: 'EXAONE-4.0-1.2B 모델 GPTQ(W4A16) 양자화 경량화, 캘리브레이션 데이터 비율 실험으로 최적 비율 도출',
  },
  {
    date: '2025.11.07',
    kind: '수상',
    title: '한국디지털콘텐츠학회 추계종합학술대회 은상',
    desc: 'K-pop 지식 그래프 융합 LightGCN 음악 추천 연구 (제1저자)',
  },
  {
    date: '2025.08.07',
    kind: '발표',
    title: '대한전자공학회 2025 전자·반도체·인공지능 학술대회',
    desc: 'CNC 가공 불량 예측 Stacking 앙상블 + XAI 연구 발표 (제1저자)',
  },
  {
    date: '2024.10.07 ~ 2025.04.01',
    kind: '교육',
    title: 'AI 학교 아이펠 데이터사이언티스트 과정 3기 수료',
    desc: '',
  },
  {
    date: '[여기에 입력]',
    kind: '학력',
    title: '강남대학교 경영학과 / 데이터사이언스전공',
    desc: '학점 3.92',
    link: { text: '학점 대시보드 보기', url: 'https://dldudwnsdlek.github.io/GPA_DashBoard/' },
  },
];

/* ---------------------------------------------------------
   1-4. 봉사활동
   --------------------------------------------------------- */
const VOLUNTEER = [
  '사회활동지원 (서울랜드, 사회적응훈련)',
  '제17회 종로청계관광특구 육의전 축제 행사보조',
  '용인녹색환경연합 주관 환경 정화 활동',
  '지구촌사회복지재단 경영 지원팀 · 수익사업팀 업무보조',
];


/* =========================================================
   2. 화면 만들기 (아래부터는 보통 고칠 필요가 없습니다)
   ========================================================= */

/* 글자 안의 특수문자를 안전하게 바꾸고, **굵게** 와 [여기에 입력] 표시를 처리 */
function format(text) {
  const safe = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return safe
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[여기에 입력\]/g, '<span class="placeholder">[여기에 입력]</span>');
}

/* 링크 버튼 하나 만들기 — 주소가 비어 있으면 누를 수 없는 회색 버튼 */
function linkButton(label, url, primary) {
  if (!url) {
    return `<span class="btn is-disabled" aria-disabled="true" title="링크 준비 중">${label} <small>(준비 중)</small></span>`;
  }
  return `<a class="btn${primary ? ' btn--primary' : ''}" href="${url}" target="_blank" rel="noopener">${label}
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg></a>`;
}

/* 프로젝트 카드들 그리기 */
function renderProjects() {
  const box = document.querySelector('[data-projects]');
  if (!box) return;

  box.innerHTML = PROJECTS.map((p) => `
    <article class="project">
      ${p.badge ? `<span class="project__badge">${format(p.badge)}</span>` : ''}
      <h3 class="project__title">${format(p.title)}</h3>
      <p class="project__summary">${format(p.summary)}</p>

      <dl class="project__meta">
        <div><dt>기간</dt><dd>${format(p.period)}</dd></div>
        <div><dt>내 역할</dt><dd>${format(p.role)}</dd></div>
      </dl>
      <ul class="tags" aria-label="사용 기술">
        ${p.tags.map((t) => `<li class="tag">${format(t)}</li>`).join('')}
      </ul>

      <div class="story">
        <div>
          <h4>문제</h4>
          <p>${format(p.problem)}</p>
        </div>
        <div>
          <h4>해결</h4>
          <ul>${p.solution.map((s) => `<li>${format(s)}</li>`).join('')}</ul>
          ${p.troubles.map((t) => `
            <div class="trouble">
              <p><b>막힌 점</b> · ${format(t.issue)}</p>
              <p><b>해결</b> · ${format(t.fix)}</p>
            </div>`).join('')}
        </div>
        <div>
          <h4>결과</h4>
          <ul>${p.results.map((r) => `<li>${format(r)}</li>`).join('')}</ul>
        </div>
      </div>

      <div class="project__links">
        ${linkButton('데모 보기', p.demoUrl, true)}
        ${linkButton('코드 보기 (GitHub)', p.codeUrl, false)}
      </div>
    </article>
  `).join('');
}

/* 기술 목록 그리기 */
function renderSkills() {
  const box = document.querySelector('[data-skills]');
  if (!box) return;
  box.innerHTML = SKILLS.map((s) => `
    <div class="skill-group">
      <h3>${format(s.group)}</h3>
      <ul class="tags">${s.items.map((i) => `<li class="tag">${format(i)}</li>`).join('')}</ul>
    </div>
  `).join('');
}

/* 타임라인 그리기 */
function renderTimeline() {
  const box = document.querySelector('[data-timeline]');
  if (box) {
    box.innerHTML = TIMELINE.map((t) => `
      <li class="timeline__item">
        <span class="timeline__date">${format(t.date)}</span>
        <span class="timeline__kind">${format(t.kind)}</span>
        <h3 class="timeline__title">${format(t.title)}</h3>
        ${t.desc ? `<p class="timeline__desc">${format(t.desc)}</p>` : ''}
        ${t.link ? `<p class="timeline__desc"><a href="${t.link.url}" target="_blank" rel="noopener">${format(t.link.text)} ↗</a></p>` : ''}
      </li>
    `).join('');
  }

  const vol = document.querySelector('[data-volunteer]');
  if (vol) vol.innerHTML = VOLUNTEER.map((v) => `<li>${format(v)}</li>`).join('');
}

/* =========================================================
   3. 다크 / 라이트 테마 전환 버튼
   ========================================================= */
function setupThemeToggle() {
  const button = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  // 버튼 설명 문구와 모바일 상단바 색을 현재 테마에 맞게 갱신
  function sync() {
    const isDark = root.getAttribute('data-theme') !== 'light';
    button.setAttribute('aria-label', isDark ? '라이트 모드로 바꾸기' : '다크 모드로 바꾸기');
    if (themeColor) themeColor.setAttribute('content', isDark ? '#16171b' : '#f7f4ee');
  }

  button.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* 저장 못 해도 전환은 됨 */ }
    sync();
  });

  sync();
}

/* =========================================================
   4. 지금 보고 있는 영역의 메뉴를 강조 표시
   ========================================================= */
function setupActiveMenu() {
  const links = [...document.querySelectorAll('.nav a')];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;

  // id에 해당하는 메뉴만 강조하고 나머지는 강조 해제
  function highlight(id) {
    links.forEach((a) => {
      const on = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) highlight(entry.target.id);
    });
  }, { rootMargin: '-35% 0px -60% 0px' }); // 화면 위쪽 1/3 지점을 지나는 영역을 "현재 영역"으로 봄

  sections.forEach((s) => observer.observe(s));

  // 맨 아래 영역(연락처)은 위쪽까지 올라오지 못하므로, 페이지 끝에 닿으면 마지막 메뉴를 강조
  window.addEventListener('scroll', () => {
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom && sections.length) highlight(sections[sections.length - 1].id);
  }, { passive: true });
}

/* =========================================================
   5. 실행 — 페이지가 준비되면 위 기능들을 차례로 실행
   ========================================================= */
renderProjects();
renderSkills();
renderTimeline();
setupThemeToggle();
setupActiveMenu();

const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();
