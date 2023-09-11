import React, { useState } from 'react';

const CategorySelector = ({ categories, selectedCategory, onSelectCategory }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onSelectCategory(selectedValue);
    };

    return (
        <div className="category-selector">
            <label htmlFor="category-select">Select a Category:</label>
            <select id="category-select" value={selectedCategory} onChange={handleChange}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
