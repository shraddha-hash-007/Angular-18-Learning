export interface ICustomer {
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    role: string;
    createdDate: string; // Consider using Date if you want to handle it as a date object
    password: string;
    projectName: string;
    refreshToken: string | null;
    refreshTokenExpiryTime: string | null;
}