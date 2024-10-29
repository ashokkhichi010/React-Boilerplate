import React from 'react';
import { Box, Typography, Grid, TextField, Button, FormControl, Alert } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation

const initialValues = {
  fullName: 'John Doe',
  email: 'john@example.com',
  phoneNumber: '123-456-7890',
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

// Validation schema
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  oldPassword: Yup.string().required('Old Password is required'),
  newPassword: Yup.string().min(8, 'New Password must be at least 8 characters').required('New Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const ForgotPassword = () => {
  const handleUpdateProfile = (values) => {
    // Handle updating profile logic here
    console.log('Updated Profile values:', values);
  };

  const handleChangePassword = (values) => {
    // Handle changing password logic here
    console.log('Changed Password values:', values);
  };

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        lg={6}
        sx={{
          height: '100%',
          backgroundColor: 'beige',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        {/* Forgot password photo section */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{ height: '100%', backgroundColor: '#e3dbff' }}
      >
        {/* Profile Info and Change Password section */}
        <Box
          sx={{
            maxWidth: '350px',
            textAlign: 'center',
            margin: '20px auto',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%', // Adjust the height as needed
          }}
        >
          <Typography variant="h4" sx={{ margin: 'auto', fontWeight: 700 }}>
            Forgot Password
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUpdateProfile} // Assuming this is for profile update
          >
            {({ isSubmitting }) => (
              <Form>
                <FormControl variant="outlined" sx={{ width: '90%', padding: '5%' }}>
                  <Field
                    type="text"
                    name="fullName"
                    label="Full Name"
                    as={TextField}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                  />
                  <ErrorMessage name="fullName" component={Alert} severity="error" />

                  <Field
                    type="email"
                    name="email"
                    label="Email"
                    as={TextField}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                  />
                  <ErrorMessage name="email" component={Alert} severity="error" />

                  <Field
                    type="tel"
                    name="phoneNumber"
                    label="Phone Number"
                    as={TextField}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                  />
                  <ErrorMessage name="phoneNumber" component={Alert} severity="error" />

                  <Field
                    type="password"
                    name="oldPassword"
                    label="Old Password"
                    as={TextField}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                  />
                  <ErrorMessage name="oldPassword" component={Alert} severity="error" />

                  <Field
                    type="password"
                    name="newPassword"
                    label="New Password"
                    as={TextField}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                  />
                  <ErrorMessage name="newPassword" component={Alert} severity="error" />

                  <Field
                    type="password"
                    name="confirmPassword"
                    label="Confirm New Password"
                    as={TextField}
                    variant="outlined"
                    size="small"
                    margin="normal"
                    required
                  />
                  <ErrorMessage name="confirmPassword" component={Alert} severity="error" />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: '#5900d0', marginTop: '10px' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Updating...' : 'Update Profile'}
                  </Button>
                </FormControl>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
