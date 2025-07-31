import { AppContext } from '../context/AppContext';
import { useContext, useEffect } from 'react';

const Home = () => {
  const { addToCart, lang } = useContext(AppContext);

  const menuItems = [
    { id: 1, name: lang === 'ar' ? 'كباب لحم' : 'Lamb Kebab', price: 32, category: 'main', image: 'https://via.placeholder.com/300/FF6347' },
    { id: 2, name: lang === 'ar' ? 'سلطة تبولة' : 'Tabbouleh', price: 12, category: 'appetizer', image: 'https://via.placeholder.com/300/9ACD32' },
    { id: 3, name: lang === 'ar' ? 'عصير برتقال' : 'Orange Juice', price: 10, category: 'drink', image: 'https://via.placeholder.com/300/1E90FF' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        {lang === 'ar' ? 'أفضل النكهات العربية' : 'Best Arabic Flavors'}
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {menuItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600 mt-2">وصف قصير عن الطبق...</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-orange-600">{item.price} ر.س</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full flex items-center"
                >
                  <i className="fas fa-shopping-cart ml-1"></i>
                  {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
