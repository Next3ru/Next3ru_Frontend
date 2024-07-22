"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store/PitcherDashBoard";
import { useStore as useStore2 } from "@/store/PlayerPitcher";
import Image from "next/image";

const PlayerPitcher = () => {
  const { pitcher, fetchPitcher } = useStore((state) => ({
    pitcher: state.pitcher,
    fetchPitcher: state.fetchPitcher,
  }));

  const { pitcherList, selectedPitcherPcode, setSelectedPitcherPcode } = useStore2((state) => ({
    pitcherList: state.pitcherList,
    selectedPitcherPcode: state.selectedPitcherPcode,
    setSelectedPitcherPcode: state.setSelectedPitcherPcode,
  }));

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPitchers, setFilteredPitchers] = useState(pitcherList);
  const [currentPage, setCurrentPage] = useState(1);
  const pitchersPerPage = 15;

  useEffect(() => {
    setFilteredPitchers(
      pitcherList.filter((player) =>
        player.playerName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pitcherList]);

  const indexOfLastPitcher = currentPage * pitchersPerPage;
  const indexOfFirstPitcher = indexOfLastPitcher - pitchersPerPage;
  const currentPitchers = filteredPitchers.slice(indexOfFirstPitcher, indexOfLastPitcher);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className="p-2 ">
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 w-full"
        placeholder="선수명 검색"
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {currentPitchers.map((player) => (
        <div
          key={player.pcode}
          className="bg-black p-2 opacity-95 my-2 w-[258.9px]"
          onClick={() => {
            setSelectedPitcherPcode(player.pcode);
            fetchPitcher(player.pcode);
          }}
        >
          <div className="flex items-center opacity-100 ">
            <div className="relative w-[45px] h-[45px] bg-white rounded-full overflow-hidden">
              <Image
                src={`${player?.playerPrvwImg}`}
                alt={player?.playerName || "Default Alt Text"}
                layout="fill"
              />
            </div>
            <div className="ml-4 w-[44.43px] text-gray-300 text-white text-sm">
              No. {player.backnum}{" "}
            </div>
            <div className="ml-12 mr-6 w-[48.67px] text-white font-bold ">{player.playerName}</div>
          </div>
          <div className="relative">
            <Image
              src="/images/logo.svg"
              alt="로고다"
              width={39.37}
              height={42.17}
              className="absolute top-[-43px] left-[175px] z-[-1] opacity-25"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(filteredPitchers.length / pitchersPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
            } border border-blue-500 rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerPitcher;