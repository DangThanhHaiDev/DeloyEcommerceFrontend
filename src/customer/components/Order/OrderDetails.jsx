import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/16/solid";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div>
        <OrderTraker activeStep={2} className="py-20" />
      </div>
      <Grid container className="space-y-5">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Grid
            item
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              padding: 2,
            }}
            className="shadow-xl rounded-md p-5 border"
          >
            <Grid item xs={6}>
              <div className="flex items-center">
                <img
                  className="w-[5rem] h-[5rem]"
                  src="https://aaajeans.com/wp-content/uploads/2021/12/Quan-jean-skinny-medium-blue-SKDCTRNZC_MBD-4.jpg"
                  alt="anh"
                />
                <div className="space-y-1 ml-5 text-left text-sm">
                  <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color: pink</span> <span>Size: M</span>
                  </p>
                  <p>Seller: Dang Thanh Hai</p>
                  <p>150$</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box
                sx={{ color: deepPurple[500] }}
                className="flex items-center space-x-2"
              >
                <StarIcon className="text-sm w-5 h-5" />
                <span className="text-sm">Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
