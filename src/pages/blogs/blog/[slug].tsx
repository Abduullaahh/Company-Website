import Page from '@/components/page';
import { tw } from 'twind';
import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';

const Blog = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('blogData');
        if (data) {
            setBlogData(JSON.parse(data));
        }
    }, []);

    return (
        <Page>
            <NextSeo
                title={`DevSol Blog - ${blogData?.title}`}
                description="Explore the DevSol Blog for expert insights, tips, and trends in web development, digital marketing, and design. Stay updated with our latest articles and enhance your project with cutting-edge technologies."
                canonical="https://www.devsol.com/blog"
            />
            {blogData ? (
                <div style={{ width: '60%', margin: '0 auto' }}>
                    {/* Blog Title */}
                    <h1 className={tw`text-4xl lg:text-4xl font-bold text-left pt-16 pb-8`} style={{ color: '#014C8B' }}>{blogData.title}</h1>

                    {/* Blog Image */}
                    <img
                        src={blogData.imageUrl}
                        alt={blogData.title}
                        className="pb-8 w-full max-w-screen-lg object-cover"
                    />

                    {/* Blog Content */}
                    <div className="text-md leading-relaxed pb-16 pt-8">
                        {blogData.content}
                    </div>
                </div>
            ) : (
                <p>Loading blog content...</p>
            )}
            <Footer />
        </Page>
    );
};

export default Blog;
