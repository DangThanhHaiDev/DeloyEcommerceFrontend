import { Button, Grid, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { login } from "../../State/Auth/Action"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const useData = {
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(login(useData))
    }
    return (
        <form action="" onSubmit={(event) => handleSubmit(event)} >
            <Grid container spacing={2} sx={{ padding: 0 }}>
                <Grid item xs={12}>
                    <TextField id="email" name="email" label="Email" required variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="password" name="password" label="Password" required variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth sx={{ padding: "0.8rem" , backgroundColor:"#9155fd"}}>Login</Button>
                </Grid>
                <Grid item xs={12}>
                    <div className="flex justify-center">
                        <p className="flex items-center justify-center">Don't have an account?</p>
                        <Button onClick={()=> navigate('/register')} sx={{fontSize:"0.8rem"}}>Sign Up here</Button>
                    </div>
                </Grid>
            </Grid>
        </form>

    )
}

export default LoginForm