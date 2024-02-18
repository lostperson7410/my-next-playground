"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

export default function ProductById(props: any): any {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<any>();

  const getProductById = async (id: any) => {
    const res: any = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetail(res?.data);
  };
  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <div className="w-full border-y-amber-300">
      {!productDetail ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-row gap-1">
          <div className="basis-1/3">
            <Image
              width={1080}
              height={720}
              alt={productDetail?.id}
              src={productDetail?.image}
            />
          </div>
          <div className="basis-2/3 ">
            <div className=" bg-white rounded-md w-3/4 text-black px-5 py-5">
              <p>{`Title: ${productDetail?.title}`}</p>
              <p>{`price: ${productDetail?.price}`}</p>
              <p>{`category: ${productDetail?.category}`}</p>
              <p>{`description: ${productDetail?.description}`}</p>
            </div>
          </div>
          <div>From here</div>
        </div>
      )}
    </div>
  );
}
