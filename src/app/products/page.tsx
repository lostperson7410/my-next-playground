import { DemoFrom } from "@/component/Form/DemoForm";
import axios from "axios";
import Link from "next/link";

export default async function Page() {
  let productDetail: any = [];
  const getProducts = async () => {
    const res: any = await axios.get("https://fakestoreapi.com/products");
    return res?.data;
  };

  const getProductById = async (id: number) => {
    const res: any = await axios.get(
      `https://fakestoreapi.com/products/${id || 1}`
    );
    productDetail = res?.data;
  };

  const products: any = await getProducts();


  const handleClick = () => {
    console.log("this is click");
  };
  return (
    <div className="w-full flex flex-row flex-wrap gap-10 mg-16">
      <div>
        this will be Form From Client 
        <DemoFrom/>
      </div>
        {products?.map((item: any, index: number) => (
          <div
            key={index}
            className=" h-auto  rounded shadow-md flex flex-col bg-white text-black justify-center items-center"
          >
            <img width={50} height={50} alt={item.title} src={item.image} />
            {item.title}

            <Link href={`products/${item.id}`}>
              <button className="w-full rounded px-16 bg-blue-200 hover:bg-blue-500 text-gray-50">
                <p>go to Product Detail</p>
              </button>
            </Link>
          </div>
        ))}
    </div>
  );
}
