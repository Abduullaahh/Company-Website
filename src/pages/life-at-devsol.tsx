import React from 'react';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import Landing from '@/components/life-at-devsol/landing';
import Stories from '@/components/life-at-devsol/stories';
import Help from '@/components/life-at-devsol/help';

const AboutUs = () => (
    <Page>
        <NextSeo
            title="Life at DevSol - Join Our Innovative Team"
            description="Explore the vibrant culture at DevSol, where creativity meets technology. Discover our collaborative work environment, professional growth opportunities, and how we empower our team to thrive in web development and digital solutions."
            canonical="https://www.devsol.com/life-at-devsol"
        />
        <Landing />
        <Stories />
        <Help />
        <Footer />
    </Page>
);

export default AboutUs;
