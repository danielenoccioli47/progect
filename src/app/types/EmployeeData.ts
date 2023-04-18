export interface ServerData {
    _embedded: Employees;
    _links: Links;
    page: Page;
}

export interface Employees {
    employees: Employee[];
}

export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    hireDate: string;
    birthDate: string;
    link: Links;
}

export interface Links{
    first: Link;
    self: Link;
    prev: Link;
    next: Link;
    last: Link;
    profile: Link;
}

export interface Link {
    href: string;
}
export interface Page{
    size: number;
    totalElement: number;
    totalPages: number;
    number: number;
}