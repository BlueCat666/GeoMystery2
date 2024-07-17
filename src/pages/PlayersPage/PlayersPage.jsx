import React from "react";
import PlayerCard from "./components/PlayerCard";
import ServerCard from "./components/ServerCard";
import useServers from "./hooks/useServers";
import LoadingScreen from "../../components/LoadingScreen";

const isEmpty = (value) => {
    return value.length === 0 || Object.keys(value).length === 0;
};

export default function PlayerList() {
  const servers = useServers();

  if (isEmpty(servers)) {
    return <LoadingScreen />;
  }

  return (
    <div className="grid grid-cols-1 gap-3 p-3">
      {Object.entries(servers).map((server, index) => (
        <ServerCard key={index} serverDetails={server} />
      ))}
    </div>
  );
}
