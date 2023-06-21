import BgImage from './components/BgFolder/BgImage';
import BlackPortion from './components/BlackPortion/BlackPortion';
import MWC from './components/MWC folder/MWC';
import Buy from './components/Buy/Buy';
import Subs from './components/Subscribe/Subscribe';
import Speakers from './components/Speakers/Speaker';
import News from './components/News/News';
import Mapp from './components/Map/Map';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <BgImage />
            <BlackPortion/>
            <MWC/>
            <Buy/>
            <Speakers/>
            <Subs/>
            <News/>
            <Mapp/>
            <Footer/>
        </>
    );
}

export default App;