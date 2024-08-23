export default interface Article{
    _id: number,
    title: string,
    date: string,
    cover: string,
    teaser: string,
    reading_time: number,
    comments: Comment[],
    text: string,
    tags: string[]
}

export interface Comment{
    _id: number,
    user: User,
    date: Date,
    text: string
}

export interface User{
    _id: number,
    name: string,
    photo: string
}