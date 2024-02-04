"use client";
import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  Suspense,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import Image from "next/image";

export default function Page() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log("res", res);
    setProducts(res?.data);
  };

  return (
    <div>
      {products?.map((item: any) => (
        <div className="w-full rounded-xl shadow-md flex p-6 bg-white text-black">
          {item?.id} : {item.title}
          <img width={50} height={50} alt={item.title} src={item.image} />
        </div>
      ))}
      <div>This is Product id</div>
    </div>
  );
}
