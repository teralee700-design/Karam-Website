export type Product = {
  id: string;
  num: string;
  name: string;
  price: number;
  tint: string;
  image: string;
  blurb: string;
  description: string;
  details: string[];
  care: string[];
};

/** Format a KRW amount the way the original design did: "₩128,000" */
export function formatPrice(won: number): string {
  return "₩" + won.toLocaleString("ko-KR");
}

const HERO = "/hero.png";
const WOOD = "/scene-wood.png";
const BLACK = "/scene-black.png";

export const products: Product[] = [
  {
    id: "p1",
    num: "01",
    name: "이끼 언덕",
    price: 128000,
    tint: "#e7dfd2",
    image: WOOD,
    blurb: "완만한 곡선 위로 자생 이끼가 층층이 자라는 기본형 테라리움.",
    description:
      "완만한 언덕의 곡선을 따라 자생 이끼가 층층이 자랍니다. 시간이 지날수록 결이 짙어지며, 유리 안에서 스스로 균형을 찾아가는 가장 기본적인 풍경입니다.",
    details: ["사각 유리 큐브 · 12cm", "자생 이끼 · 화산석 · 배양토", "소량 핸드메이드"],
    care: ["밝은 간접광에 두세요", "2주에 한 번 분무", "직사광선과 난방기 근처는 피해주세요"],
  },
  {
    id: "p2",
    num: "02",
    name: "마른 정원",
    price: 96000,
    tint: "#e0d0ba",
    image: BLACK,
    blurb: "물을 적게 주어도 균형을 유지하는 건식 구성의 작은 정원.",
    description:
      "물을 적게 주어도 균형을 유지하도록 구성한 건식 정원입니다. 마른 질감의 재료와 절제된 식재로, 손이 가장 덜 가는 한 점입니다.",
    details: ["사각 유리 큐브 · 12cm", "건식 이끼 · 자갈 · 모래", "소량 핸드메이드"],
    care: ["밝은 간접광에 두세요", "한 달에 한 번 가볍게 분무", "통풍이 잘 되는 곳에 두세요"],
  },
  {
    id: "p3",
    num: "03",
    name: "고사리 숲",
    price: 152000,
    tint: "#cbd2c0",
    image: HERO,
    blurb: "천천히 잎을 펼치는 고사리로 채운 깊고 푸른 풍경.",
    description:
      "천천히 잎을 펼치는 고사리가 중심을 이루는 깊고 푸른 풍경입니다. 잎이 자라며 유리 안의 공기를 머금어, 가장 살아 있는 인상을 줍니다.",
    details: ["사각 유리 큐브 · 12cm", "고사리 · 자생 이끼 · 화산석", "소량 핸드메이드"],
    care: ["밝은 간접광에 두세요", "주 1회 분무로 습도 유지", "직사광선은 피해주세요"],
  },
  {
    id: "p4",
    num: "04",
    name: "돌의 뜰",
    price: 134000,
    tint: "#e3dbce",
    image: WOOD,
    blurb: "이끼와 돌이 이루는 여백, 절제된 선의 정물.",
    description:
      "이끼와 돌이 이루는 여백의 정물입니다. 식재를 최소화하고 선을 절제해, 오브제처럼 머무는 풍경을 의도했습니다.",
    details: ["사각 유리 큐브 · 12cm", "자생 이끼 · 자연석", "소량 핸드메이드"],
    care: ["밝은 간접광에 두세요", "2주에 한 번 분무", "돌의 위치는 그대로 두세요"],
  },
  {
    id: "p5",
    num: "05",
    name: "이끼 구체",
    price: 112000,
    tint: "#d3c4ae",
    image: BLACK,
    blurb: "둥근 유리 안에 담긴 한 점의 이끼, 손바닥 위의 자연.",
    description:
      "한 점의 이끼를 담은 가장 작은 풍경입니다. 손바닥 위에 올려두고 가까이서 들여다보기 좋은 크기로 만들었습니다.",
    details: ["유리 베셀 · 10cm", "자생 이끼 · 배양토", "소량 핸드메이드"],
    care: ["밝은 간접광에 두세요", "주 1회 분무", "건조하면 잎끝이 마릅니다"],
  },
  {
    id: "p6",
    num: "06",
    name: "모래 언덕",
    price: 88000,
    tint: "#d8dad1",
    image: HERO,
    blurb: "고운 모래의 결을 따라 흐르는 가장 가벼운 풍경.",
    description:
      "고운 모래의 결을 따라 흐르는 가장 가벼운 풍경입니다. 식물 없이 질감만으로 고요를 더하는, 입문용으로도 좋은 한 점입니다.",
    details: ["사각 유리 큐브 · 12cm", "고운 모래 · 자갈 · 이끼", "소량 핸드메이드"],
    care: ["밝은 간접광에 두세요", "한 달에 한 번 가볍게 분무", "흔들리지 않게 두세요"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
