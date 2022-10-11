import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import DefaultLayout from '../../components/layouts/DefaultLayout';
import SectionHeading from '../../components/common/SectionHeading';
import {getAllPosts, getAllProjects, getProjectBySlug} from '../../lib/blog';
import {Project as ProjectType} from '../../lib/types';
import {GetStaticProps} from 'next';
import {formatDate, getCategorySlug} from '../../lib/utils';
import Image from 'next/image';
import DefaultLink from '../../components/navs/Link';
import {testimonials} from '../../lib/constants';
import Testimonial from '../../components/common/Testimonial';
import React from 'react';

export type Props = {
    project: ProjectType,
}

export default function Project({project}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
            <article>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
                    <SectionHeading as='h1' className="text-3xl mt-5 mb-5 md:w-[80%]">{project.title}</SectionHeading>
                    <div className="text-white text-opacity-60 mb-5 md:mb-0">{formatDate(new Date(project.publishedAt))}</div>
                </div>
                <div className="relative h-[30vh]  md:h-[65vh]">
                    <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
                </div>

                <section className="mt-10">
                    <SectionHeading>Project Details</SectionHeading>
                    <div className="flex flex-col md:flex-row">
                        <div className="shadow-lg bg-primary-400 p-5 py-8 flex-1 mr-3">
                            <div className="flex justify-between">
                                <span className="text-white">Tech Stack:</span>
                                <span className="text-white text-opacity-70">{project.techStack}</span>
                            </div>
                            <div className="flex justify-between my-3">
                                <span className="text-white">Ordered On:</span>
                                <span className="text-white text-opacity-70">{formatDate(new Date(project.orderDate))}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white">Finished On:</span>
                                <span className="text-white text-opacity-70">{formatDate(new Date(project.finishedOn))}</span>
                            </div>
                        </div>

                        <div className="shadow-lg bg-primary-400 p-5 py-8 flex-1 mr-3 mt-5 md:mt-0">
                            <div className="flex justify-between">
                                <span className="text-white">Status:</span>
                                <span className="text-white text-opacity-70">{project.status}</span>
                            </div>
                            <div className="flex justify-between my-3">
                                <span className="text-white">Client:</span>
                                <span className="text-white text-opacity-70">{project.client}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-white">Location:</span>
                                <span className="text-white text-opacity-70">{project.location}</span>
                            </div>
                        </div>
                    </div>
                </section>


                <SectionHeading>Description</SectionHeading>
                <div className="prose prose-invert max-w-full m-0 prose-li:marker:text-secondary-100 prose-a:text-secondary-100 prose-a:no-underline hover:prose-a:text-secondary-50 prose-a:transition-colors prose-a:duration-300  prose-blockquote:border-l-secondary-100 text-white opacity-70 bg-primary-400 p-5 mt-5" dangerouslySetInnerHTML={{__html: project.__content}} />
                <div className="bg-primary-400 p-5 text-white">Added in {project.categories.map((cat, index) => <div key={cat} className="inline"><DefaultLink className="text-secondary-100 hover:text-secondary-50" href={`/portfolio/category/${getCategorySlug(cat)}`}>{cat}</DefaultLink> {index < project.categories.length - 1 ? ', ' : ''}</div>)}</div>
            </article>
            <section>
                <SectionHeading className="mt-10">Recommendations</SectionHeading>
                <Swiper
                    modules={[Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    speed={1500}
                    breakpoints= {{
                        300: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map(testimonial =>
                        <SwiperSlide key={testimonial.name}>
                            <div className="py-[23px]"><Testimonial {...testimonial}  /></div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
        </DefaultLayout>
    );
}

export const getStaticProps: GetStaticProps = async ({params})  => {
    try {
        const project = await getProjectBySlug(params?.slug as string);
        return {
            props: {project: project}, // will be passed to the page component as props
        }

    } catch (err) {

        return {
            props: {}, // will be passed to the page component as props
            notFound: true,
        }
    }
}


export const getStaticPaths = async() => {
    const allProjects = await getAllProjects();
    return {paths: allProjects.map(project => ({params: {slug: project.slug}})), fallback: false};
}