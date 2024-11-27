import { useDispatch } from "react-redux";
import AddressCard from "../AddressCard/AddressCard";
import { Box, Button, Grid, TextField } from "@mui/material";
import { createOrder } from "../../../State/Order/Action";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DeleveryAddress = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate(location.search)
  const searchParams = new URLSearchParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    dispatch(createOrder({address, navigate}))
  };
  return (
    <Grid container className="px-20" sx={{ paddingTop: 2 }} columnSpacing={2}>
      <Grid
        item
        xs={12}
        lg={5}
        className="px-5 border overflow-y-scroll rounded-e-md h-[30.5rem] shadow-md"
        sx={{ textAlign: "center" }}
      >
        <AddressCard />
        <div className="w-full flex pl-5">
          <Button
            sx={{fontSize: "0.8rem", bgcolor: "RGB(145 85 253)" }}
            size="large"
            variant="contained"
            className="pl-5"
          >
            Delivery Here
          </Button>
        </div>
      </Grid>
      <Grid item lg={7} xs={12} className="border">
        <Box className="border rounded-s-md shadow-md p-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container sx={{ padding: 0 }} spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  className="firstName"
                  name="firstName"
                  fullWidth
                  label="First Name"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  className="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  required
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address"
                  className="address"
                  name="address"
                  required
                  fullWidth
                  label="Address"
                  multiline
                  rows={4}
                  autoComplete="street-address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="city"
                  className="city"
                  name="city"
                  label="City"
                  required
                  fullWidth
                  autoComplete="locality"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  className="state"
                  name="state"
                  label="State/Province/Region"
                  required
                  fullWidth
                  autoComplete="region"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="zip"
                  className="zip"
                  name="zip"
                  label="Zip / Postal code"
                  required
                  fullWidth
                  autoComplete="shipping postal/code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phoneNumber"
                  className="phoneNumber"
                  name="phoneNumber"
                  required
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="w-full flex">
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ bgcolor: "RGB(145 85 253)", mt: 2 }}
                    type="submit"
                  >
                    Delevery Here
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};
export default DeleveryAddress;
