export interface ServerData {
    _embedded: Employees;
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
    next: Link;
    last: Link;
    profile: Link;
}

export interface Link {
    href: string;
}
export interface page{
    size: number;
    totalElement: number;
    totalPages: number;
    number: number;
}