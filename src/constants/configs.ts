import * as yup from "yup";

export const bookInputsConfig = [
    { name: 'title', placeholder: 'Enter your title', label: 'Title', inputType: 'text' },
    { name: 'author', placeholder: 'Enter your author', label: 'Author', inputType: 'text' },
    { name: 'cover', placeholder: 'Enter your cover', label: 'Cover', inputType: 'text' },
    { name: 'published', placeholder: 'Enter your published', label: 'Published', inputType: 'date' },
    { name: 'pages', placeholder: 'Enter your pages', label: 'Pages', inputType: 'text' },
    { name: 'isbn', placeholder: 'Enter your isbn', label: 'Isbn *', inputType: 'text' },
];

export const bookSchema = yup
    .object()
    .shape({
        title: yup.string().notRequired().default(''),
        author: yup.string().notRequired().default(''),
        cover: yup.string().notRequired().default(''),
        published: yup.string().notRequired().default(''),
        pages: yup.string().notRequired().default(''),
        isbn: yup.string().required('Обязательно к заполнению'),
    })
    .required();

export type Inputs = yup.InferType<typeof bookSchema>;