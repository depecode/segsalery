import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <section className="w-full bg-gray-100 py-8">
            <div className=" mx-auto px-4">
                <footer className="w-full bg-[#0B132B] text-white py-12 px-6 md:px-12 rounded-2xl">
                    <div className="text-center">
                        <p className="text-sm text-gray-400 mb-2">
                            Ready to level up your tech game?
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
                            Join a community that&apos;s <br className="hidden md:block" />
                            building, growing, and <br className="hidden md:block" />
                            giving back.
                        </h2>

                        <Link href="https://t.me/+jh9aL-fYeB04Mjlk">
                            <button className="px-6 py-3 bg-primary text-white text-base font-medium rounded-full hover:bg-secondary transition inline-flex items-center gap-2">
                                Join Community
                                <Image src="/images/icons/Community.svg" alt="Segsalerty Logo" className="h-8" />
                            </button>
                        </Link>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <Image src="images/segsalerty-green-2.svg" alt="Segsalerty Logo" className="h-8" />
                        </div>

                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} SEGSALERTY. All rights reserved.
                        </div>

                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/Fb.svg" alt="Facebook" width={40} height={40} className="mx-0" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/Tw.svg" alt="Twitter" width={40} height={40} className="mx-0" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/Lg.svg" alt="Instagram" width={40} height={40} className="mx-0" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/Ln.svg" alt="LinkedIn" width={40} height={40} className="mx-0" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>

    );
}


