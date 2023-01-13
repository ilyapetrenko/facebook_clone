import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import postFormSchema from '../../FormValidation/PostFormSchema'


const AddPostForm = (props) => {
    return (
        <Formik
            initialValues={{
                postText: ''
            }}
            onSubmit={(values, {resetForm}) => {
                props.addPost(values.postText)
                resetForm( {values: ''} );
            }
            }
            validationSchema={postFormSchema}
        >
            {() => (
                <Form>
                    <h3>My posts</h3>
                    <div>
                        <Field
                            name={'postText'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                    </div>
                    <ErrorMessage name="postText" component="div"/>

                    <button type={'submit'}>Add post</button>
                </Form>
            )}
        </Formik>
    )
}

export default AddPostForm