export default function ProductModal({ product, onClose }) {
    if (!product) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="mb-2">ราคา: <span className="text-green-600 font-bold">{product.price} บาท</span></p>
          <p className="mb-2">{product.description}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            ปิด
          </button>
        </div>
      </div>
    );
  }
  