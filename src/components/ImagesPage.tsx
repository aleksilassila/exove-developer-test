import {useState} from "react";
import CarouselModal from "./CarouselModal";
import {useDarkMode} from "../App";

const carouselUrlsSet1 = [
    "https://github.com/Exove/developer-test/blob/main/material/non-directional-graph-cycle.png?raw=true",
    "https://github.com/Exove/developer-test/blob/main/material/non-directional-graph.png?raw=true",
]

const carouselUrlSet2 = [
    "https://github.com/Exove/developer-test/blob/main/material/news-site.png?raw=true",
    "https://github.com/Exove/developer-test/blob/main/material/non-directional-graph.png?raw=true",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/MX_Linux_18.3_Default_Desktop.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/88/Linux_Lite_5.2_Desktop_en.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/01/BigLinux_15-07-2022_linux-5.15_KDEPlasma_Desk-X.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/5f/Screenshot_of_BOSS_Linux_v6.1_Desktop_Environment.png"
]

const ImageSetPreview = ({title, coverUrl, handleOpen}: {
    title: string,
    coverUrl: string,
    handleOpen: () => void
}) => {
    return <div className="cursor-pointer flex flex-col gap-2 items-center" onClick={handleOpen}>
        <img src={coverUrl} alt=""/>
        <h2>{title}</h2>
    </div>
}

const ImagesPage = () => {
    const [visibleUrls, setVisibleUrls] = useState<string[]>([]);
    const darkMode = useDarkMode();

    return (
        <div className={`flex flex-col gap-4 p-8 ${!darkMode.isEnabled && "bg-white text-black"}`}>
            <h1 className="text-xl">Browse Images</h1>

            <div className="flex items-center gap-2">
                <h2>Dark mode: </h2>
                <input
                    type="checkbox"
                    className="h-6 w-6"
                    onChange={(e) => {
                        darkMode.setEnabled(e.target.checked);
                    }}
                />
            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 items-end">
                <ImageSetPreview title={"Set 1"} coverUrl={carouselUrlsSet1[0]}
                                 handleOpen={() => setVisibleUrls(carouselUrlsSet1)}/>
                <ImageSetPreview title={"Set 2"} coverUrl={carouselUrlSet2[0]}
                                 handleOpen={() => setVisibleUrls(carouselUrlSet2)}/>
            </div>
            {visibleUrls.length > 0 && <CarouselModal urls={visibleUrls} handleClose={() => setVisibleUrls([])}/>}
        </div>
    );
}

export default ImagesPage;