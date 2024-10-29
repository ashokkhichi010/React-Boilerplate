import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, FormControl, Box, Grid } from "@mui/material";
// import GoogleButton from "react-google-button";
import { authApi } from "../../services/api";

const Signup = () => {
	const navigate = useNavigate();

	const initialValues = {
		name: "",
		email: "",
		password: "",
		contactNumber: {
			countryCode: "91",
			phoneNumber: "",
		},
	};

	// Handle user registration
	const registerUser = async (values) => {
		const response = await authApi().register(values);
		if (response?.user) {
			navigate('/login'); // Navigate to login page after successful registration
		}
	};

	return (
		<Grid container sx={{ height: "100%" }}>
			<Grid item xs={false} sm={6} md={6} lg={6} sx={(theme) => ({
				height: "100%",
				backgroundColor: theme.palette.background.default,
				display: { xs: "none", sm: "block" }
			})}>
				{/* Placeholder for signup photo */}
			</Grid>

			<Grid item xs={12} sm={6} md={6} lg={6} sx={(theme) => ({
				height: "100%",
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.primary
			})}>
				<Box sx={{
					maxWidth: "350px",
					textAlign: "center",
					margin: "15% auto",
					justifyContent: "center",
					alignItems: "center",
					height: "50%",
				}}>
					<Typography variant="h4" sx={{ margin: "auto", fontWeight: 700 }}>SIGNUP</Typography>
					<Formik initialValues={initialValues} onSubmit={registerUser}>
						<Form>
							<FormControl variant="outlined" sx={{ width: "90%", padding: "5%" }}>
								<Field
									type="text"
									name="name"
									label="Full Name"
									variant="outlined"
									as={TextField}
									required
									size="small"
									margin="normal"
								/>
								<ErrorMessage name="name" component="div" />

								<Field
									type="email"
									name="email"
									label="User Name or Email"
									variant="outlined"
									as={TextField}
									required
									size="small"
									margin="normal"
								/>
								<ErrorMessage name="email" component="div" />

								<Field
									type="password"
									name="password"
									label="Password"
									variant="outlined"
									as={TextField}
									required
									size="small"
									margin="normal"
								/>
								<ErrorMessage name="password" component="div" />

								<Field
									type="text"
									name="contactNumber.phoneNumber"
									label="Contact Number"
									variant="outlined"
									as={TextField}
									required
									size="small"
									margin="normal"
								/>
								<ErrorMessage name="contactNumber.phoneNumber" component="div" />

								<Button type="submit" variant="contained" sx={{ marginTop: 3 }}>
									Register
								</Button>
							</FormControl>
						</Form>
					</Formik>
					<Typography sx={{ marginBottom: 2 }}>
						Already have an account? <Link to="/login">Login here</Link>
					</Typography>

					{/* <GoogleButton style={{ margin: "auto", font: "inherit" }} /> */}
				</Box>
			</Grid>
		</Grid>
	);
};

export default Signup;
