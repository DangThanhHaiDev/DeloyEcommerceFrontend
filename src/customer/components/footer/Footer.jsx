import { Button } from "@headlessui/react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-alice-carousel";
import './footer.scss'

const Footer = () => {
  return (
    <div>
      <Grid container className="bg-black text-white text-center mt-10 py-3 max-lg:space-y-5">
        <Grid item xs={12} lg={3} className="sm: pb-2 md:pb-0">
          <Typography className="pb-3 block" variant="h6">
            {" "}   
            Company{" "}
          </Typography>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              About{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="sm: pb-2 md:pb-0">
          <Typography className="pb-3 block" variant="h6">
            {" "}
            Solutions{" "}
          </Typography>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Analytics{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Commerce{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Insigths{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Support{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="sm: pb-2 md:pb-0">
          <Typography className="pb-3 block" variant="h6">
            {" "}
            Documentation{" "}
          </Typography>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              API status{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="sm: pb-2 md:pb-0">
          <Typography className="pb-3 block" variant="h6">
            {" "}
            Legal{" "}
          </Typography>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Claim{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button
              className="pb-3 text-sm"
              variant="h6"
              gutterbottom="true"
            >
              {" "}
              Terms{" "}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} className="py-10">
            <Typography className="py-1" variant="body2" component="p">&copy 2023 My company. All rights reserved.</Typography>
            <Typography className="py-1" variant="body2" component="p">Made with love by me</Typography>
            <Typography className="py-1" variant="body2" component="p"></Typography>
            <Link href="https://www.facebook.com/profile.php?id=100071729765183" underline="always">Contact me at facebook.com</Link>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
