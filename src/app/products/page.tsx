import axios from "axios";

export default async function Page() {
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

  let productDetail: any = [];

  return (
    <div>
      {products?.map((item: any) => (
        <div className="w-full rounded-xl shadow-md flex p-6 bg-white text-black">
          {item?.id} : {item.title}
          <img width={50} height={50} alt={item.title} src={item.image} />
        </div>
      ))}
      <div>This is Product id</div>

      {productDetail.map((item: any) => (
        <div>1</div>
      ))}
    </div>
  );
}
