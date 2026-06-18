# Karam — 테라리움 스튜디오

> 자연을 들여오는 창 — 작은 유리 프레임 안에 자연을 담아 일상 속으로.

가람(Karam) 브랜드 웹사이트입니다. 스튜디오에서 만든 디자인 시안(`design/` 폴더의
`dc-runtime` 프로토타입)을 실제 배포 가능한 **Next.js** 웹사이트로 발전시킨 결과물입니다.

## 화면 구성

| 경로     | 화면        | 내용                                          |
| -------- | ----------- | --------------------------------------------- |
| `/`        | 홈          | 풀스크린 사진 히어로 + 대형 KARAM 워드마크 → 스크롤 시 카탈로그·브랜드 섹션 |
| `/about`   | 브랜드 소개 | 브랜드 스토리 · 핵심 가치 3종 · 실사진                |
| `/shop`    | 제품        | 번호가 매겨진 6종 테라리움 그리드 (에디토리얼)        |
| `/shop/[id]` | 제품 상세 | 갤러리 · 가격 · 장바구니 담기 · 접이식 설명/관리 정보 |

- **장바구니**는 React Context로 전역 관리되며 `localStorage`에 저장되어 페이지를 옮겨도 유지됩니다.
- **반응형**: 데스크탑은 대형 워드마크 히어로, 모바일은 사진 위 중앙 로고 + 슬라이드 메뉴로 전환됩니다.
- 레이아웃은 에디토리얼 커머스 레퍼런스(ÉRRA ATELIER, Here&Away)를 참고해 가람의 차분한 톤으로 재구성했습니다.

## 디자인 에셋

- `public/hero.png` — 홈 히어로 메인 사진
- `public/scene-wood.png`, `public/scene-black.png` — 공간 연출 서브 사진
- 로고는 `app/components/KaramMark.tsx`에서 **투명 배경 SVG**로 재현(어떤 배경/색에도 사용 가능)
- 폰트는 Noto Sans KR + Song Myung(세리프)

제품별 실사진이 준비되면 `app/data/products.ts`의 `image` 필드만 교체하면 됩니다.

## 기술 스택

- [Next.js 15](https://nextjs.org/) (App Router)
- React 18 · TypeScript
- CSS Modules + 디자인 토큰 (`app/globals.css`)
- `next/font` 로 Google Fonts 최적화 로딩

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
```

빌드 / 프로덕션 실행:

```bash
npm run build
npm start
```

## 배포

Vercel에 그대로 배포할 수 있습니다. 저장소를 import 하면 별도 설정 없이 빌드됩니다.

## 디렉터리 구조

```
app/
  layout.tsx              # 루트 레이아웃 · 폰트 · 헤더 · 장바구니 Provider
  page.tsx                # 홈
  about/page.tsx          # 브랜드 소개
  shop/                   # 제품 (page + ProductGrid 클라이언트 컴포넌트)
  components/             # 헤더 · 워드마크 · 테라리움 SVG · 장바구니 Context
  data/products.ts        # 제품 데이터
design/                   # 원본 디자인 시안 (dc-runtime 프로토타입) — 참고용 보존
```
