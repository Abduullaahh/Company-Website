import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { tw } from 'twind';
import { useRouter } from 'next/router';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            category: `Web Development`,
            url: `/blogs/blog/web-development-trends-2024`,
            imageUrl: `/images/web-development.jpg`,
            title: `Top Web Development Trends for 2024`,
            content: `
                Explore the latest trends in web development and what to expect in 2024. 
                In recent years, web development has rapidly evolved with new technologies and best practices. 
                Some of the key trends expected to shape 2024 include the growth of Progressive Web Apps (PWAs), 
                increased focus on WebAssembly for faster web applications, and the integration of AI in web development tools.
            `,
        },
        {
            id: 2,
            category: `Mobile Apps`,
            url: `/blogs/blog/best-mobile-development-frameworks`,
            imageUrl: `/images/mobile-apps.jpg`,
            title: `Best Mobile Development Frameworks for 2024`,
            content: `
                A guide to the best frameworks for mobile app development in 2024. As mobile technology continues to grow, 
                developers are seeking frameworks that offer flexibility, performance, and seamless cross-platform compatibility. 
                In 2024, Flutter, React Native, and Kotlin Multiplatform are expected to dominate the mobile app development landscape.
            `,
        },
        {
            id: 3,
            category: `UI/UX Design`,
            url: `/blogs/blog/ui-ux-design-best-practices`,
            imageUrl: `/images/ui-ux-design.jpg`,
            title: `UI/UX Design Best Practices`,
            content: `
                Learn about the top best practices for creating intuitive UI/UX designs. With an increased focus on user-centered 
                design, the importance of empathy in design and ensuring seamless user experiences is critical. 
                Designers are leveraging research-backed insights and data-driven techniques to enhance usability and functionality in 2024.
            `,
        },
        {
            id: 4,
            category: `DevOps`,
            url: `/blogs/blog/implementing-devops-pipelines`,
            imageUrl: `/images/devops.jpg`,
            title: `Implementing DevOps Pipelines in 2024`,
            content: `
                A comprehensive guide to building efficient DevOps pipelines in 2024. DevOps has become the backbone of modern software 
                development and delivery. From continuous integration/continuous delivery (CI/CD) pipelines to containerization with Docker 
                and Kubernetes, understanding the latest DevOps tools and practices is key to staying competitive.
            `,
        },
        {
            id: 5,
            category: `Artificial Intelligence`,
            url: `/blogs/blog/ai-transforming-software-development`,
            imageUrl: `/images/ai.jpg`,
            title: `How AI is Transforming Software Development`,
            content: `
                Discover how AI is revolutionizing software development processes. Artificial intelligence is playing an increasingly vital role 
                in automating repetitive tasks, enhancing code quality, and even predicting future software requirements. In 2024, AI-powered 
                development tools will become indispensable to developers seeking to improve efficiency.
            `,
        },
        {
            id: 6,
            category: `Cloud Computing`,
            url: `/blogs/blog/cloud-computing-security-trends`,
            imageUrl: `/images/cloud-computing.jpg`,
            title: `Cloud Computing Security Trends in 2024`,
            content: `
                Stay updated on the latest security trends in cloud computing. As organizations increasingly migrate to the cloud, the need 
                for robust security measures grows. Key areas to watch in 2024 include multi-cloud security, zero-trust architectures, 
                and advances in encryption technologies.
            `,
        },
        {
            id: 7,
            category: `Software Testing`,
            url: `/blogs/blog/automated-testing-benefits`,
            imageUrl: `/images/software-testing.jpg`,
            title: `Benefits of Automated Testing`,
            content: `
                Understand the importance and benefits of automated testing in modern software development. Automated testing can save 
                time, reduce errors, and increase productivity. In 2024, developers will continue to refine their use of automated testing tools 
                to streamline the testing phase of the software lifecycle.
            `,
        },
        {
            id: 8,
            category: `Cybersecurity`,
            url: `/blogs/blog/cybersecurity-best-practices`,
            imageUrl: `/images/cybersecurity.jpg`,
            title: `Cybersecurity Best Practices in 2024`,
            content: `
                Learn the best practices for keeping your software secure in 2024. From enhancing data encryption methods to combating 
                ransomware and insider threats, cybersecurity remains one of the most critical areas of concern for businesses worldwide. 
                The blog provides essential tips and strategies for securing your digital assets.
            `,
        },
        {
            id: 9,
            category: `Blockchain`,
            url: `/blogs/blog/blockchain-software-development`,
            imageUrl: `/images/blockchain.jpg`,
            title: `Blockchain in Software Development`,
            content: `
                How blockchain is being integrated into software development processes. Blockchain technology, originally known for 
                cryptocurrencies, is now finding applications in software development. It offers decentralized and secure methods for managing 
                transactions, enhancing transparency, and fostering trust in digital systems.
            `,
        },
        {
            id: 10,
            category: `Project Management`,
            url: `/blogs/blog/agile-vs-scrum-differences`,
            imageUrl: `/images/project-management.jpg`,
            title: `Agile vs Scrum: Key Differences`,
            content: `
                A detailed comparison of Agile and Scrum methodologies. While both are widely used frameworks in blog management, 
                they offer different approaches. Understanding the nuances between Agile and Scrum is crucial for teams looking to 
                improve productivity and deliver high-quality results.
            `,
        },
    ];
    const [searchQuery, setSearchQuery] = useState(``);

    // Filter blogs based on the search query
    const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase().includes(searchQuery.toLowerCase()));

    const router = useRouter(); // Use the useRouter hook

    const handleProjectClick = (blog) => {
        localStorage.setItem(`blogData`, JSON.stringify(blog));
        router.push(`${blog.url}`); // Navigate to blog description page
    };

    return (
        <>
            <section className={tw`py-12`}>
                <div className={tw`container mx-auto`}>
                    {/* Blog banner wrapper */}
                    <div
                        style={{
                            display: `flex`,
                            flexWrap: `wrap`,
                            justifyContent: `space-between`,
                            alignItems: `flex-end`,
                            padding: `2% 10%`,
                            position: `relative`,
                        }}
                        className={tw`flex-col md:flex-row`}
                    >
                        <div className={tw`w-full md:w-1/2`} style={{ width: `100%` }}>
                            {/* Blog title */}
                            <h1
                                className={tw`text-4xl lg:text-6xl font-light text-left pb-4`}
                                style={{ width: `75%`, color: `#014C8B` }}
                            >
                                Discover In-Depth Blogs on Latest Technology, and Innovation
                            </h1>
                            {/* Blog description */}
                            <p className={tw`mt-4 text-lg`} style={{ width: `90%` }}>
                                Explore our comprehensive blog covering the latest advancements in Artificial Intelligence (AI),
                                technology trends, and the philosophy of simplicity in an increasingly complex world. Learn how
                                cutting-edge innovations are shaping the future and discover actionable insights for businesses and
                                individuals alike.
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
                            onSubmit={(e) => e.preventDefault()} // Prevent default form submission
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
                                value={searchQuery} // Bind input value to state
                                onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
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
            <div className="section without-top-space">
                <div className="base-container w-container">
                    <div
                        className={tw`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
                        style={{ padding: `6% 10%` }}
                    >
                        {filteredBlogs.map((blog) => (
                            <div onClick={() => handleProjectClick(blog)}>
                                <div className={tw`flex flex-col justify-between`}>
                                    <div>
                                        <p className={tw`text-xs text-gray-500`}>{blog.category}</p>
                                        <div className={tw`relative w-full h-40 mb-4`}>
                                            <Image alt={blog.title} src={blog.imageUrl} layout="fill" className={tw`object-cover rounded`} />
                                        </div>
                                        <h5 className={tw`text-lg font-bold text-gray-800`}>{blog.title}</h5>
                                        <p className={tw`text-sm text-gray-600 line-clamp-3 mt-2`}>{blog.content}</p>
                                    </div>
                                    <p className={tw`mt-2 text-blue-600 font-semibold`}>
                                        Read more<span className={tw`ml-1`}>→</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
