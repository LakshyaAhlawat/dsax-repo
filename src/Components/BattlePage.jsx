import BattleMode from './BattleMode';
import PlayerSelection from './PlayerSelection';
import SettingsPanel from './Settings';
import Settings from './Settings';


function BattlePage() {
  return (
    <div className="App min-h-screen bg-gradient-to-r from-[#0c0c40] to-[#000c24] text-white">
      <BattleMode></BattleMode>
      <PlayerSelection></PlayerSelection>
      <SettingsPanel></SettingsPanel>
    </div>
  );
}

export default BattlePage;