import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const products = [
    {
      name: "Рыбный соус Нам Чам",
      price: "1190₽",
      description: "Премиальный соус из анчоусов острова Фукуок",
      image: "/img/4ffa4b8e-2477-48d7-9ff7-b67cf89b3582.jpg",
      popular: true,
      category: "Соусы"
    },
    {
      name: "Рисовая лапша Фо",
      price: "450₽", 
      description: "Традиционная лапша для супа фо",
      image: "/img/4ffa4b8e-2477-48d7-9ff7-b67cf89b3582.jpg",
      popular: true,
      category: "Лапша"
    },
    {
      name: "Черный перец Фукуок",
      price: "1290₽",
      description: "Премиальный перец с острова Фукуок",
      image: "/img/4ab026ae-b96a-4d3d-9532-60612a027967.jpg",
      popular: true,
      category: "Специи"
    },
    {
      name: "Чай с лотосом",
      price: "850₽",
      description: "Зеленый чай с лепестками лотоса",
      image: "/img/0702f3e9-83e3-4223-9e1d-c494761cb5ae.jpg",
      popular: false,
      category: "Чай"
    },
    {
      name: "Вьетнамская корица",
      price: "890₽",
      description: "Ароматная корица из провинции Куанг Нам",
      image: "/img/4ab026ae-b96a-4d3d-9532-60612a027967.jpg",
      popular: false,
      category: "Специи"
    },
    {
      name: "Соус Хойсин",
      price: "680₽",
      description: "Сладкий соус для мяса и роллов",
      image: "/img/4ffa4b8e-2477-48d7-9ff7-b67cf89b3582.jpg",
      popular: false,
      category: "Соусы"
    },
    {
      name: "Жасминовый чай",
      price: "720₽",
      description: "Ароматный чай с цветами жасмина",
      image: "/img/0702f3e9-83e3-4223-9e1d-c494761cb5ae.jpg",
      popular: false,
      category: "Чай"
    },
    {
      name: "Рисовая бумага Банх Чанг",
      price: "320₽",
      description: "Тонкая рисовая бумага для роллов",
      image: "/img/4ffa4b8e-2477-48d7-9ff7-b67cf89b3582.jpg",
      popular: true,
      category: "Ингредиенты"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Потрясающие специи! Аромат просто невероятный, готовлю настоящий вьетнамский фо дома.",
      city: "Москва"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Качество на высоте, доставка быстрая. Корица особенно понравилась - очень ароматная!",
      city: "СПб"
    },
    {
      name: "Елена М.",
      rating: 5,
      text: "Заказываю уже второй раз. Специи свежие, упаковка качественная. Рекомендую!",
      city: "Казань"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-tropical-light to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-tropical-gold/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-tropical-orange to-tropical-dark rounded-full flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-tropical-dark">VietSpice</h1>
                <p className="text-sm text-tropical-green">Аутентичные вьетнамские специи</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-tropical-dark hover:text-tropical-orange transition-colors">Каталог</a>
              <a href="#about" className="text-tropical-dark hover:text-tropical-orange transition-colors">О Вьетнаме</a>
              <a href="#reviews" className="text-tropical-dark hover:text-tropical-orange transition-colors">Отзывы</a>
              <a href="#contacts" className="text-tropical-dark hover:text-tropical-orange transition-colors">Контакты</a>
              <Button className="bg-tropical-orange hover:bg-tropical-dark">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Корзина
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tropical-orange/10 to-tropical-green/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-tropical-gold/20 px-4 py-2 rounded-full animate-fade-in">
                <span className="text-2xl animate-float">🇻🇳</span>
                <span className="text-tropical-dark font-medium">Прямо из Вьетнама</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-tropical-dark leading-tight animate-fade-in">
                Аутентичные<br />
                <span className="text-tropical-orange">Вьетнамские</span><br />
                Специи
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя богатый мир вьетнамской кухни с нашими премиальными специями и приправами, 
                доставленными прямо из тропических регионов Вьетнама.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-tropical-orange hover:bg-tropical-dark text-lg px-8">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  О традициях
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tropical-orange/20 to-tropical-green/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/8aea42cd-536a-4aa6-b17a-aec4ed4f1287.jpg" 
                alt="Вьетнамский тропический пейзаж"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-tropical-orange/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Icon name="Truck" size={32} className="text-tropical-orange" />
              </div>
              <h3 className="text-xl font-semibold text-tropical-dark">Прямые поставки</h3>
              <p className="text-gray-600">Напрямую от фермеров Вьетнама без посредников</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-tropical-green/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Icon name="Shield" size={32} className="text-tropical-green" />
              </div>
              <h3 className="text-xl font-semibold text-tropical-dark">100% натуральные</h3>
              <p className="text-gray-600">Без химических добавок и консервантов</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-16 h-16 bg-tropical-gold/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Icon name="Star" size={32} className="text-tropical-gold" />
              </div>
              <h3 className="text-xl font-semibold text-tropical-dark">Премиум качество</h3>
              <p className="text-gray-600">Тщательный отбор лучших специй</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20 bg-gradient-to-br from-tropical-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tropical-dark mb-4">
              Аутентичные продукты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полная коллекция традиционных вьетнамских продуктов - от специй и соусов до чая и лапши для настоящей азиатской кухни
            </p>
          </div>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button variant="outline" className="border-tropical-orange text-tropical-orange hover:bg-tropical-orange hover:text-white">
              Все продукты
            </Button>
            <Button variant="outline" className="border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white">
              Специи
            </Button>
            <Button variant="outline" className="border-tropical-gold text-tropical-gold hover:bg-tropical-gold hover:text-white">
              Соусы
            </Button>
            <Button variant="outline" className="border-tropical-orange text-tropical-orange hover:bg-tropical-orange hover:text-white">
              Чай
            </Button>
            <Button variant="outline" className="border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white">
              Лапша
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 z-10 bg-tropical-orange hover:bg-tropical-orange">
                      🔥 Популярное
                    </Badge>
                  )}
                  <Badge className="absolute top-3 right-3 z-10 bg-tropical-green/90 hover:bg-tropical-green text-white">
                    {product.category}
                  </Badge>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-tropical-dark">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tropical-orange">{product.price}</span>
                    <Button size="sm" className="bg-tropical-green hover:bg-tropical-dark">
                      <Icon name="Plus" size={16} className="mr-1" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-tropical-orange text-tropical-orange hover:bg-tropical-orange hover:text-white">
              Смотреть все продукты
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Vietnam */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-tropical-dark">
                О Вьетнаме и традициях
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Вьетнам — страна с богатейшими кулинарными традициями, где каждый ингредиент имеет свою историю. 
                От рыбного соуса до ароматного чая — наши продукты создаются по вековым рецептам 
                и доставляются прямо из регионов происхождения.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tropical-orange rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tropical-dark">Тысячелетние традиции</h4>
                    <p className="text-gray-600">Рецепты передаваются из поколения в поколение</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tropical-green rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tropical-dark">Региональное происхождение</h4>
                    <p className="text-gray-600">Каждый продукт из своего исторического региона</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tropical-gold rounded-full flex items-center justify-center mt-1">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-tropical-dark">Полная коллекция</h4>
                    <p className="text-gray-600">От специй до лапши — всё для вьетнамской кухни</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-tropical-green/20 to-tropical-orange/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/4ab026ae-b96a-4d3d-9532-60612a027967.jpg" 
                alt="Вьетнамский рынок специй"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-tropical-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tropical-dark mb-4">
              Отзывы покупателей
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят наши клиенты о вьетнамских специях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-tropical-dark">{review.name}</CardTitle>
                      <CardDescription className="text-tropical-green">{review.city}</CardDescription>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-tropical-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Delivery */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-tropical-dark mb-6">Доставка и оплата</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tropical-orange/10 rounded-full flex items-center justify-center">
                      <Icon name="Package" size={24} className="text-tropical-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tropical-dark mb-2">Бесплатная доставка</h4>
                      <p className="text-gray-600">По России от 3000₽, обычно 1-3 дня</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tropical-green/10 rounded-full flex items-center justify-center">
                      <Icon name="CreditCard" size={24} className="text-tropical-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tropical-dark mb-2">Удобная оплата</h4>
                      <p className="text-gray-600">Картой онлайн, наличными при получении</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-tropical-gold/10 rounded-full flex items-center justify-center">
                      <Icon name="RotateCcw" size={24} className="text-tropical-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tropical-dark mb-2">Гарантия качества</h4>
                      <p className="text-gray-600">30 дней на возврат, если не понравилось</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-tropical-dark mb-6">Контакты</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-tropical-orange" />
                    <span className="text-lg text-gray-700">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-tropical-green" />
                    <span className="text-lg text-gray-700">info@vietspice.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-tropical-gold" />
                    <span className="text-lg text-gray-700">Москва, ул. Примерная, 123</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-tropical-light/50 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-tropical-dark mb-4">Остались вопросы?</h3>
                <p className="text-gray-600 mb-4">Напишите нам, и мы поможем выбрать идеальные специи для ваших блюд!</p>
                <Button className="w-full bg-tropical-orange hover:bg-tropical-dark">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-tropical-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-tropical-orange rounded-full flex items-center justify-center">
                  <span className="text-lg">🌿</span>
                </div>
                <span className="text-xl font-bold">VietSpice</span>
              </div>
              <p className="text-gray-300">Аутентичные вьетнамские специи высочайшего качества</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-tropical-orange transition-colors">Специи</a></li>
                <li><a href="#" className="hover:text-tropical-orange transition-colors">Приправы</a></li>
                <li><a href="#" className="hover:text-tropical-orange transition-colors">Наборы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-tropical-orange transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-tropical-orange transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-tropical-orange transition-colors">Оплата</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@vietspice.ru</p>
                <div className="flex space-x-4 mt-4">
                  <Button size="sm" variant="outline" className="border-tropical-orange text-tropical-orange hover:bg-tropical-orange hover:text-white">
                    <Icon name="Send" size={16} />
                  </Button>
                  <Button size="sm" variant="outline" className="border-tropical-green text-tropical-green hover:bg-tropical-green hover:text-white">
                    <Icon name="Instagram" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VietSpice. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}