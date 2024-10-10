import React from 'react';
import { tw } from 'twind';

const data = [
    {
        title: `One team, one goal`,
        description: `Working at DevSol defines a community of people with a shared purpose. We believe in the power of a nurturing environment to enhance the quality of life for everyone. We are purpose-driven to push the boundaries of what is possible with IT & management solutions; our people make this possible as they are the strength behind our every success. The joint synergy fueled by our people fosters innovation while helping us to continually improve, deliver, and succeed as one team.`,
        image: `/images/One team, one goal.jpg`,
        alt: `One team, one goal`,
    },
    {
        title: `Learn, develop, and grow`,
        description: `We aim to be an employer of choice by empowering people to build careers anchored by purpose. We do this by offering employees numerous training opportunities, including access to management courses designed specifically for them. It enables employees to upskill in various ways and better position themselves for career advancement within the company.`,
        image: `/images/Learn, develop, and grow.jpg`,
        alt: `Learn, develop, and grow`,
    },
    {
        title: `Drive innovation and change`,
        description: `We offer a collaborative and agile working environment with a culture of innovation driven by values of courage, integrity, and empathy. The organization provides an enabling environment to experiment with ideas and learn from past practices because experience has taught us that we achieve far more together than we can alone. Here, we value your voice and have a genuine impact because we expect you to step outside your comfort zone. You will get an opportunity to work with brilliant people who will support you, allowing you to contribute to the community and become a better version of yourself.`,
        image: `/images/Drive innovation and change.jpg`,
        alt: `Drive innovation and change`,
    },
];

const Stories = () => (
    <section id="image-text" className={tw`image-text-section section-space`}>
        <div className={tw`container`} style={{ padding: `10% 5%` }}>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={tw`row g-0 align-items-center`}
                    style={{
                        display: `flex`,
                        flexDirection: index % 2 === 0 ? `row` : `row-reverse`,
                        justifyContent: `space-between`,
                    }}
                >
                    {/* Text Holder */}
                    <div
                        className={tw`col-12 lg:col-6 flex`}
                        style={{
                            padding: `0 5%`,
                            width: `40%`,
                            justifyContent: `center`,
                            alignItems: `center`,
                        }}
                    >
                        <div className={tw`text-holder`}>
                            <h2
                                className={tw`text-4xl lg:text-6xl font-light text-left pb-4`}
                                style={{ color: `#014C8B`, '--gradient-position': `1%` }}
                            >
                                {item.title}
                            </h2>
                            <p className={tw`mb-0`}>{item.description}</p>
                        </div>
                    </div>
                    {/* Image Holder - Hidden on small screens */}
                    <div className={tw`hidden lg:flex col-12 lg:col-6`} style={{ padding: `0 5%`, width: `55%` }}>
                        <div className={tw`img-holder`} style={{ overflow: `hidden` }}>
                            <img
                                src={item.image}
                                className={tw`img-fluid`}
                                alt={item.alt}
                                style={{
                                    transition: `transform 0.3s ease`,
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = `scale(1.1)`)}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = `scale(1)`)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Stories;
