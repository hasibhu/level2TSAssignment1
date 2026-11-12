

// Solution No. - 1


const multiplyValue = (value: number, multiplier?: number): number => {
    
    return value * (multiplier ?? 2)
}





// Solution No. - 2

type Input = string | number | boolean;

type InputReturn = string | number;

const processInput = (input : Input): InputReturn => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    } else {
        if (input === true) {
            return "Active"
        } else {
            return "Inactive"
        }
    } 

}




// 3

const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};







// Solution No. - 4


const concatenateArrays  =  <T>(...arrays: T[][]) : T[] => {

    const result: T[] = [];

    for (const arr of arrays ) {
        result.push(...arr);
    }

    return result

}

// 5


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}


// 6

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map(item => item[key]);
};




// Solution No. - 7

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}



class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}






// Solution No. - 8


const validateAgeAsync = (age: number): Promise<string> => {

  return new Promise((resolve, reject) => {
    if (age < 18) {
        
        reject(new Error("Access Denied: Must be 18 or older"));
        
    } else {

      setTimeout(() => {
          resolve("Access Granted");
          
      }, 1000);
    }
  });
};