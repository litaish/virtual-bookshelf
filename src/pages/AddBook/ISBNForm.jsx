import { Buttons, Form, Layout } from "../../components/index";
import { FormProvider, useForm } from 'react-hook-form';
import { isbn_validation } from "../../utils";

export const ISBNForm = () => {
    const methods = useForm();

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        methods.reset();
    });

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                className="flex flex-col gap-6"
            >
                <Layout.SecondaryHeader text="Search By ISBN Using Google Books API" />
                <Form.Input {...isbn_validation} />
                <Buttons.ActionButton onClick={onSubmit} type="submit" text="Search" className="bg-blue-500 hover:bg-blue-600" />
            </form>
        </FormProvider>
    )
};
