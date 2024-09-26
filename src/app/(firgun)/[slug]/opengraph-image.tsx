import { ImageResponse } from "next/og";
import colors from "tailwindcss/colors";

import { fetch_api } from "@/data/api";
import { CompanyType } from "@/data/types/company";

// export const runtime = "edge";

export const alt = "About Acme";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

async function getCompany(slug: string): Promise<CompanyType> {
    const response = await fetch_api(`/check-company?slug=${slug}`, {
        next: {
            revalidate: 60 * 60, // 1 hour
        },
    });

    const company = await response.json();

    return company;
}

export default async function OgImage({
    params,
}: {
    params: { slug: string };
}) {
    const product = await getCompany(params.slug);

    return new ImageResponse(
        (
            <div
                style={{
                    background: colors.zinc[950],
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt="" style={{ width: "100%" }} />
            </div>
        ),
        {
            ...size,
        },
    );
}
