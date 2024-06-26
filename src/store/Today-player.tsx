import { create } from "zustand";

interface Player {
  name: string;
  imageUrl: string;
  number: string;
  position: {
    top: string;
    left: string;
  };
  role: string;
  rating: number;
  onClick?: () => void;
}
export default Player;

interface PlayerListProps {
  todayPlayers: Player[];
  todayPlayersSub: Player[];
  getColorClass: (rating: number) => string;
}

const getColorClass = (rating: number) => {
  if (rating < 3.0) {
    return "bg-red-500";
  } else if (rating < 5.0) {
    return "bg-orange-500";
  } else if (rating < 8.0) {
    return "bg-green-500";
  } else {
    return "bg-blue-500";
  }
};
export const useStore = create<PlayerListProps>((set) => ({
  todayPlayers: [
    {
      name: "강건",
      imageUrl: "/images/pitcher/강건.svg",
      number: "99",
      position: { top: "30%", left: "35%" },
      role: "SS",
      rating: 7.7,
    },
    {
      name: "고영표",
      imageUrl: "/images/pitcher/고영표.svg",
      number: "1",
      position: { top: "30%", left: "60%" },
      role: "2B",
      rating: 1.7,
    },
    {
      name: "김건웅",
      imageUrl: "/images/pitcher/김건웅.svg",
      number: "49",
      position: { top: "20%", left: "74%" },
      role: "RF",
      rating: 8.2,
    },
    {
      name: "김민",
      imageUrl: "/images/pitcher/김민.svg",
      number: "11",
      position: { top: "10%", left: "47%" },
      role: "CF",
      rating: 2.5,
    },
    {
      name: "김민성",
      imageUrl: "/images/pitcher/김민성.svg",
      number: "94",
      position: { top: "45%", left: "75%" },
      role: "1B",
      rating: 5.2,
    },
    {
      name: "김영현",
      imageUrl: "/images/pitcher/김영현.svg",
      number: "48",
      position: { top: "20%", left: "20%" },
      role: "LF",
      rating: 4.7,
    },
    {
      name: "문용익",
      imageUrl: "/images/pitcher/문용익.svg",
      number: "13",
      position: { top: "45%", left: "12%" },
      role: "3B",
      rating: 7.2,
    },
    {
      name: "박세진",
      imageUrl: "/images/pitcher/박세진.svg",
      number: "33",
      position: { top: "48%", left: "45%" },
      role: "SP",
      rating: 3.2,
    },
    {
      name: "박세진2",
      imageUrl: "/images/pitcher/박세진.svg",
      number: "33",
      position: { top: "68%", left: "45%" },
      role: "C",
      rating: 5.5,
    },
  ],
  todayPlayersSub: [
    {
      name: "주권",
      imageUrl: "/images/pitcher/주권.svg",
      number: "99",
      position: { top: "22%", left: "40%" },
      role: "RP",
      rating: 5.1,
    },
    {
      name: "쿠에바스",
      imageUrl: "/images/pitcher/고영표.svg",
      number: "1",
      position: { top: "22%", left: "55%" },
      role: "RP",
      rating: 2.3,
    },
    {
      name: "하준호",
      imageUrl: "/images/pitcher/하준호.svg",
      number: "49",
      position: { top: "15%", left: "70%" },
      role: "RP",
      rating: 8.4,
    },
    {
      name: "한차현",
      imageUrl: "/images/pitcher/한차현.svg",
      number: "11",
      position: { top: "10%", left: "47%" },
      role: "CP",
      rating: 4.5,
    },
  ],
  getColorClass,
}));
