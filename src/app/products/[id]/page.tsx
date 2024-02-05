"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function ProductById(props: any): any {
  const { id, ...param } = useParams();
  console.log("this is parman:", param);

  const getProductById = async (id: any) => {
    const res: any = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log('this is res product by is: ',res);
    
  };
  useEffect(() => {
    getProductById(id);
  }, [id]);
  return (
    <div className="w-full border-y-amber-300">
      <div>
        <div>{id}</div>
        <div>{id}</div>
        <div>{id}</div>
      </div>
    </div>
  );
}
