import { Cpu, Database, Server, Shield } from 'lucide-react';

export const metadata = {
    title: pageTitle("Hosting")
}

export default function Hosting() {
    const features = [
        {
            icon: <Server className="w-12 h-12 text-blue-600" />,
            title: 'SSD Storage',
            description: 'Lightning-fast SSD storage for optimal performance',
        },
        {
            icon: <Database className="w-12 h-12 text-blue-600" />,
            title: 'Daily Backups',
            description: 'Automatic daily backups to keep your data safe',
        },
        {
            icon: <Shield className="w-12 h-12 text-blue-600" />,
            title: 'SSL Certificates',
            description: 'Free SSL certificates for enhanced security',
        },
        {
            icon: <Cpu className="w-12 h-12 text-blue-600" />,
            title: 'Latest Technology',
            description: 'Powered by latest generation Intel processors',
        },
    ];


    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-5 bg-cover bg-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/hero-banner.png')", }} >
                <div className="container mx-auto px-6 mt-16">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Professional Web Hosting
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Fast, secure, and reliable hosting for your website
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Premium Hosting Features</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Our hosting platform is built on enterprise-grade infrastructure,
                            ensuring maximum uptime and performance for your websites.
                        </p>
                        <div className="grid gap-6">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex items-start space-x-4">
                                    <div className="p-2 bg-blue-50 rounded-lg">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 transform skew-y-6 rounded-3xl"></div>
                        <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                            <h3 className="text-2xl font-bold mb-6">Hosting Specifications</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between pb-4 border-b">
                                    <span className="font-medium">Processor</span>
                                    <span>Intel Xeon Scalable</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b">
                                    <span className="font-medium">Memory</span>
                                    <span>Up to 32GB RAM</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b">
                                    <span className="font-medium">Storage</span>
                                    <span>NVMe SSD</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b">
                                    <span className="font-medium">Bandwidth</span>
                                    <span>Unmetered</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b">
                                    <span className="font-medium">Control Panel</span>
                                    <span>cPanel Included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
