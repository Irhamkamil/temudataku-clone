const CardProduct = ({
  title,
  description,
  btnText = "Mulai Latihan",
  onClick
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">{title}</h2>
      <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
      <button
        className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition"
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default CardProduct;
