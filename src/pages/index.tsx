import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="DevSol - Expert Web Development & Digital Solutions"
        description="DevSol offers top-notch web solutions including development, design, and digital marketing. Build your dream project with our expert team using the latest technologies."
        canonical="https://www.devsol.com"
        // openGraph={{
        //   url: 'https://www.devsol.com',
        //   title: 'DevSol - Expert Web Development & Digital Solutions',
        //   description: 'DevSol offers top-notch web solutions including development, design, and digital marketing. Build your dream project with our expert team using the latest technologies.',
        //   images: [
        //     {
        //       url: 'https://www.devsol.com/images/og-image.jpg',
        //       width: 800,
        //       height: 600,
        //       alt: 'DevSol - Premier Web Solutions Provider',
        //       type: 'image/jpeg',
        //     },
        //   ],
        //   site_name: 'DevSol',
        // }}
        // twitter={{
        //   handle: '@devsol',
        //   site: '@devsol',
        //   cardType: 'summary_large_image',
        // }}
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
