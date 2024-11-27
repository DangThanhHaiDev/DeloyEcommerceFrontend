import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the way", value: "onTheWay" },
  { label: "Delivered", value: "delivered" },
  { label: "Cacelled", value: "cacelled" },
  { label: "Returned", value: "returned" },
];
const Order = () => {
  return (
    <div className="px-5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5 border">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold uppercase">Order status</h1>
              {orderStatus.map((item) => (
                <div className="flex items-center" key={item.value}>
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    defaultValue={item.value}
                  />
                  <label htmlFor={item.value} className="ml-3 text-gray-600">
                    {item.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} className="space-y-5">
          {
            [1,2,3,4].map((item)=>(
                <OrderCard />
            ))
          }
        </Grid>
      </Grid>
    </div>
  );
};
export default Order;
