import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container columnSpacing={8} spacing={2} sx={{padding: 2, gap: 1}}>
        <Grid xs={1} item>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 50, height: 50, bgcolor: "#9155fd"}}
            >
              Hai
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{textAlign: "left"}}>
          <div className="space-y-2 text-md">
            <div>
              <p className="font-semibold text-lg">Raam</p>
              <p className="opacity-60 text-sm">April 5, 2023</p>
            </div>
          </div>
          <Rating value={2.5} name="half-rating" readOnly precision={.5} sx={{fontSize: "1.2rem"}}/>
          <p className="text-sm">nice product, i love this shirt</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
