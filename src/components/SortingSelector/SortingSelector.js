import React from 'react';

const SortingSelector = ({ sortingOptions, selectedSorting, onSelectSorting }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onSelectSorting(selectedValue);
    };

    return (
        <div className="sorting-selector">
            <label htmlFor="sorting-select">Sort by:</label>
            <select id="sorting-select" value={selectedSorting} onChange={handleChange}>
                {sortingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortingSelector;
