import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product, ProductResponse } from '../types/Product';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import SortOptions from './SortOptions';
import AddProductModal from './AddProductModal';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter and sort states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle suggestion click for autocomplete
  const handleSuggestionClick = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await axios.get<ProductResponse>('https://dummyjson.com/products?limit=100');
        // Extract unique categories from products
        const productsData = Array.isArray(productsResponse.data.products)
          ? productsResponse.data.products
          : [];
        const uniqueCategories = Array.from(new Set(productsData.map(p => p.category))).filter(Boolean);
        setProducts(productsData);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch products. Please try again later.';
        setError(errorMessage);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    const productWithId: Product = {
      ...newProduct,
      id: Math.max(...products.map(p => p.id)) + 1
    };
    setProducts([productWithId, ...products]);
  };

  const filteredAndSortedProducts = React.useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply sorting
    if (selectedSort) {
      const [field, direction] = selectedSort.split('-');
      result.sort((a, b) => {
        let comparison = 0;
        if (field === 'title') {
          comparison = a.title.localeCompare(b.title);
        } else if (field === 'price') {
          comparison = a.price - b.price;
        } else if (field === 'stock') {
          comparison = a.stock - b.stock;
        }
        return direction === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  }, [products, searchTerm, selectedCategory, selectedSort]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 px-2 pt-6 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/3">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            products={products}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
        <div className="w-full md:w-1/4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            loading={loading}
          />
        </div>
        <div className="w-full md:w-1/4">
          <SortOptions selectedSort={selectedSort} onSortChange={setSelectedSort} />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          Add Product
        </button>
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 pb-8">
          {filteredAndSortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
        categories={categories}
      />
    </div>
  );
};

export default ProductList; 