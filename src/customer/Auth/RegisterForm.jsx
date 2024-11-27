import { Button, Grid, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import {  useNavigate } from "react-router-dom"
import { register } from "../../State/Auth/Action"

const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const useData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(register(useData))
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <Grid container sx={{ padding: 0 }} spacing={2}>
                    <Grid item xs={6}>
                        <TextField id="firstName" name="firstName" label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="lastName" name="lastName" variant="outlined" label="Last Name" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="email" name="email" variant="outlined" label="Email" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" id="password" name="password" label="Password" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" fullWidth sx={{ padding: 1.5, backgroundColor: "#9155fd" }}>Register</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="flex items-center justify-center">
                            <p>if you have already account? </p>
                            <Button sx={{fontSize: "1rem", textTransform:"none"}} onClick={()=>navigate("/login")}>Login</Button>
                        </div>

                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default RegisterForm