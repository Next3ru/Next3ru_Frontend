// pages/pitch.tsx

import PlayerList from "@/components/PlayerList/PlayerList";
import TodayPlayerCon from "@/components/TodayPlayerCon/TodayPlayerCon";
import React from "react";

const TodayPlayer = () => {
  return (
    <div>
      <h1>오늘 경기 선수들</h1>
      <div className="flex justify-center">
        <TodayPlayerCon />
      </div>
    </div>
  );
};

export default TodayPlayer;
