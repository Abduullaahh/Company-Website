import React from 'react';
import Page from '@/components/page';
import { tw } from 'twind';
import Footer from '@/components/footer';
import Team from '@/components/team';
import About from '@/components/about';
import Card from '@/components/card';
import ContactUs from '@/components/contact';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/Map'), { ssr: false });

const AboutUs = () => {
  return (
    <Page>
      <About/>
      {/* <Team/> */}
      <div className="container mx-auto px-4 py-8 my-8">
        <Card />
        
        {/* <div className="mt-12 mb-12 text-center">
          <h2 className={tw(`text-2xl font-semibold text-gray-900 mb-2`)}>
            Ready to enhance your online presence?
          </h2>
          <Button primary modifier="mt-6 w-50" aria-label="Start Your Project">
            Start Your Project
          </Button>
        </div> */}
      </div>
      <DynamicMap />
      <ContactUs />
      <Footer />
    </Page>
  );
};

export default AboutUs;
