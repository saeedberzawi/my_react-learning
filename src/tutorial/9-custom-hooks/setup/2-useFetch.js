import { useCallback } from "react";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsAls, setProductAls] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const pro = await response.json();
    const newPro = pro.website.web;
    setProducts(newPro);
    const newOrp = pro.mainpage;
    setProductAls(newOrp);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, products, productsAls };
};
