export type UserModel = {
    id: number;
    name: string;
    email: string;
    key: string;
    secret: string;
};

export type authRequest = Omit<UserModel, 'id'>;

export type authResponse = {
    data: UserModel | null;
    isOk: boolean;
    message: string;
};

export type BookModel = {
    id: number;
    author: string;
    cover: string;
    isbn: string;
    pages: number;
    published: number;
    title: string;
};
export type bookRequest = Omit<Partial<UserModel>, 'id'>;
export type getBooksResponse = {
    data: { book: BookModel, status:number }[] | null;
    isOk: boolean;
    message: string;
};
export type createBookResponse = {
    data: BookModel[] | null;
    isOk: boolean;
    message: string;
}