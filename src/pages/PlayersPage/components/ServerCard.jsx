import PlayerCard from "./PlayerCard"

export default function ServerCard({serverDetails}) {
    const [serverID, playerlist] = serverDetails;

    return (
        <div className="bg-customGray p-3 rounded">
            <h2 className="text-white text-lg">Server id: {serverID} </h2>
            <div className="mt-5 grid grid-cols-3 2xl:grid-cols-5 gap-2">
                {playerlist.map((player, index) => (
                    <PlayerCard key={player.UserID} playerDetails={player} />
                ))}
            </div>
        </div>
    )
}