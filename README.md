# Seller Product Manager Dashboard

A responsive React + TypeScript web module that enables sellers to view, search, sort, filter, and add new products using data fetched from the DummyJSON API.

## Features

- 🛍️ Product Listing View with grid layout
- 🔍 Search products by title
- 🔽 Filter products by category
- ↕️ Sort products by price, stock, and title
- ➕ Add new products (simulation)
- 📱 Responsive design for mobile and desktop

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Query
- Axios
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd seller-product-dashboard
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
\`\`\`

### Running the Development Server

Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

## Project Structure

\`\`\`
src/
├── components/
│   ├── ProductList.tsx
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   ├── CategoryFilter.tsx
│   ├── SortOptions.tsx
│   └── AddProductModal.tsx
├── types/
│   └── Product.ts
├── App.tsx
└── index.tsx
\`\`\`

## API Integration

The project uses the DummyJSON API for product data:
- Products API: https://dummyjson.com/products
- Categories API: https://dummyjson.com/products/categories

## Features

### Product Listing
- Displays product image, title, category, price, and stock
- Responsive grid layout
- Loading and error states

### Filtering and Sorting
- Search products by title
- Filter by category
- Sort by:
  - Price (low to high / high to low)
  - Stock
  - Title (A-Z / Z-A)

### Add New Product
- Modal form for adding new products
- Form validation
- Dynamic UI update on submission
