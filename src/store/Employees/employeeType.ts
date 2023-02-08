export class GetAllEmployeesResponse {
  employees: Employee[];

  constructor(employees?: Employee[]) {
    this.employees = [];
    console.log(employees);
    if (employees !== undefined) {
      employees.forEach((employee) => {
        console.log(employee);
        this.employees.push(employee);
      });
    }
  }
}

export class GetEmployeeResponse {
  employee: Employee;

  constructor(
    id: number,
    name: string,
    salary: number,
    department: "HR" | "PS"
  ) {
    this.employee = new Employee(id, name, salary, department);
  }
}

export class CreateEmployeeResponse {
  employee: Employee;

  constructor(
    id: number,
    name: string,
    salary: number,
    department: "HR" | "PS"
  ) {
    this.employee = new Employee(id, name, salary, department);
  }
}

export class UpdateEmployeeResponse {
  employee: Employee;

  constructor(
    id: number,
    name: string,
    salary: number,
    department: "HR" | "PS"
  ) {
    this.employee = new Employee(id, name, salary, department);
  }
}

export class Employee {
  id: number;
  name: string;
  salary: number;
  department: "HR" | "PS";

  constructor(
    id: number,
    name: string,
    salary: number,
    department: "HR" | "PS"
  ) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}

export type EmployeesState = {
  employees?: Employee[];
  referencedEmployee?: Employee;
};
