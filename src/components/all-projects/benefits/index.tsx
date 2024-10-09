import React from 'react';
import { Settings, TrendingUp, Zap } from 'lucide-react';

const BenefitItem = ({ icon, title, description }) => (
    <div className="flex items-start mb-4">
        <div className="mr-4 mt-1">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-md text-gray-600">{description}</p>
        </div>
    </div>
);

const BenefitsGained = () => (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
        <div className="flex flex-wrap md:flex-row justify-center items-center" style={{ gap: `5%` }}>
            <div className="md:w-1/2 pr-8" style={{ width: `40%` }}>
                <h2 className="text-4xl lg:text-4xl text-left" style={{ color: `#014C8B`, paddingBottom: `2rem` }}>
                    The Benefits They Have
                    <br />
                    Gained From Using It
                </h2>
                <BenefitItem
                    icon={<Settings className="w-6 h-6 text-blue-600" />}
                    title="Efficient Technical Support"
                    description="Our efficient technical support team is dedicated to being your trusted IT partner."
                />
                <BenefitItem
                    icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
                    title="Enhanced Productivity"
                    description="In the fast-paced world of business, enhancing productivity is a constant challenge."
                />
                <BenefitItem
                    icon={<Zap className="w-6 h-6 text-blue-600" />}
                    title="Minimized Incidents"
                    description="Trust us for proactive monitoring, rapid incident response, and scalable solutions."
                />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="relative h-80 w-full rounded-lg overflow-hidden">
                    <img
                        src="/images/Team_of_programmers.png"
                        alt="Team collaboration"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default BenefitsGained;
