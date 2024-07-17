import { Link } from 'react-router-dom';
import useGameData from './hooks/useGameData';
import LoadingScreen from '../../components/LoadingScreen';

const isEmpty = (value) => {
  return value.length === 0 || Object.keys(value).length === 0;
};

export default function Home() {
  const gameData = useGameData();
  const gameLink = "https://www.roblox.com/games/start?placeId=17329305950&launchData=%7B%22roomId%22%3A%202%7D";

  if (isEmpty(gameData)) {
    return <LoadingScreen/>;
  }

  return (
    <div className="grid gap-5 *:max-h-fit grid-cols-1 md:grid-cols-3 md:grid-rows-4 p-5 flex-1">
      <div className='shadow-md shadow-customWhite/20 flex flex-col gap-10 justify-around items-center rounded-md p-4 bg-customGray md:col-span-3 md:row-span-2'>
        <h2 className='text-customWhite text-5xl md:text-6xl '>Georgian Mystery <i className='block mt-5 text-center animate-bounce text-red-800'>2</i></h2>
        <Link to={gameLink} className='shadow-lg hover:shadow-customPurple/40 rounded px-16 py-3 bg-customBorder text-customWhite hover:bg-customPurple text-xl'>
          PLAY NOW!
        </Link>
      </div>
      <div className='shadow-md shadow-customWhite/20 rounded-md p-4 bg-customGray'>
        <h2 className='text-customWhite text-2xl'>GAME VISITS:</h2>
        <h3 className='text-customWhite text-4xl md:text-6xl text-center mt-5 md:mt-12'>{gameData.visits}</h3>
      </div>
      <div className='shadow-md shadow-customWhite/20 rounded-md p-4 bg-customGray'>
        <h2 className='text-customWhite text-2xl'>ACTIVE PLAYERS:</h2>
        <h3 className='text-customWhite text-4xl md:text-6xl text-center mt-5 md:mt-12'>{gameData.playing}</h3>
      </div>
      <div className='shadow-md shadow-customWhite/20 rounded-md p-4 bg-customGray'>
        <h2 className='text-customWhite text-2xl'>GAME FAVORITES:</h2>
        <h3 className='text-customWhite text-4xl md:text-6xl text-center mt-5 md:mt-12'>{gameData.favoritedCount}</h3>
      </div>
      <div className='shadow-md shadow-customWhite/20 rounded-md p-4 bg-customGray'>
        <h2 className='text-customWhite text-2xl'>LIKES:</h2>
        <h3 className='text-customWhite text-4xl md:text-6xl text-center mt-5 md:mt-12'>{gameData.upVotes}</h3>
      </div>
      <div className='shadow-md shadow-customWhite/20 rounded-md p-4 bg-customGray'>
        <h2 className='text-customWhite text-2xl'>DISLIKES:</h2>
        <h3 className='text-customWhite text-4xl md:text-6xl text-center mt-5 md:mt-12'>{gameData.downVotes}</h3>
      </div>
      <div className='shadow-md shadow-customWhite/20 rounded-md p-4 bg-customGray'>
        <h2 className='text-customWhite text-2xl'>LAST UPDATED:</h2>
        <h3 className='text-customWhite text-2xl md:text-4xl text-center mt-5 md:mt-12'>{gameData.updated}</h3>
      </div>
    </div>
  );
}
