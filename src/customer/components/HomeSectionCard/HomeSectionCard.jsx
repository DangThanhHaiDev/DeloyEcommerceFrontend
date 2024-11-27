const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg overflow-hidden
    w-[15rem] mx-3 py-5 hover:translate-y-3 transition-transform duration-300 else-in-out max-xl:w-full"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt="product"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 py-2">
          {product.brand}
        </h3>
        <p className="text-md text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};
export default HomeSectionCard;
