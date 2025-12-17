import { Facebook, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b
border-white/10">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold">
                            Your<span className="text-accent">Company</span>
                        </h3>
                        <p className="mt-4 text-white/70 text-sm leading-relaxed">
                            We help ambitious brands grow faster with SEO, digital marketing,and high-performance web solutions.
                        </p>
                    </div>
                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li>SEO Optimization</li>
                            <li>Digital Marketing</li>
                            <li>Web Development</li>
                            <li>PPC Advertising</li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li>About Us</li>
                            <li>Case Studies</li>
                            <li>Careers</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4">Stay Updated</h4>
                        <p className="text-white/70 text-sm mb-4">
                            Subscribe to our newsletter for insights & updates.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 rounded-l-xl text-textmain
focus:outline-none"
                            />
                            <button className="bg-secondary px-5 py-3 rounded-r-xl fontsemibold hover:opacity-90 transition">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="pt-8 flex flex-col md:flex-row items-center justifybetween gap-6">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} YourCompany. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-white/70">
                        <Facebook className="hover:text-white cursor-pointer" />
                        <Twitter className="hover:text-white cursor-pointer" />
                        <Linkedin className="hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
