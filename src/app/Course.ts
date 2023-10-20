export interface Course {
    id?:string | number;
    name: string;
    author: string;
    progress: number;
    lessons: number;
}