import React from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = "https://course-api.com/javascript-store-products";
const url = "https://api-br.netlify.app";

const Example = () => {
  const {  products, productsAls } = useFetch(url);

  console.log(products);
  console.log(productsAls);
  return (
    <div>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        );
      })}
      {/* <h2>{loading ? "...loading" : "data"}</h2> */}
    </div>
  );
};

export default Example;
