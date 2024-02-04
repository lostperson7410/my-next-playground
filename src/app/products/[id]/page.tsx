"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function ProductById(props: any): any {
  const { id, ...param } = useParams();
  console.log("this is parman:", param);

  const getProductById = async (id: number) => {
    const res: any = await axios.get(`https://fakestoreapi.com/products/${id}`);
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
