export interface Details {
    userId: number,
    education: any,
    qualification: string,
    institute: string,
    organisation: string,
    avarageMarks: number,
    totalMarks: number,
    otherDetails: any
}

export interface BasicDetails {
    userId: number,
    lastName: string,
    middleName: string,
    fatherName: string,
    motherName: string,
    mobileNumber: string,
    email: string,
    language: string,
    DOB: Date,
    maritalStatus: string,
    religion: string,
    cast: string,
    nationality: string
}

export interface Files {
    userId: number,
    photo: any,
    leavingCertificate: any,
    birthCertificate: any,
    aadharCard: any,
    markSheet: any
}