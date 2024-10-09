import React from 'react';
import Page from '@/components/page';
import { tw } from 'twind';
import Footer from '@/components/footer';
import Landing from '@/components/life-at-devsol/landing';
import Stories from '@/components/life-at-devsol/stories';
import Help from '@/components/life-at-devsol/help';

const AboutUs = () => (
    <Page>
        <Landing />
        <Stories />
        <Help />
        <Footer />
    </Page>
);

export default AboutUs;
