import React from 'react';
import { Check } from 'lucide-react';

const FeatureItem = ({ children }) => (
    <div className="flex items-start mb-4">
        <Check className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
        <p className="text-gray-700">{children}</p>
    </div>
);

const Features = () => (
    <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-4" style={{ color: `#014C8B` }}>
            Features
        </h2>
        <p className="text-gray-700 mb-6">
            Initially, most companies opt for a manual process that involves a lot of busywork for the HR department:
        </p>
        <div>
            <FeatureItem>Academic management systems for streamlined processes.</FeatureItem>
            <FeatureItem>Digital learning platforms to support online and hybrid education.</FeatureItem>
            <FeatureItem>Integrated campus management solutions.</FeatureItem>
            <FeatureItem>User-friendly student and faculty portals.</FeatureItem>
            <FeatureItem>Advanced data analytics for improved institutional decision-making.</FeatureItem>
            <FeatureItem>Robust security features to protect data and ensure compliance.</FeatureItem>
            <FeatureItem>Scalable solutions to adapt to the university's growing needs.</FeatureItem>
        </div>
    </div>
);

export default Features;
