# Karam — 테라리움 스튜디오

> 자연을 들여오는 창 — 작은 유리 프레임 안에 자연을 담아 일상 속으로.

카람(Karam) 브랜드 웹사이트입니다. 스튜디오에서 만든 디자인 시안(`design/` 폴더의
`dc-runtime` 프로토타입)을 실제 배포 가능한 **Next.js** 웹사이트로 발전시킨 결과물입니다.

## 화면 구성

| 경로     | 화면        | 내용                                          |
| -------- | ----------- | --------------------------------------------- |
| `/`      | 홈          | 히어로 비주얼 · KARAM 워드마크 · 브랜드 태그라인 |
| `/about` | 브랜드 소개 | 브랜드 스토리 · 핵심 가치 3종                  |
| `/shop`  | 제품        | 6종 테라리움 · 장바구니 담기 인터랙션         |

- **장바구니**는 React Context로 전역 관리되며 `localStorage`에 저장되어 페이지를 옮겨도 유지됩니다.
- 원본 시안의 컬러·타이포(Noto Sans KR, Song Myung)·레이아웃을 충실히 재현했고, 모바일까지 반응형으로 동작합니다.

## 디자인 에셋 안내

원본 저장소에는 `assets/hero-terrarium.png`, `assets/karam-ink-trim.png`(로고)가 포함되어
있지 않아, 자체 제작한 **SVG 일러스트(유리 돔 테라리움)** 와 **세리프 워드마크**로 대체했습니다.
실제 사진/로고가 준비되면 `app/components/TerrariumScene.tsx`, `app/components/Wordmark.tsx`를
교체해 손쉽게 반영할 수 있습니다.

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
