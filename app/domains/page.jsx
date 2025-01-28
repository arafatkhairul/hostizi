import { Check, Globe, Search } from 'lucide-react';



export const metadata = {
    title: pageTitle("Domain Search")
}

export default function Domains() {

    const domainPrices = [
        { extension: '.com', price: 9.99 },
        { extension: '.net', price: 11.99 },
        { extension: '.org', price: 12.99 },
        { extension: '.io', price: 39.99 },
    ];

    const features = [
        'Free DNS Management',
        'Domain Privacy Protection',
        'Auto-renewal Protection',
        'Domain Lock',
        'Email Forwarding',
        '24/7 Support',
    ];


    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-5 bg-cover bg-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/hero-banner.png')" }}>
                <div className="container mx-auto px-6 mt-16">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-3xl font-bold text-white mb-6">
                            Find Your Perfect Domain Name
                        </h1>
                        <p className="text-xl text-blue-100 mb-8">
                            Secure your online identity with our competitive domain prices
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section 2 */}
            <section className="py-5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center rounded-lg">
                        {/* Left side - Text */}
                        <div className="grid grid-cols-1 gap-8 items-center text-center rounded-lg">
                            <h1 className="text-left font-bold text-[rgb(55,65,81)] text-4xl">
                                Find the perfect <span className="text-blue-600">domain name</span>
                            </h1>
                            <p className="text-left">
                                Do you need a perfect domain that suits your business right? You can can grab it from limda with very reasonable price. COOL!
                            </p>
                            <p className="text-left">
                                Enter your select domain name and choose any extension name in the next step (choose between .com, .online, .tech, .site, .net, and more)
                            </p>
                            <div className="grid grid-cols-1 gap-8 items-center text-center bg-[rgb(239,246,255)] p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                {/* Left side - Domain Search Box */}
                                <div className="order-1 md:order-1">
                                    {/* Domain Search Box */}
                                    <div className="max-w-2xl mx-auto">
                                        <div className="bg-white rounded-lg p-2 flex items-center mx-auto">
                                            <Globe className="w-6 h-6 text-gray-400 ml-2" />
                                            <input
                                                id="domainSearchInputBanner"
                                                type="text"
                                                placeholder="Search for your domain name"
                                                className="flex-1 px-4 py-3 outline-none"
                                            // onKeyDown={(e) => {
                                            //     if (e.key === 'Enter') {
                                            //         const inputValue = e.target.value;
                                            //         if (inputValue) {
                                            //             window.location.href = `https://app.hostizi.com/cart.php?a=add&domain=register&query=${encodeURIComponent(inputValue)}`;
                                            //         } else {
                                            //             alert('Please enter a domain to search!');
                                            //         }
                                            //     }
                                            // }}
                                            />
                                            <button
                                                // onClick={() => {
                                                //     const inputValue = document.getElementById('domainSearchInputBanner').value;
                                                //     if (inputValue) {
                                                //         window.location.href = `https://app.hostizi.com/cart.php?a=add&domain=register&query=${encodeURIComponent(inputValue)}`;
                                                //     } else {
                                                //         alert('Please enter a domain to search!');
                                                //     }
                                                // }}
                                                className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                                            >
                                                <Search className="w-6 h-6" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right side - Image */}
                        <div className="flex justify-center md:justify-end">
                            <img
                                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/domain-hero.png"
                                alt="Server"
                                className="w-[70%] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>



            <div className="container mx-auto px-6 py-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Domain Pricing</h2>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {domainPrices.map((domain, index) => (
                                <div
                                    key={domain.extension}
                                    className={`flex items-center justify-between p-6 ${index !== domainPrices.length - 1 ? 'border-b' : ''
                                        }`}
                                >
                                    <span className="text-lg font-semibold">{domain.extension}</span>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-2xl font-bold text-blue-600">
                                            ${domain.price}
                                        </span>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8">Included Features</h2>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="grid gap-4">
                                {features.map((feature) => (
                                    <div key={feature} className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <Check className="w-6 h-6 text-green-500" />
                                        </div>
                                        <span className="text-lg">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
