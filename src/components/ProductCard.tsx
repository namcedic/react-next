// components/ProductCard.tsx
interface ProductCardProps {
  code: string;
  name: string;
  percentage: string;
  imageUrl: string;
}

export default function ProductCard({
  code,
  name,
  percentage,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-square">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 bg-red-500 text-white px-3 py-1 text-sm">
          {percentage}
        </div>
      </div>
      <div className="p-4">
        <div className="font-bold text-gray-700">{code}</div>
        <div className="text-lg font-semibold">{name}</div>
      </div>
    </div>
  );
}
