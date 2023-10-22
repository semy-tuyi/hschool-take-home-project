export interface CourseInterface {
    id:string | number;
    name: string;
    author: string;
    progress: number;
    lessons: number;
}

export interface CourseStateInterface {
    courses: CourseInterface[];
    loading: boolean;
    error: string;
}