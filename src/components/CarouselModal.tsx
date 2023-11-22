import Carousel from "./Carousel";
import {useDarkMode} from "../App";

interface Props {
    urls: string[];
    handleClose: () => void;
}

const CarouselModal = (props: Props) => {
    const darkMode = useDarkMode();

    return <div
        className={`fixed inset-0 flex items-center justify-center ${darkMode.isEnabled ? "bg-black/75" : "bg-white/75"}`}>
        <Carousel urls={props.urls}/>
        <div className="absolute inset-0 -z-10" onClick={props.handleClose}/>
    </div>
}

export default CarouselModal;