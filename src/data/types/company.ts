export interface CompanyType {
    id: string;
    name: string;
    image: string;
    email?: string;
    in_charge?: string;
    cellphone: string | null;
    slug: string;
}
