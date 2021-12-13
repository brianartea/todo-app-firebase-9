import { Button, Grid } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = ({ type, color }) => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#1e1e1e"
      style={{ minHeight: "100vh" }}
    >
      <h3 className="center">
        Login below to access the
        <br /> Firebase v.9 Todo App.
        <br />
        <br />
        Everything is saved to Firebase!
        <br />
        <br />
        You can login on any device
        <br />
        and be able to view your todos.
        <br />
        <br />
      </h3>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={loginWithGoogle}
      >
        Sign in with Google
      </Button>
    </Grid>
  );
};

export default Login;
