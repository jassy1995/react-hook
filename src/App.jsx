import ArrayCom from "./components/ArrayCom";
import Debounce from "./components/Debounce";
import LocalStorage from "./components/LocalStorage";
import Previous from "./components/Previous";
import Timeout from "./components/Timeout";
import Toggle from "./components/Toggle";
import UpdateEffect from "./components/UpdateEffect";
import StateWithHistory from './components/StateWithHistory';
import Storage from "./components/Storage";
import Fetch from "./components/Fetch";
import AsynCom from "./components/AsynCom";
import EventListener from "./components/EventListener";
import OnScreen from "./components/OnScreen";
import WindowSize from "./components/WindowSize";
import MediaQuery from "./components/MediaQuery";
import Geolocation from "./components/Geolocation";
import StateWithValidator from "./components/StateWithValidator";
import SizeCom from "./components/SizeCom";
import EffectOnce from "./components/EffectOnce";


function App() {


  return (
    <div className="flex flex-col justify-center items-center space-y-4 mx-auto py-4">
      <LocalStorage />
      {/* <Toggle /> */}
      {/* <Timeout /> */}
      {/* <Debounce /> */}
      {/* <UpdateEffect /> */}
      {/* <ArrayCom /> */}
      {/* <Previous /> */}
      {/* <StateWithHistory /> */}
      {/* <Storage /> */}
      {/* <AsynCom /> */}
      {/* <Fetch /> */}
      {/* <EventListener /> */}
      {/* <OnScreen /> */}
      {/* <WindowSize /> */}
      {/* <MediaQuery /> */}
      {/* <Geolocation /> */}
      {/* <StateWithValidator /> */}
      {/* <SizeCom /> */}
      <EffectOnce />
    </div>
  )
}

export default App
