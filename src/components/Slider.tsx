import {ChangeEvent, useState} from "react";

interface Props {
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
    defaultValue?: number;
}

const Slider = ({
                    onChange = () => {
                    },
                    min = 0,
                    max = 100,
                    defaultValue = 0
                }: Props) => {
    const [value, setValue] = useState(defaultValue);
    const [isDragging, setIsDragging] = useState(false);

    function handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.valueAsNumber;
        setValue(value);

        if (!isDragging) { // This is so that sliding fires only one event and arrow keys work.
            onChange(value);
        }
    }

    return (
        <div className="slider">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChangeValue}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => {
                    setIsDragging(false);
                    onChange(value);
                }}
            />
            <p>Value: {value}</p>
        </div>

    )
}

export default Slider;