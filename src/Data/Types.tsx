import { AxisDomain } from "recharts/types/util/types";

export interface GradNetIncome {
    percentageOfStudents: number,
    subject: string
}

export interface MedianEarnings {
    Earnings: number,
    Subject: String
}

export interface SalaryAfterFiveYears {
    priorAttainment: string,
    maleMedianEarnings: number,
    femaleMedianEarnings: number,
}

export interface StudentLoanRepayment {
    studentLoanPaidOff: number,
    salary: number
}

export interface StudentLoanProportion {
    studentLoanPaidOffPercent: number,
    Subject: string
}

export interface MedianSalaryProportion {
    University: string,
    MedianSalary: number,
    ProportionOfStudents: number,
}

export interface dataInfo {
    type: 'number' | 'category';
    dataKey: string;
    domain?: AxisDomain;
    unit?: string;
    formatter?: (value: any) => string;
    ticks?: any[];
}