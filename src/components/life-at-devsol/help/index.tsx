import React from 'react';
import { tw } from 'twind';
import Link from 'next/link';

const Help = () => (
    <section className={tw`pb-24`}>
        <div className={tw`title-wrap text-center`}>
            <h2 className={tw`text-5xl md:text-7xl font-light mb-8`} style={{ color: `#014A88` }}>
                How can we help you?
            </h2>
            <div className={tw`description mb-4`}>
                <p className={tw`text-lg text-gray-700`}>
                    Are you ready to push boundaries and explore new frontiers of innovation?
                </p>
            </div>
            <Link href="/about-us/#contact">
                <button
                    type="button"
                    className={tw`text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300 transform hover:scale-105 text-uppercase`}
                    style={{ backgroundColor: `#014A88` }}
                    data-anijs="if: mouseover, do: pulse animated"
                >
                    Let's work Together
                </button>
            </Link>
        </div>
    </section>
);

export default Help;
