const SectionCard = ({
  productName,
  productDescription,
  productImgSrc,
  price,
}) => {
  return (
    <div className="text-center">
      <div className="pt-6 p-3 mx-3 border-2 border-gray my-4 space-y-4 rounded-md bg-slate-200">
        <h2 className="uppercase text-lg font-black"> {productName}</h2>
        <div className="flex gap-2">
          <p className="text-base italic my-auto">{productDescription}</p>
          <img
            src={productImgSrc}
            alt="imagen comida"
            className="mx-auto m-2 border-2 border-blue w-32 h-32"
          />
        </div>
        <p className="text-xl font-extrabold pb-2 text-black italic">$<span className="text-2xl italic">{price}</span></p>
      </div>
    </div>
  );
};

export default SectionCard;
