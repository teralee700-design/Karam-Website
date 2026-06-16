export type Product = {
  id: string;
  num: string;
  name: string;
  price: number;
  tint: string;
  blurb: string;
};

/** Format a KRW amount the way the original design did: "₩128,000" */
export function formatPrice(won: number): string {
  return "₩" + won.toLocaleString("ko-KR");
}

export const products: Product[] = [
  {
    id: "p1",
    num: "01",
    name: "이끼 언덕",
    price: 128000,
    tint: "#e7dfd2",
    blurb: "완만한 곡선 위로 자생 이끼가 층층이 자라는 기본형 테라리움.",
  },
  {
    id: "p2",
    num: "02",
    name: "마른 정원",
    price: 96000,
    tint: "#e0d0ba",
    blurb: "물을 적게 주어도 균형을 유지하는 건식 구성의 작은 정원.",
  },
  {
    id: "p3",
    num: "03",
    name: "고사리 숲",
    price: 152000,
    tint: "#cbd2c0",
    blurb: "천천히 잎을 펼치는 고사리로 채운 깊고 푸른 풍경.",
  },
  {
    id: "p4",
    num: "04",
    name: "돌의 뜰",
    price: 134000,
    tint: "#e3dbce",
    blurb: "이끼와 돌이 이루는 여백, 절제된 선의 정물.",
  },
  {
    id: "p5",
    num: "05",
    name: "이끼 구체",
    price: 112000,
    tint: "#d3c4ae",
    blurb: "둥근 유리 안에 담긴 한 점의 이끼, 손바닥 위의 자연.",
  },
  {
    id: "p6",
    num: "06",
    name: "모래 언덕",
    price: 88000,
    tint: "#d8dad1",
    blurb: "고운 모래의 결을 따라 흐르는 가장 가벼운 풍경.",
  },
];
