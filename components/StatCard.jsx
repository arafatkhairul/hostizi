export default function StatCard({ icon, number, label }) {
    return (
        <div className="text-center">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {icon}
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
            <div className="text-gray-600">{label}</div>
        </div>
    );
}

