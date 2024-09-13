import axios from "axios";

export const axios_api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export function fetch_api(path: string, init?: RequestInit) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    // const apiPrefix = "/questions";

    const url = new URL(path, baseUrl);

    return fetch(url, {
        ...init,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
