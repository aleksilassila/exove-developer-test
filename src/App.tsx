import React, {createContext, useContext} from 'react';
import './App.css';
import Slider from "./components/Slider";
import NewsLayout from "./components/NewsLayout";
import ImagesPage from "./components/ImagesPage";
import Carousel from "./components/Carousel";

interface DarkModeContextType {
    isEnabled: boolean;
    toggle: () => void;
    setEnabled: (enabled: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
    isEnabled: true,
    toggle: () => {
    },
    setEnabled: () => {
    }
});

export const useDarkMode = () => useContext(DarkModeContext);

const carouselLinks = [
    "https://github.com/Exove/developer-test/blob/main/material/non-directional-graph-cycle.png?raw=true",
    "https://github.com/Exove/developer-test/blob/main/material/non-directional-graph.png?raw=true",
    "https://github.com/Exove/developer-test/blob/main/material/news-site.png?raw=true",
]

function App() {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

    function toggleDarkMode() {
        setIsDarkModeEnabled(prev => !prev);
    }

    return (
        <DarkModeContext.Provider
            value={{isEnabled: isDarkModeEnabled, toggle: toggleDarkMode, setEnabled: setIsDarkModeEnabled}}>
            <div className="flex flex-col gap-16 bg-stone-900 text-white items-center">
                <p>1C: Slider</p>
                <Slider min={10} max={50} defaultValue={25} onChange={(v) => console.log("New value: ", v)}/>

                <p>2A: Carousel</p>
                <Carousel urls={carouselLinks}/>

                <p>3B: Top Level Image Viewer</p>
                <ImagesPage/>

                <p>3D: News Layout</p>
                <NewsLayout/>
            </div>
        </DarkModeContext.Provider>
    );
}

export default App;
