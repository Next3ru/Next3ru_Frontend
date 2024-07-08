import { create } from "zustand";

interface Player {
  gmkey: string;
  gday: string;
  tb: string;
  name: string;
  pcode: string;
  turn: string;
  oneturn: string;
  position: string;
  changeinn: string;
  inn1: string;
  il1: string;
  inn2: string;
  il2: string;
  inn3: string;
  il3: string;
  inn4: string;
  il4: string;
  inn5: string;
  il5: string;
  inn6: string;
  il6: string;
  inn7: string;
  il7: string;
  inn8: string;
  il8: string;
  inn9: string;
  il9: string;
  inn10: string;
  il10: string;
  inn11: string;
  il11: string;
  inn12: string;
  il12: string;
  inn13: string;
  il13: string;
  inn14: string;
  il14: string;
  inn15: string;
  il15: string;
  inn16: string;
  il16: string;
  inn17: string;
  il17: string;
  inn18: string;
  il18: string;
  inn19: string;
  il19: string;
  inn20: string;
  il20: string;
  inn21: string;
  il21: string;
  inn22: string;
  il22: string;
  inn23: string;
  il23: string;
  inn24: string;
  il24: string;
  inn25: string;
  il25: string;
  ab: number;
  run: number;
  hit: number;
  rbi: number;
  accmHit: number;
  accmAb: number;
}

interface Pitcher {
  ab: number;
  accmEr: number;
  accmInn2: number;
  bbhp: number;
  bf: number;
  changeinn: string;
  er: number;
  game: number;
  gday: string;
  gmkey: string;
  hit: number;
  hr: number;
  inn: string;
  kk: number;
  l: number;
  name: string;
  pa: number;
  pcode: string;
  pos: string;
  r: number;
  s: number;
  tb: string;
  w: number;
  wls: string;
}
interface PlayerListProps {
  todayPlayers2: Player[];
  hpitchers: Pitcher[];
}

