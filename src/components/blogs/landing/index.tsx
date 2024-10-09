import React from 'react';
import { tw } from 'twind';

const Landing = () => (
    <section className={tw`py-12`}>
        <div className={tw`container mx-auto px-4`}>
            {/* Blog banner wrapper */}
            <div
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    alignItems: `flex-end`,
                    padding: `2% 5%`,
                    position: `relative`,
                }}
                className={tw`flex-col md:flex-row`}
            >
                <div className={tw`w-full md:w-1/2`} style={{ width: `100%`, padding: `0 1rem` }}>
                    {/* Blog title */}
                    <h1 className={tw`text-4xl lg:text-6xl font-light text-left pb-4`} style={{ width: `50%`, color: `#014C8B` }}>
                        Discover In-Depth Blogs on Technology, and Innovation
                    </h1>
                    {/* Blog description */}
                    <p className={tw`mt-4 text-lg`}>
                        Explore our comprehensive blog covering the latest advancements in Artificial Intelligence (AI), technology
                        trends, and the philosophy of simplicity in an increasingly complex world. Learn how cutting-edge
                        innovations are shaping the future and discover actionable insights for businesses and individuals alike.
                    </p>
                </div>

                {/* Search form */}
                <form
                    action="/search"
                    className={tw`w-full md:w-1/2 mt-8 md:mt-0`}
                    style={{
                        display: `flex`,
                        flexDirection: `row`,
                        alignItems: `center`,
                        justifyContent: `flex-end`,
                        gap: `1rem`,
                        marginTop: `5%`,
                    }}
                >
                    <input
                        type="search"
                        name="query"
                        id="search-3"
                        placeholder="Search category"
                        required
                        className={tw`border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500`}
                        maxLength="256"
                        style={{ flex: 1 }}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className={tw`px-6 py-2 text-white rounded-md transition duration-300`}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `#003B6A`)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `#014C8B`)}
                        style={{ backgroundColor: `#014C8B` }}
                    />
                </form>
            </div>
        </div>
    </section>
);

export default Landing;
