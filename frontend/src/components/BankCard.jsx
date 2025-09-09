export default function BankCard({ name, img, desc }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      {img && (
        <img
          src={img}
          alt={name}
          className="h-20 object-contain mb-3"
        />
      )}
      <h3 className="font-semibold text-lg">{name}</h3>
      {desc && <p className="text-gray-500 text-sm mt-1">{desc}</p>}
    </div>
  );
}