export const useStore = create<PlayerListProps>((set) => ({
  todayPlayers2: [
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "로하스",
      pcode: "67025",
      turn: "11",
      oneturn: "1",
      position: "좌",
      changeinn: "",
      inn1: "우안",
      il1: "",
      inn2: "좌안",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "1땅",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "좌홈",
      il6: "",
      inn7: "1땅",
      il7: "",
      inn8: "중비",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 6,
      run: 2,
      hit: 3,
      rbi: 4,
      accmHit: 97,
      accmAb: 309,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "김건형",
      pcode: "51005",
      turn: "21",
      oneturn: "1",
      position: "우",
      changeinn: "8",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 0,
      run: 0,
      hit: 0,
      rbi: 0,
      accmHit: 3,
      accmAb: 23,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "강백호",
      pcode: "68050",
      turn: "12",
      oneturn: "2",
      position: "지",
      changeinn: "",
      inn1: "좌홈",
      il1: "",
      inn2: "삼진",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "삼진",
      il5: "",
      inn6: "우비",
      il6: "",
      inn7: "1땅",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "4구",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 5,
      run: 2,
      hit: 1,
      rbi: 3,
      accmHit: 98,
      accmAb: 316,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "장성우",
      pcode: "78548",
      turn: "13",
      oneturn: "3",
      position: "포",
      changeinn: "",
      inn1: "유땅",
      il1: "",
      inn2: "삼진",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "삼진",
      il5: "",
      inn6: "우비",
      il6: "",
      inn7: "우비",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 5,
      run: 0,
      hit: 0,
      rbi: 0,
      accmHit: 60,
      accmAb: 222,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "강현우",
      pcode: "50066",
      turn: "23",
      oneturn: "3",
      position: "포",
      changeinn: "7",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "4구",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 0,
      run: 0,
      hit: 0,
      rbi: 0,
      accmHit: 4,
      accmAb: 11,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "오재일",
      pcode: "75334",
      turn: "14",
      oneturn: "4",
      position: "一",
      changeinn: "",
      inn1: "중안",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "삼진",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "중비",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "우2",
      il7: "",
      inn8: "우홈",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 5,
      run: 2,
      hit: 3,
      rbi: 1,
      accmHit: 30,
      accmAb: 130,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "신본기",
      pcode: "62556",
      turn: "24",
      oneturn: "4",
      position: "二",
      changeinn: "8",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "유땅",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 1,
      run: 1,
      hit: 0,
      rbi: 0,
      accmHit: 24,
      accmAb: 82,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "배정대",
      pcode: "64166",
      turn: "15",
      oneturn: "5",
      position: "중",
      changeinn: "",
      inn1: "2비",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "우비",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "우안",
      il6: "",
      inn7: "좌안",
      il7: "",
      inn8: "4구",
      il8: "",
      inn9: "사구",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 4,
      run: 2,
      hit: 2,
      rbi: 0,
      accmHit: 56,
      accmAb: 183,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "황재균",
      pcode: "76313",
      turn: "16",
      oneturn: "6",
      position: "三",
      changeinn: "",
      inn1: "좌안",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "중비",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "1땅",
      il6: "",
      inn7: "좌안",
      il7: "",
      inn8: "유실",
      il8: "",
      inn9: "중안",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 6,
      run: 1,
      hit: 3,
      rbi: 3,
      accmHit: 70,
      accmAb: 268,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "오윤석",
      pcode: "64504",
      turn: "17",
      oneturn: "7",
      position: "二一",
      changeinn: "8",
      inn1: "좌비",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "중안",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "3실",
      il6: "",
      inn7: "투희실",
      il7: "",
      inn8: "2비",
      il8: "",
      inn9: "유땅",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 5,
      run: 2,
      hit: 1,
      rbi: 0,
      accmHit: 21,
      accmAb: 90,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "김상수",
      pcode: "79402",
      turn: "18",
      oneturn: "8",
      position: "유",
      changeinn: "",
      inn1: "",
      il1: "",
      inn2: "3안",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "중안",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "유안",
      il6: "",
      inn7: "좌안",
      il7: "",
      inn8: "3파",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 5,
      run: 3,
      hit: 4,
      rbi: 2,
      accmHit: 50,
      accmAb: 195,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "장준원",
      pcode: "64115",
      turn: "28",
      oneturn: "8",
      position: "유",
      changeinn: "8",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 0,
      run: 0,
      hit: 0,
      rbi: 0,
      accmHit: 1,
      accmAb: 14,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "정준영",
      pcode: "53058",
      turn: "19",
      oneturn: "9",
      position: "우",
      changeinn: "",
      inn1: "",
      il1: "",
      inn2: "투희번",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "유병",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 1,
      run: 0,
      hit: 0,
      rbi: 0,
      accmHit: 6,
      accmAb: 26,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "문상철",
      pcode: "64007",
      turn: "29",
      oneturn: "9",
      position: "타",
      changeinn: "6",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "좌안",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 1,
      run: 0,
      hit: 1,
      rbi: 2,
      accmHit: 57,
      accmAb: 209,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "홍현빈",
      pcode: "67005",
      turn: "39",
      oneturn: "9",
      position: "주우",
      changeinn: "6",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "우안",
      il7: "",
      inn8: "4구",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 1,
      run: 1,
      hit: 1,
      rbi: 0,
      accmHit: 2,
      accmAb: 11,
    },
    {
      gmkey: "20240627KTSK0",
      gday: "20240627",
      tb: "T",
      name: "합계",
      pcode: "T",
      turn: "",
      oneturn: "",
      position: "",
      changeinn: "",
      inn1: "",
      il1: "",
      inn2: "",
      il2: "",
      inn3: "",
      il3: "",
      inn4: "",
      il4: "",
      inn5: "",
      il5: "",
      inn6: "",
      il6: "",
      inn7: "",
      il7: "",
      inn8: "",
      il8: "",
      inn9: "",
      il9: "",
      inn10: "",
      il10: "",
      inn11: "",
      il11: "",
      inn12: "",
      il12: "",
      inn13: "",
      il13: "",
      inn14: "",
      il14: "",
      inn15: "",
      il15: "",
      inn16: "",
      il16: "",
      inn17: "",
      il17: "",
      inn18: "",
      il18: "",
      inn19: "",
      il19: "",
      inn20: "",
      il20: "",
      inn21: "",
      il21: "",
      inn22: "",
      il22: "",
      inn23: "",
      il23: "",
      inn24: "",
      il24: "",
      inn25: "",
      il25: "",
      ab: 45,
      run: 16,
      hit: 19,
      rbi: 15,
      accmHit: 0,
      accmAb: 0,
    },
  ],
  hpitchers: [
    {
      ab: 24,
      accmEr: 13,
      accmInn2: 69,
      bbhp: 0,
      bf: 88,
      changeinn: "",
      er: 3,
      game: 5,
      gday: "20240627",
      gmkey: "20240627KTSK0",
      hit: 9,
      hr: 1,
      inn: "5 ⅓",
      kk: 5,
      l: 2,
      name: "사라카와",
      pa: 25,
      pcode: "69032",
      pos: "11",
      r: 5,
      s: 0,
      tb: "B",
      w: 2,
      wls: "",
    },
    {
      ab: 5,
      accmEr: 20,
      accmInn2: 66,
      bbhp: 0,
      bf: 20,
      changeinn: "6.8",
      er: 3,
      game: 26,
      gday: "20240627",
      gmkey: "20240627KTSK0",
      hit: 3,
      hr: 1,
      inn: "0 ⅔",
      kk: 0,
      l: 1,
      name: "고효준",
      pa: 5,
      pcode: "72523",
      pos: "21",
      r: 3,
      s: 0,
      tb: "B",
      w: 2,
      wls: "L",
    },
    {
      ab: 2,
      accmEr: 21,
      accmInn2: 97,
      bbhp: 0,
      bf: 5,
      changeinn: "7.4",
      er: 2,
      game: 41,
      gday: "20240627",
      gmkey: "20240627KTSK0",
      hit: 2,
      hr: 0,
      inn: "0",
      kk: 0,
      l: 1,
      name: "한두솔",
      pa: 2,
      pcode: "68092",
      pos: "31",
      r: 2,
      s: 0,
      tb: "B",
      w: 0,
      wls: "",
    },
    {
      ab: 4,
      accmEr: 9,
      accmInn2: 41,
      bbhp: 0,
      bf: 22,
      changeinn: "7.6",
      er: 1,
      game: 15,
      gday: "20240627",
      gmkey: "20240627KTSK0",
      hit: 3,
      hr: 0,
      inn: "0 ⅓",
      kk: 0,
      l: 1,
      name: "서진용",
      pa: 5,
      pcode: "61895",
      pos: "41",
      r: 3,
      s: 0,
      tb: "B",
      w: 0,
      wls: "",
    },
    {
      ab: 7,
      accmEr: 1,
      accmInn2: 11,
      bbhp: 2,
      bf: 40,
      changeinn: "7.2",
      er: 1,
      game: 3,
      gday: "20240627",
      gmkey: "20240627KTSK0",
      hit: 1,
      hr: 1,
      inn: "1 ⅔",
      kk: 0,
      l: 0,
      name: "백승건",
      pa: 9,
      pcode: "69839",
      pos: "51",
      r: 1,
      s: 0,
      tb: "B",
      w: 0,
      wls: "",
    },
    {
      ab: 3,
      accmEr: 2,
      accmInn2: 3,
      bbhp: 3,
      bf: 21,
      changeinn: "9.2",
      er: 2,
      game: 1,
      gday: "20240627",
      gmkey: "20240627KTSK0",
      hit: 1,
      hr: 0,
      inn: "1",
      kk: 0,
      l: 0,
      name: "신헌민",
      pa: 6,
      pcode: "52873",
      pos: "61",
      r: 2,
      s: 0,
      tb: "B",
      w: 0,
      wls: "",
    },
  ],
}));
