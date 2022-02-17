import React from 'react';
import {Box, Typography, TextField, Button, Card, CardContent} from '@mui/material';

export default function Login({handleSubmitLogin, handleChangeUsername, handleChangePassword, status}) {

  return (
    <Card
      variant="outlined"
      sx={{
        position: 'fixed',
        bgcolor: 'white',
        zIndex: 100,
        right: 0,
        maxWidth: 400
      }}>
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmitLogin}
          id="login-form"
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="Username"
            autoComplete="username"
            autoFocus
            onChange={handleChangeUsername}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChangePassword}
          />
          <div>{status}</div>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
              Sign In
          </Button>
        </Box >
      </CardContent>
    </Card>
  );
}