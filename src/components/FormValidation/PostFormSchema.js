import * as Yup from "yup";

const postFormSchema = Yup.object().shape({
    postText: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Must be longer than 2 characters")
        //максимальная длина - 20 символов
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required")
});
export default postFormSchema;