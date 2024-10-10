import React from 'react';
import { tw } from 'twind';
import Link from 'next/link';

const Landing = () => (
    <section
        id="services-hero"
        className={tw`relative h-screen overflow-hidden services-hero-section paragraph paragraph--type--career-banner paragraph--view-mode--default`}
    >
        {/* Background image */}
        <div className={tw`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(/images/landing.jpg)` }} />

        {/* Overlay */}
        <div className={tw`absolute inset-0 bg-black bg-opacity-30`} />

        {/* Content Container */}
        <div className={tw`relative z-10 container h-full flex items-end p-14`} style={{ padding: `10% 10%` }}>
            <div
                className={tw`row text-white`}
                data-anijs="if: load, on: window, do: fadeInRightSmall animated, before: scrollReveal"
            >
                <div className={tw`col-md-12 text-start`}>
                    <div className={tw`services-hero services-hero--mobilefull`}>
                        <div className={tw`services-hero-display`}>
                            <h6 />
                            <h1 className={tw`text-fillwhite text-5xl md:text-8xl font-light mb-8`}>Working at DevSol</h1>
                        </div>

                        <Link href="/about-us/#contact">
                            <button
                                type="button"
                                className={tw`bg-white text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 transform hover:scale-105 text-uppercase`}
                                data-anijs="if: mouseover, do: pulse animated"
                            >
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Landing;
