import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export function useForm(initialForm, validation) {
	let navigate = useNavigate();
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState(initialForm);
	//const [loading, setLoading] = useState(false);
	//const [response, setResponse] = useState(null);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validation(form));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//setLoading(true);
		//form Data
		const formData = new FormData();
		formData.append("name", form.name);
		formData.append("username", form.username);
		formData.append("email", form.email);
		formData.append("password", form.password);
		console.log(form);
		try {
			const request = await axios.post(
				"https://deploy-back-mangaka-v2.herokuapp.com/api/users/register",
				formData
			);
			const response = await request.data.msg;
			alert(response);
		} catch (error) {
			console.log(error);
		}
		
		setForm(initialForm);
		setErrors(initialForm);
		navigate("/");
	};

	return {
		form,
		errors,
		//loading,
		//response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
}
