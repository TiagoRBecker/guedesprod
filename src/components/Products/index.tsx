import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { CartContext } from "@/Context";

const Products = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    getProducts();
  }, []);
  const [categories, setCategories] = useState([]);

  const getProducts = async () => {
    const categories = await api.getCat();
    setCategories(categories.categories);
    return;
  };

  const addCart = (items: any) => {
    if (!session) {
      router.push(`/authentication/signin`);
      return;
    } else {
      addToCart(items);
    }
  };

  return (
    <section className="max-w-[1240px] mx-auto h-full">
      {categories.map(
        (
          categorie: {
            id: number;
            title: string;
            description: string;
            products: [{ price: number }];
            img: string;
          },
          index
        ) => (
          <div
            className="w-full h-full   border-t-4 border-[#3b8e7d] items-center justify-center py-10 mb-2 fle flex-col-reverse md:flex md:flex-row"
            key={index}
          >
            <div className="w-full h-full px-4  md:w-[60%]">
              {categorie.products.map((products: any, index: number) => (
                <div
                  className="w-full  justify-center flex flex-col gap-2 mb-2 "
                  key={index}
                >
                  <li
                    className="flex gap-2 cursor-pointer"
                    onClick={() => addCart(products)}
                  >
                    <p className="w-8 h-8 flex items-center justify-center btn rounded-sm text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </p>
                    <p className="text-[13px]">{products.title}</p>
                  </li>
                 
                </div>
              ))}
            <div className="w-full  flex items-center justify-center relative">
              <div className="scroll-down ">

              </div>
            </div>
            </div>
            <div className="w-full  px-4 md:w-[40%] flex flex-col gap-2">
              <div>
                <h1 className="text-[#1c124a] font-bold text-xl">
                  {categorie.title}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-color font-bold">
                  {(
                    Number(categorie.products[0]?.price as any) / 100
                  ).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                  unidade
                </p>
                <p>
                  ou{" "}
                  <span className="text-[#3b8e7d]">
                    {" "}
                    6x (
                    {(
                      Number(categorie.products[0]?.price as any) / 600
                    ).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}{" "}
                    + acréscimos)
                  </span>{" "}
                </p>
              </div>

              <div>
                <p className="text-[#1c124a] text-justify ">
                  {categorie.description}
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                <img
                  src={categorie.img}
                  alt={categorie.title}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Products;
