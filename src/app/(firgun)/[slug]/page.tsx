import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Formulary } from "@/components/formulary";
import { QuestionType } from "@/data/types/question";
import { axios_api, fetch_api } from "@/data/api";
import { CompanyType } from "@/data/types/company";

interface PageProps {
    params: {
        slug: string;
    };
}

async function getQuestions(): Promise<QuestionType[]> {
    const response = await fetch_api("/questions", {
        next: {
            revalidate: 86400, // 1 dia
        },
    });

    const result = (await response.json()) as QuestionType[];

    return result;
}

async function checkCompany(slug: string): Promise<CompanyType | null> {
    const response = await axios_api.get<CompanyType | null>(
        `/check-company?slug=${slug}`,
    );

    const result = response.data;

    return result;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const company = await checkCompany(params.slug);

    if (!company) {
        notFound();
    }

    return {
        title: company.slug,
    };
}

export async function generateStaticParams() {
    const response = await fetch_api('/list-companies')

    const companies: CompanyType[] = await response.json()

    return companies.map((company) => {
        return { slug: company.slug }
    })
}

export default async function Form({ params }: PageProps) {
    const questions = await getQuestions();

    return (
        <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col items-center gap-4 pt-16 max-lg:px-0">
            <Formulary questions_list={questions} slug={params.slug} />
        </div>
    );
}
