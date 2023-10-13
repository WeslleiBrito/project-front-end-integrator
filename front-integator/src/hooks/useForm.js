import { useState } from "react"

export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState)

    const onChange = (event) => {

        const { name, value } = event.target
      
        setForm({ ...form, [name]: value })
    }

    const clearForm = () => {
        const clearedForm = {}

        Object.entries(form).forEach((item) => {
            const [key] = item
            clearedForm[key] = ""
        })
        setForm(clearedForm)
    }

    return [form, onChange, clearForm]

}