import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Input from './Input';
import Tag from './Tag';

interface AutocompleteProps {
    placeholder: string;
    options: string[];
    onSelect: (value: string[]) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options, onSelect, placeholder }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedCities, setSelectedCities] = useState<string[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleOptionClick = (value: string) => {
        setInputValue('');
        const newCities = [...selectedCities, value];
        setSelectedCities(newCities);
        onSelect(newCities);
    };

    const handleRemoveCity = (city: string) => {
        const updatedCities = selectedCities.filter((c) => c !== city);
        setSelectedCities(updatedCities);
    };

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && inputValue === '' && selectedCities.length > 0) {
            const lastCity = selectedCities[selectedCities.length - 1];
            handleRemoveCity(lastCity);
        }
    };
    return (
        <div className="relative flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center relative z-50">
                {selectedCities.map((city, index) => (
                    <div key={index}>
                        <Tag text={city} />
                    </div>
                ))}
            </div>

            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder={selectedCities.length === 0 ? placeholder : ''}
                className="z-30"
            />

            {inputValue && (
                <div className="w-full max-h-32 overflow-y-auto bg-add1-300 border-4 p-4 py-3 rounded mt-2">
                    {options
                        .filter(option => option.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((option, index) => (
                            <div
                                key={index}
                                className="py-2 px-4 cursor-pointer hover:bg-gray-100 transition-all duration-200 rounded-full m-1"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Autocomplete;
