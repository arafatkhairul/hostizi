import FeatureCard from '@/components/FeatureCard';
import PricingCard from '@/components/PricingCard';
import StatCard from '@/components/StatCard';
import { Award, ChevronRight, Cpu, Database, Globe, Headphones, Lock, Search, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: pageTitle("Home Portal")
}

export default function Home() {

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 bg-cover bg-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/hero-banner.png')" }}>
        <div className="container mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Build, expand your website without sweating
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Enjoy amazing speed and security for your website on a powerful hosting platform recommended by many professionals and trusted by 5,000+ users.
              </p>
            </div>

            {/* Right side - Image (hidden on mobile) */}
            <div className="hidden md:flex justify-end">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/hero.svg"
                alt="Server"
                className="w-[80%] h-auto mb-8"
              />
            </div>
          </div>
        </div>
      </header>


      {/* Domain Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 mt-[-90px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center bg-[rgb(239,246,255)] p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Left side - Domain Search Box */}
            <div className="order-1 md:order-1">
              {/* Domain Search Box */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-2 flex items-center mx-auto">
                  <Globe className="w-6 h-6 text-gray-400 ml-2" />
                  <input
                    id="domainSearchInput"
                    type="text"
                    placeholder="Search your Domain"
                    className="flex-1 px-4 py-3 outline-none"
                  // onKeyDown={(e) => {
                  //   if (e.key === 'Enter') {
                  //     const inputValue = e.target.value;
                  //     if (inputValue) {
                  //       window.location.href = `https://app.hostizi.com/cart.php?a=add&domain=register&query=${encodeURIComponent(inputValue)}`;
                  //     } else {
                  //       alert('Please enter a domain to search!');
                  //     }
                  //   }
                  // }}
                  />
                  <button
                    // onClick={() => {
                    //   const inputValue = document.getElementById('domainSearchInput').value;
                    //   if (inputValue) {
                    //     window.location.href = `https://app.hostizi.com/cart.php?a=add&domain=register&query=${encodeURIComponent(inputValue)}`;
                    //   } else {
                    //     alert('Please enter a domain to search!');
                    //   }
                    // }}
                    className="bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="order-2 md:order-2 text-gray-600 flex justify-center md:justify-end">
              <p className="text-lg mb-2">
                <span className="text-[#33C9FF] opacity-80 mr-4"><strong>.XYZ</strong></span>
                <span className="text-[#FF5722] opacity-80 mr-4"><strong>.SHOP</strong></span>
                <span className="text-[#FFC107] opacity-80 mr-4"><strong>.IO</strong></span>
                <span className="text-[#03A9F4] opacity-80 mr-4"><strong>.ORG</strong></span>
                <span className="text-[#4CAF50] opacity-80 mr-4"><strong>.NET</strong></span>
                <span className="text-[#9C27B0] opacity-80"><strong>.COM</strong></span>
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-6 mt-[-40px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Globe className="w-8 h-8 text-blue-600" />}
              number="99.9%"
              label="Uptime Guaranteed"
            />
            <StatCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              number="50K+"
              label="Happy Customers"
            />
            <StatCard
              icon={<Award className="w-8 h-8 text-blue-600" />}
              number="10+"
              label="Years Experience"
            />
            <StatCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              number="24/7"
              label="Expert Support"
            />
          </div>
        </div>
      </section>



      {/* Pricing Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <h2 className="mt-4 text-3xl font-bold text-center sm:text-2xl">Tailored Plans to Suit Every Requirement</h2>
          <p className="text-center mt-0 mb-4">Ensure your websites, apps, or servers run smoothly with our dependable,<br />24/7 high-quality managed web hosting services.</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <PricingCard
              icon={<img src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/shared.png" alt="Web Hosting Icon" className="w-24 h-24" />}
              title="Web Hosting"
              description="Ideal for getting started before moving on to a more advanced hosting package."
              price="120"
              shadowed={true}
            />
            <PricingCard
              icon={<img src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/reseller.png" alt="Web Hosting Icon" className="w-24 h-24" />}
              title="Reseller Hosting"
              description="Perfect for webmasters or those looking to launch a web hosting business."
              price="1350"
              shadowed={true}
            />
            <PricingCard
              icon={<img src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/domain.png" alt="Web Hosting Icon" className="w-24 h-24" />}
              title="Virtual Private Server"
              description="Start with a VPS or benefit from the adaptability of our SSD VPS solutions."
              price="1600"
              shadowed={true}
            />
            <PricingCard
              icon={<img src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/managed-cloud.png" alt="Web Hosting Icon" className="w-24 h-24" />}
              title="Dedicated Server"
              description="Grow your business site to the next level with our dedicated server plans."
              price="12,500"
              shadowed={true}
            />
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <h2 className="mt-4 text-3xl font-bold text-center mb-6 sm:text-2xl">Why Choose Hostizi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Maximum Performance"
              description="OneHost BD maintain guaranteed 99.99% uptime. It's very important."
            />
            <FeatureCard
              icon={<Headphones className="w-8 h-8 text-blue-600" />}
              title="Dedicated Support"
              description="Our all clients get friendly support from us. We care for all clients equally."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Maximum Security"
              description="We maintain strong protection for the server. Protected server, safe website."
            />
            <FeatureCard
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Weekly Backup"
              description="We’ll give you weekly backup. You will be able to recover your website fully."
            />
          </div>
        </div>
      </section>


      {/* Features Section 2 */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mt-4 mb-6 sm:text-2xl">Advance Features for your Best Experience!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Left side - Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Best Web Hosting Company in <span className="text-[rgb(59,130,246)]">Bangladesh</span>.
              </h2>
              <p>
                Hostizi offers premium web hosting services with a focus on affordability, security, and reliability. Whether you're a small business, a large enterprise, or an individual, Hostiza ensures your online presence is fast, secure, and always available.
              </p>
              <ul className="list-none pl-5 space-y-2 mt-5">
                <li className="flex items-center">
                  <span className="text-white bg-[rgb(59,130,246)] rounded-full flex items-center justify-center w-6 h-6 mr-2">
                    &#10003;
                  </span>
                  Industry-leading Performance & Speed
                </li>
                <li className="flex items-center">
                  <span className="text-white bg-[rgb(59,130,246)] rounded-full flex items-center justify-center w-6 h-6 mr-2">
                    &#10003;
                  </span>
                  30 days Money-back Guarantee
                </li>
              </ul>
            </div>
            {/* Right side - Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/hotim-bg.png"
                alt="Server"
                className="w-[70%] h-auto"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Features Section 3 */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <p className="mt-4 mb-0 font-bold text-center text-[rgb(59,130,246)]">EXCITING FEATURES</p>
          <h2 className="text-3xl font-bold text-center sm:text-2xl">All Plans Included</h2>
          <p className="text-center mt-0 mb-4">Some of the reasons why you'll enjoy hosting with us.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-blue-600" />}
              title="Lightning Speed"
              description="Any website's speed is crucial. We use the 9x faster LiteSpeed server than Apache for our web hosting."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-600" />}
              title="Control Panel"
              description="We want to make it simple for everyone to establish a website, so we need to be able to provide an expensive cPanel."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-blue-600" />}
              title="Powerful Hardware"
              description="We're using enterprise-grade hardware to give your site an extra speed boost! NVMe SSD RAID-10 is standard on all of our servers."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-blue-600" />}
              title="Solid Security"
              description="With enterprise-grade security, Solid Security, Firewall technologies, you can safeguard your brand and audience."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-blue-600" />}
              title="Money Guarantee"
              description="We're so confident in our web hosting service that we back it up with a 30-day money-back guarantee."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-blue-600" />}
              title="Full Flexibility"
              description="With monthly contract terms, you have complete flexibility. You can change your bundle at any moment to fit your needs."
            />
            <FeatureCard
              icon={<ChevronRight className="w-8 h-8 text-blue-600" />}
              title="Transparency"
              description="Before you place an order, you will receive complete information about the goods, package, and price."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="SSL Certificate"
              description="A free SSL certificate is included with every site hosted by Limda Host in order to avoid any insecure warnings."
            />
          </div>
        </div>
      </section>



      {/* Features Section 4 */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            {/* Left side - Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/laptop-server-3.png"
                alt="Server"
                className="w-[70%] h-auto"
              />
            </div>
            {/* Right side - Text */}
            <div className="order-2 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Migrate Your Site and Get Top Notch Site Security
              </h2>
              <p>
                Migrating your site can be stressful, which is why we have a dedicated team of experts ready to help. Save time and money by taking advantage of Hostizi's free and easy migration service.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Promotions Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <p className="mt-4 mb-0 font-bold text-[rgb(59,130,246)]">PROMOTIONS</p>
          <h2 className="text-2xl font-bold sm:text-2xl">Offer & Promos</h2>
          <p className="mt-0 mb-4">Hand-picked coupons, promo codes, discounts, and deals.</p>

          {/* Grid to display 2 images on mobile, 3 on larger screens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
            {/* Left side - Image 1 */}
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/free-ssl.png"
                alt="Free SSL"
                className="w-full h-auto"
              />
            </div>

            {/* Middle side - Image 2 */}
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/new-year.png"
                alt="New Year Promo"
                className="w-full h-auto"
              />
            </div>

            {/* Right side - New Image (Hidden on mobile) */}
            <div className="hidden sm:block flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/free-ssl.png"
                alt="Black Friday Promo"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Trusted Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <div
            className="relative grid grid-cols-1 gap-4 md:gap-8 items-center bg-cover bg-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            style={{
              backgroundImage: "url('https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/host-server-home.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgb(29_78_216/80%)] rounded-lg"></div>

            <div className="relative z-10 p-6 rounded-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Trusted by thousands of professionals
              </h2>
              <p className="text-white">
                Web developers from all over the world are using our products. Join them and build something!
              </p>

              {/* Stats Section - Side by Side */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 text-white">
                <div className="text-center">
                  <h3 className="text-4xl font-bold">5,000+</h3>
                  <p>Clients</p>
                </div>

                <div className="text-center">
                  <h3 className="text-4xl font-bold">10,000+</h3>
                  <p>Sites hosted</p>
                </div>

                <div className="text-center">
                  <h3 className="text-4xl font-bold">10+</h3>
                  <p>Datacenter locations</p>
                </div>

                <div className="text-center">
                  <h3 className="text-4xl font-bold">50+</h3>
                  <p>Servers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            {/* Left side - Text */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[rgb(59,130,246)]">
                5000+
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 sm:text-2xl">
                Clients believe on us
              </h2>
              <p>We hosted more than 5000 happy customers. Small website to high traffic website customers.
              </p>
            </div>
            {/* Right side - Image */}
            <div className="flex justify-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center md:justify-end">
                <img
                  src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/service-left.webp"
                  alt="Server"
                  className="w-[70%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Partner Section */}
      <section className="py-5">
        <div className="container mx-auto px-6">
          <p className="mt-4 mb-0 font-bold text-[rgb(59,130,246)]">HOSTIZI'S PARTNERS</p>
          <h2 className="text-2xl font-bold sm:text-2xl">Meet Partners</h2>
          <p className="mt-0 mb-4">We partner with a diverse array of exceptional companies.</p>
          {/* Grid to display images, 6 per row */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-8">
            {/* Row 1 */}
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/cpanel.png"
                alt="Promo 1"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/cyberpanellogo.png"
                alt="Promo 2"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/directadmin.png"
                alt="Promo 3"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/proxmox.png"
                alt="Promo 4"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/virtualizor.png"
                alt="Promo 5"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/webuzo.png"
                alt="Promo 6"
                className="w-full h-[30px] object-contain"
              />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/juniper.png"
                alt="Promo 7"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/apnic.png"
                alt="Promo 8"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/cloudlinux.png"
                alt="Promo 9"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/litespeed.png"
                alt="Promo 10"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/whmcs.png"
                alt="Promo 11"
                className="w-full h-[30px] object-contain"
              />
            </div>
            <div className="flex justify-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden p-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/partners/xyz_logo.png"
                alt="Promo 12"
                className="w-full h-[30px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their online presence.
            Get started today with our 30-day money-back guarantee.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Choose Your Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
