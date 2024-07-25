export interface LoginRequest {
    userId: string;
    password: string;
}
  
export interface RegisterRequest {
    userId: string;
    name: string;
    email: string;
    password: string;
    phone: string;
}