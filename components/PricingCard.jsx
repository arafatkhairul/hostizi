import Link from "next/link";

export default function PricingCard({ title, price, description, icon, featured = false, shadowed = false }) {
    return (
        <div
            className={`rounded-lg p-6 text-center ${featured ? 'bg-blue-600 text-white ring-4 ring-blue-300' : 'bg-white'
                } ${shadowed ? 'shadow-lg hover:shadow-xl transition-shadow' : ''}`}
        >
            {icon && <div className="flex justify-center mb-4">{icon}</div>}
            <h3 className="text-xl font-semibold mb-2">{title}</h3> {/* Center Title */}
            {description && <p className="text-gray-600 mb-4">{description}</p>}
            <div className="mb-6">
                <p className="text-sm text-gray-500">Starting at</p>
                <span className="text-2xl font-bold">{price}৳</span>
                <span className={`ml-1 ${featured ? 'text-blue-100' : 'text-gray-600'}`}>/mo</span>
            </div>
            <Link
                href="/pricing"
                className={`block w-full py-2 rounded-lg font-semibold text-center transition-colors ${featured
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
            >
                Get Started
            </Link>
        </div>
    );
}

