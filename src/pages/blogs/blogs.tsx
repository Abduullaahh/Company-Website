import React from 'react';
import Page from '@/components/page';
import { tw } from 'twind';
import Footer from '@/components/footer';
import { NextSeo } from 'next-seo';
import Blogs from '@/components/blogs/all-blogs';
import Help from '@/components/life-at-devsol/help';

const AboutUs = () => (
    <Page>
        <NextSeo
            title="DevSol Blog - Insights on Software Development & Digital Solutions"
            description="Explore the DevSol Blog for expert insights, tips, and trends in web development, digital marketing, and design. Stay updated with our latest articles and enhance your project with cutting-edge technologies."
            canonical="https://www.devsol.com/blog"
        />
        <Blogs />
        <Help />
        <Footer />
    </Page>
);

export default AboutUs;
