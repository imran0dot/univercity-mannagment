export interface Tuser {
    id: string,
    password: string,
    needsPasswordChange: boolean,
    status: 'in-progress' | 'blocked',
    role: 'admin' | 'student' | 'teacher' | 'comity',
    isDeleted: boolean,
}
