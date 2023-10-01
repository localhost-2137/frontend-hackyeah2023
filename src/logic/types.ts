export interface University {
    academic: boolean;
    address: string;
    id: number;
    lat: number;
    lng: number;
    name: string;
    number_students: number;
    rank: number;
    subjects: Array<string>;
    url: string;
}