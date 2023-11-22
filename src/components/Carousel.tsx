import {useState} from "react";

interface Props {
    urls: string[];
}

const LAZY_LOAD_THRESHOLD = 2;

const Carousel = (props: Props) => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex(prev => (prev + 1) % props.urls.length);

    }

    const handlePrev = () => {
        setIndex(prev => (prev - 1 + props.urls.length) % props.urls.length);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="grid"> {/* grid is used to center the images and preserve their height */}
                {props.urls // lazy load images
                    .filter((_, i) => Math.abs(i - index) <= LAZY_LOAD_THRESHOLD || props.urls.length - Math.abs(i - index) <= LAZY_LOAD_THRESHOLD)
                    .map((url, i) => (
                        <div
                            className={`col-start-1 row-start-1 col-span-1 flex items-center justify-center transition-opacity duration-500 ${url === props.urls[index] ? "opacity-100" : "opacity-0"}`}
                            key={url}
                        >
                            <img
                                src={url}
                                alt=""
                            />
                        </div>
                    ))}
            </div>

            <div className="flex gap-8 items-center">
                <button
                    onClick={handlePrev}
                    className="bg-black/30 rounded-full w-12 h-12 cursor-pointer hover:bg-black/50 left-8">‹
                </button>

                <div>
                    {index + 1} / {props.urls.length}
                </div>

                <button
                    onClick={handleNext}
                    className="bg-black/30 rounded-full w-12 h-12 cursor-pointer hover:bg-black/50 right-8">›
                </button>
            </div>
        </div>
    );
}

export default Carousel;