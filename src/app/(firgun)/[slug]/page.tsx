import { Metadata } from "next";
import Image from "next/image";
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
            revalidate: 60 * 1, // 1 dia
            // revalidate: 60 * 60 * 24, // 1 dia
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

export default async function Form({ params }: PageProps) {
    const questions = await getQuestions();
    // console.log(questions);

    return (
        <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col items-center gap-4 pt-14 max-lg:px-0">
            <Image
                src="/logo.svg"
                className="w-48 h-fit"
                width={550}
                height={550}
                alt="logo"
                priority
            />

            <Formulary questions_list={questions} slug={params.slug} />
        </div>
    );
}
