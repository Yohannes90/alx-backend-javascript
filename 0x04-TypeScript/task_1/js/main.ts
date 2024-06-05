interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);


// eslint-disable-next-line @typescript-eslint/class-name-casing
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;
console.log(printTeacher('john', 'doe'));



interface StudentClassInterface {
    firstName: string;
    lastName: string;
}
interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface;
}
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'John', 'Doe');
console.log(student1);
