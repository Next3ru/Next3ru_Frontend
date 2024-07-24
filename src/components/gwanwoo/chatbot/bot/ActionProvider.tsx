// 챗봇 답변을 생성하는 컴포넌트
import React, { ReactNode } from "react";
import { createChatBotMessage } from "react-chatbot-kit"; // Assuming this is correctly imported

type ActionProviderProps = {
  createChatBotMessage: (text: string, widget: any) => any; // Adjust the function type
  setState: (state: any) => void; // Adjust the setState function type as needed
  children: ReactNode;
};

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: ActionProviderProps) => {
  const handleOptions = (options: any) => {
    const botMessage = createChatBotMessage("원하시는 항목을 선택해 주세요.", {
      widget: "overview",
    });
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDailySchedule = () => {
    const botMessage = createChatBotMessage("금일 경기 일정입니다.", {
      widget: "dailySchedule",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTeamRecord = () => {
    const botMessage = createChatBotMessage("현재까지의 팀 성적입니다.", {
      widget: "teamRecord",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePlayerRanking = () => {
    const botMessage = createChatBotMessage("각 항목 별 선수 성적입니다.", {
      widget: "playerRanking",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          actions: {
            handleOptions: handleOptions, // Pass handleHello function to children
            handleDailySchedule: handleDailySchedule,
            handleTeamRecord: handleTeamRecord,
            handlePlayerRanking: handlePlayerRanking,
          },
        })
      )}
    </div>
  );
};

export default ActionProvider;