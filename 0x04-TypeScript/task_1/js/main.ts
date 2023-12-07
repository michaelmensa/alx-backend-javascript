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

//function printTeacher: 
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
};

// implement printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName.charAt(0).toUpperCase();
    return `${firstLetter}. ${lastName}`;
}
