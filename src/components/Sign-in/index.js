import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography, TextField, Button, Box, Grid, FormControl } from "@mui/material";
// import GoogleButton from "react-google-button";
import { authApi } from "../../services/api";
import reduxData from "../../util/useReduxData";

const Login = () => {
	const navigate = useNavigate();
	const initialValues = { email: "", password: "" };

	// Handle user login
	const handleLogin = async (values) => {
		const response = await authApi().login(values);
		if (!response?.error) {
			reduxData("tokens", "set")(response.tokens);
			reduxData("profile", "set")(response.user);
			reduxData("device", "set")(response?.device);
			setTimeout(() => {
				navigate("/dashboard"); // Navigate to dashboard after a delay
			}, 100);
		}
	};

	return (
		<Grid container sx={{ height: "100%" }}>
			<Grid item xs={false} sm={6} md={6} lg={6} sx={(theme) => ({
				height: "100%",
				backgroundColor: theme.palette.background.default,
				display: { xs: "none", sm: "block" }
			})}>
				{/* Placeholder for login photo */}
			</Grid>
			<Grid item xs={12} sm={6} md={6} lg={6} sx={(theme) => ({
				height: "100%",
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.primary
			})}>
				<Box
					sx={{
						maxWidth: "350px",
						textAlign: "center",
						margin: "15% auto",
						justifyContent: "center",
						alignItems: "center",
						height: "50%",
					}}
				>
					<Typography variant="h4" sx={{ margin: "auto", fontWeight: 700 }}>LOGIN</Typography>
					<Formik initialValues={initialValues} onSubmit={handleLogin}>
						<Form>
							<FormControl variant="outlined" sx={{ width: "90%", padding: "5%" }}>
								<Field
									type="email"
									name="email"
									label="User Name or Email"
									as={TextField}
									variant="outlined"
									size="small"
									margin="normal"
									required
								/>
								<ErrorMessage name="email" component="div" />

								<Field
									type="password"
									name="password"
									label="Password"
									as={TextField}
									variant="outlined"
									size="small"
									margin="normal"
									required
								/>
								<ErrorMessage name="password" component="div" />

								<Link to="/forgot-password" style={{ margin: "20px auto" }}>
									Forgot Password
								</Link>

								<Button type="submit" variant="contained">
									Login
								</Button>
							</FormControl>
						</Form>
					</Formik>

					<Typography>
						Don't have an account? <Link to="/signup">Signup here</Link>
					</Typography>

					{/* <GoogleButton style={{ margin: "auto", font: "inherit" }} /> */}
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
