import ProductList from './components/ProductList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 transition-colors duration-300">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center md:flex-row md:justify-between">
          <h1 className="text-3xl font-bold text-gray-900 w-full text-center md:text-left">
            Seller Product Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default App;
