import Image from 'next/image'
import Link from 'next/link';
import {links, priceTables, services, testimonials} from '../lib/constants';
import React from 'react';
import PriceTable from '../components/common/PriceTable';
import Snippet from '../components/common/Snippet';
import Testimonial from '../components/common/Testimonial';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SectionHeading from '../components/common/SectionHeading';
import ProgressBar from '../components/charts/ProgressBar';
import SkillBar from '../components/charts/SkillBar';
import ProgressCircle from '../components/charts/ProgressCircle';
import SkillCircle from '../components/charts/SkillCircle';
import {formatDate, getCategorySlug, getPublicBrand} from '../lib/utils';
import DefaultLink from '../components/navs/Link';
import Head from 'next/head';

export default function NotFound() {
  return (
      <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0 h-screen flex justify-center items-center" footerClass="mx-10">
          <Head>
              <title>Not Found - {getPublicBrand()}</title>
          </Head>
          <div className="text-white flex justify-center items-center flex-col">
              <SectionHeading as="h1" className="text-7xl">404</SectionHeading>
              <span>Page Not Found</span>
          </div>
      </DefaultLayout>
  )
}
