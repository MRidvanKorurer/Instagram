
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
    __v?: string
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



export interface IPost {
    _id?: string,
    userId: string
    image: string,
    description: string,
    likes: [],
    createdAt?: string,
    updatedAt?: string
}



export interface IPostRes {
    message: string,
    data: IPost,
    token: string | null
}


export interface ILikeData {
    postId: string | undefined,
    userId: string | undefined
}