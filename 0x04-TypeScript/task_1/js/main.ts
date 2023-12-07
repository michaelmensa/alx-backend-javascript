// define the teacher interface
export interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allow addtional attributes
}

// interface named directors that extends teacher
// attribute named numberOfReports(number)

export interface Directors extends Teacher {
    numberOfReports: number;
}
