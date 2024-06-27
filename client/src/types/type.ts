
export interface IUser {
    _id?: string,
    fullname: string,
    username: string,
    email: string,
    password: string,
    passwordAgain?: string,
    bio: string,
    profilePicture?: any ,
    followers: [],
    followings: [],
    isAdmin: boolean,
    createdAt?: string,
    updatedAt?: string
    __v?: ""
}


export interface IUserRes {
    message: string,
    data: IUser,
    token: string | null
}


export interface IFile {
    file: File | string | FormData | any
}

export interface IFileRes {
    message: string,
    data: IFile
    token: string | null
}