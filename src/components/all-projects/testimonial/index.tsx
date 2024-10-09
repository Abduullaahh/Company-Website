import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating }) => (
    <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" style={{ color: `gold` }} />
        ))}
    </div>
);

const TestimonialCard = () => (
    <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md" style={{ padding: `2rem` }}>
        <h2 className="text-4xl font-bold text-blue-900 mb-4" style={{ color: `#014C8B` }}>
            Reviews from client
        </h2>
        <StarRating rating={5} />
        <p className="text-gray-800 mb-4 text-lg">
            DevSol demonstrated exceptional skill and dedication on the UNITEN project. Their ability to deliver sophisticated
            solutions with precision and creativity was instrumental in our success. Their team's professionalism and
            commitment to exceeding expectations were evident throughout the project. We confidently recommend TIERS Limited
            for their superior expertise and reliable service.
        </p>
        <div className="mt-4">
            <p className="font-bold text-gray-900">UNITEN</p>
            <p className="text-gray-600">CTO</p>
        </div>
    </div>
);

export default TestimonialCard;
