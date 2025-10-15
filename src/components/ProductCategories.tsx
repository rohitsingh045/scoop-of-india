import { useState } from "react";
import { IceCream, Coffee, Cake, Candy, Lollipop, PartyPopper, Tent } from "lucide-react";
import ProductModal from "./ProductModal";

const categories = [
  {
    id: "bar-baar",
    name: "Bar Baar",
    icon: IceCream,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    products: [
      { name: "Chocolate Bar", price: "₹50", image: "🍫" },
      { name: "Vanilla Bar", price: "₹45", image: "🍦" },
      { name: "Strawberry Bar", price: "₹50", image: "🍓" },
      { name: "Mango Bar", price: "₹55", image: "🥭" },
    ]
  },
  {
    id: "cone-masti",
    name: "Cone-Masti",
    icon: IceCream,
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    products: [
      { name: "Chocolate Cone", price: "₹60", image: "🍦" },
      { name: "Strawberry Cone", price: "₹60", image: "🍓" },
      { name: "Vanilla Cone", price: "₹55", image: "🍨" },
      { name: "Butterscotch Cone", price: "₹65", image: "🍦" },
    ]
  },
  {
    id: "kulfi-baaz",
    name: "Kulfi-Baaz",
    icon: Lollipop,
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    products: [
      { name: "Kesar Pista Kulfi", price: "₹70", image: "🍡" },
      { name: "Mango Kulfi", price: "₹65", image: "🥭" },
      { name: "Malai Kulfi", price: "₹60", image: "🥛" },
      { name: "Rose Kulfi", price: "₹70", image: "🌹" },
    ]
  },
  {
    id: "cup-masti",
    name: "Cup-Masti",
    icon: Coffee,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
    products: [
      { name: "Family Cup", price: "₹100", image: "🥤" },
      { name: "Solo Cup", price: "₹50", image: "🥤" },
      { name: "Party Cup", price: "₹80", image: "🥤" },
      { name: "Premium Cup", price: "₹120", image: "🥤" },
    ]
  },
  {
    id: "novelties",
    name: "Novelties",
    icon: PartyPopper,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    products: [
      { name: "Twist Pop", price: "₹40", image: "🍭" },
      { name: "Ice Sandwich", price: "₹45", image: "🥪" },
      { name: "Candy Pop", price: "₹35", image: "🍬" },
      { name: "Fruity Bar", price: "₹50", image: "🍓" },
    ]
  },
  {
    id: "party-sharty",
    name: "Party Sharty",
    icon: PartyPopper,
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
    products: [
      { name: "Party Pack", price: "₹500", image: "🎉" },
      { name: "Mega Pack", price: "₹800", image: "🎊" },
      { name: "Family Pack", price: "₹600", image: "👨‍👩‍👧‍👦" },
      { name: "Kids Pack", price: "₹400", image: "🧒" },
    ]
  },
  {
    id: "tub-shub",
    name: "Tub Shub",
    icon: Coffee,
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    products: [
      { name: "500ml Tub", price: "₹200", image: "🥣" },
      { name: "1L Tub", price: "₹350", image: "🥣" },
      { name: "2L Tub", price: "₹600", image: "🥣" },
      { name: "Family Tub", price: "₹450", image: "🥣" },
    ]
  },
  {
    id: "cake-pastry",
    name: "Cake & Pastry",
    icon: Cake,
    color: "bg-gradient-to-br from-amber-400 to-yellow-500",
    products: [
      { name: "Ice Cream Cake", price: "₹800", image: "🎂" },
      { name: "Pastry", price: "₹120", image: "🍰" },
      { name: "Mini Cake", price: "₹400", image: "🧁" },
      { name: "Premium Cake", price: "₹1200", image: "🎂" },
    ]
  },
  {
    id: "candies",
    name: "Candies",
    icon: Candy,
    color: "bg-gradient-to-br from-red-400 to-pink-500",
    products: [
      { name: "Candy Mix", price: "₹30", image: "🍬" },
      { name: "Lollipop", price: "₹20", image: "🍭" },
      { name: "Gummy Bears", price: "₹40", image: "🐻" },
      { name: "Toffee Mix", price: "₹35", image: "🍬" },
    ]
  },
  {
    id: "chocobar",
    name: "Chocobar",
    icon: IceCream,
    color: "bg-gradient-to-br from-rose-400 to-red-500",
    products: [
      { name: "Dark Chocobar", price: "₹55", image: "🍫" },
      { name: "Milk Chocobar", price: "₹50", image: "🍫" },
      { name: "White Chocobar", price: "₹60", image: "🤍" },
      { name: "Nuts Chocobar", price: "₹65", image: "🥜" },
    ]
  },
  {
    id: "sorbet",
    name: "Sorbet",
    icon: Lollipop,
    color: "bg-gradient-to-br from-orange-400 to-pink-500",
    products: [
      { name: "Mango Sorbet", price: "₹80", image: "🥭" },
      { name: "Lemon Sorbet", price: "₹75", image: "🍋" },
      { name: "Berry Sorbet", price: "₹85", image: "🍓" },
      { name: "Orange Sorbet", price: "₹80", image: "🍊" },
    ]
  },
  {
    id: "kids-carnival",
    name: "Kids Carnival",
    icon: Tent,
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    products: [
      { name: "Fun Pack", price: "₹150", image: "🎪" },
      { name: "Cartoon Pop", price: "₹40", image: "🎈" },
      { name: "Rainbow Cup", price: "₹60", image: "🌈" },
      { name: "Kids Special", price: "₹100", image: "🎉" },
    ]
  },
];

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className="group flex flex-col items-center gap-3 transition-transform hover:scale-110"
                >
                  <div 
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}
                  >
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white text-center">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedCategory && (
        <ProductModal
          category={selectedCategory}
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </>
  );
};

export default ProductCategories;
