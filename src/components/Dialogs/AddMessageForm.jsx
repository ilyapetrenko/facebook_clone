import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";

const AddMessageForm = (props) => {

    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            onSubmit={(values, {resetForm}) => {
                //props.updateNewMessageBody(values.newMessageBody)//вроде работает
                props.sendMessage(values.newMessageBody);
                console.log(props.dialogs)
                console.log(values)
                resetForm( {values: ''} );
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageBody'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                    </div>

                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}

export default AddMessageForm