export interface TUser {
    id: string,
    password: string,
    needsPasswordChange: boolean,
    status: 'in-progress' | 'blocked',
    role: 'admin' | 'student' | 'teacher' ,
    isDeleted: boolean,
}
