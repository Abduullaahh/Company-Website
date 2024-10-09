import React from 'react';
import Page from '@/components/page';
import { NextSeo } from 'next-seo';
import Footer from '@/components/footer';
import Team from '@/components/team';
import About from '@/components/about';
import Card from '@/components/card';
import ContactUs from '@/components/contact';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import(`../components/Map`), { ssr: false });

const AboutUs = () => (
  <Page>
    <NextSeo
      title="About Us - DevSol | Expert Software Development & Digital Solutions"
      description="Discover DevSol, your trusted partner in web development and digital solutions. Our dedicated team specializes in custom web applications, innovative design, and strategic digital marketing to help your business thrive in the online landscape."
      canonical="https://www.devsol.com/life-at-devsol"
    />
    <About />
    {/* <Team/> */}
    <Card />
    <DynamicMap />
    <ContactUs />
    <Footer />
  </Page>
);

export default AboutUs;
