import { useState } from "react";

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = (ev) => {
        setFormState(initialState);
    }
  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
