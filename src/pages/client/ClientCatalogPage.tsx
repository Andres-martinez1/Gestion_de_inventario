import React from "react";
import ProductCatalogCard from "../../components/atomic/organisms/ProductCatalog";

const products = [
  {
    code: "001",
    name: "Hamburguesa Especial",
    description: "Carne de res, jamón, queso, tomate, cebolla, papas a la francesa, salsas.",
    image: "https://www.carniceriademadrid.es/wp-content/uploads/2022/09/smash-burger-que-es.jpg",
    price: 18000,
  },
  {
    code: "002",
    name: "Pizza Margarita",
    description: "Tomate, mozzarella, albahaca fresca, aceite de oliva.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2hdQeNVlyu20ReOpJcNwdgW0ER5hwxnauQ&s",
    price: 25000,
  },
  {
    code: "003",
    name: "Ensalada",
    description: "Lechuga romana, pollo, queso parmesano, aderezo César.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY07j5HbhW9tLFeTL0o3M5hyf9etCjw588tg&s",
    price: 15000,
  },
  {
    code: "004",
    name: "Sushi",
    description: "Arroz, alga, salmón, aguacate, pepino.",
    image: "https://www.elespectador.com/resizer/v2/JLYGWDUSXFDI7ITQECOXNAG674.jpg?auth=0f54d7f4ccbd1efe1d5f0f52340e459c2b699aa3a565fbc9c13a7e83b2912953&width=920&height=613&smart=true&quality=60",
    price: 30000,
  },
  {
    code: "005",
    name: "Tacos",
    description: "Tortilla de maíz, carne de cerdo, piña, cebolla, cilantro.",
    image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos-760x570.jpg",
    price: 20000,
  },
];

const ClientCatalogPage = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCatalogCard
          key={product.code}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ClientCatalogPage;
