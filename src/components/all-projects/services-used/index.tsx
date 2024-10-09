import React from 'react';
import { tw } from 'twind';

const ServicesUsed = () => (
    <div
        className={tw`flex justify-center items-center`}
        style={{ padding: `3% 3%`, margin: `5% 5%`, backgroundColor: `#F8F8F8`, borderRadius: `30px` }}
    >
        <div className={tw`w-full max-w-screen-lg`}>
            <div className={tw`text-center mb-4`}>
                <h5 className={tw`text-black text-xl pb-2`}>Services Used</h5>
                <h1 className={tw`text-4xl lg:text-5xl font-bold text-center pb-4`} style={{ color: `#014C8B` }}>
                    Innovation Solutions
                </h1>
            </div>
            <div className={tw`flex flex-wrap`}>
                <div className={tw`w-full md:w-1/4 mb-4`}>
                    <div className={tw`border-0 text-center`}>
                        <div className={tw`p-4`}>
                            <h1 className={tw`text-4xl lg:text-5xl font-bold text-center pb-4`} style={{ color: `#014C8B` }}>
                                10-12%
                            </h1>
                            <h5 className={tw`text-black font-normal text-xl`}>Revenue Growth</h5>
                        </div>
                    </div>
                </div>
                <div className={tw`w-full md:w-1/4 mb-4`}>
                    <div className={tw`border-0 text-center`}>
                        <div className={tw`p-4`}>
                            <h1 className={tw`text-4xl lg:text-5xl font-bold text-center pb-4`} style={{ color: `#014C8B` }}>
                                +95%
                            </h1>
                            <h5 className={tw`text-black font-normal text-xl`}>Customer Satisfaction</h5>
                        </div>
                    </div>
                </div>
                <div className={tw`w-full md:w-1/4 mb-4`}>
                    <div className={tw`border-0 text-center`}>
                        <div className={tw`p-4`}>
                            <h1 className={tw`text-4xl lg:text-5xl font-bold text-center pb-4`} style={{ color: `#014C8B` }}>
                                +250
                            </h1>
                            <h5 className={tw`text-black font-normal text-xl`}>Customer Expansion</h5>
                        </div>
                    </div>
                </div>
                <div className={tw`w-full md:w-1/4 mb-4`}>
                    <div className={tw`border-0 text-center`}>
                        <div className={tw`p-4`}>
                            <h1 className={tw`text-4xl lg:text-5xl font-bold text-center pb-4`} style={{ color: `#014C8B` }}>
                                +95
                            </h1>
                            <h5 className={tw`text-black font-normal text-xl`}>Project Diversification</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ServicesUsed;
