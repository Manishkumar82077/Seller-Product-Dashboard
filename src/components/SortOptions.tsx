import React from 'react';

export type SortOption = {
  value: string;
  label: string;
};

interface SortOptionsProps {
  selectedSort: string;
  onSortChange: (value: string) => void;
}

const sortOptions: SortOption[] = [
  { value: 'title-asc', label: 'Title (A-Z)' },
  { value: 'title-desc', label: 'Title (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'stock-asc', label: 'Stock (Low to High)' },
  { value: 'stock-desc', label: 'Stock (High to Low)' },
];

const SortOptions: React.FC<SortOptionsProps> = ({ selectedSort, onSortChange }) => {
  return (
    <select
      value={selectedSort}
      onChange={(e) => onSortChange(e.target.value)}
      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      aria-label="Sort products"
    >
      <option value="">Sort by</option>
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortOptions; 