export const ProductCard = () => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                {/* Image */}
            </div>
            <div>
                <p className="text-sm text-gray-500">
                    Category
                </p>
                <p className="font-semibold text-lg">
                    Nama Produk
                </p>
            </div>
            <div className="flex items-center justify-between">
                Harga
            </div>

        </div>

    );
}
