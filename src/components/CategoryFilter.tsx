import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  loading?: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
  loading = false,
}) => {
  // Ensure categories is an array and filter out any non-string values
  const validCategories = Array.isArray(categories) 
    ? categories.filter(category => typeof category === 'string')
    : [];

  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white text-gray-900"
      aria-label="Filter products by category"
      disabled={loading || validCategories.length === 0}
    >
      {loading ? (
        <option>Loading categories...</option>
      ) : validCategories.length === 0 ? (
        <option>No categories available</option>
      ) : (
        <>
          <option value="">All Categories</option>
          {validCategories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </>
      )}
    </select>
  );
};

export default CategoryFilter; 