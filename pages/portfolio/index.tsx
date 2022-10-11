import DefaultLayout from '../../components/layouts/DefaultLayout';
import SectionHeading from '../../components/common/SectionHeading';
import {getAllPostSnippets, getAllProjectSnippets, sortByPublishedAt} from '../../lib/blog';
import {ProjectSnippet as ProjectSnippetType} from '../../lib/types';
import ProjectSnippet from '../../components/portfolio/ProjectSnippet';

export type Props = {
    snippets: ProjectSnippetType[];
}

export default function Index({snippets}: Props) {
    return (
        <DefaultLayout mainClass="p-6 md:p-10 pt-0 pb-0" footerClass="mx-10">
        <SectionHeading as="h1" className="text-2xl my-5">Portfolio</SectionHeading>
            <div className="flex flex-col md:flex-row  flex-wrap justify-between">
                {snippets.map(project => <ProjectSnippet key={project.slug} {...project} className=" w-full md:w-[49.3%] mb-4" />)}
            </div>
        </DefaultLayout>
    );
}

export const getStaticProps = async () => {
    const snippets = await getAllProjectSnippets();
    return {props: {snippets: snippets}}
}