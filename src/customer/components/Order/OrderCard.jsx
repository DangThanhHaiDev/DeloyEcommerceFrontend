import { Grid } from "@mui/material"
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = ()=>{
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(`account/order/${2}`)} className="p-5 shadow-lg hover:shadow-2xl border cursor-pointer hover:opacity-70 active:opacity-100">
            <Grid container spacing={2} sx={{justifyContent: "space-between", paddingTop: "0"}}>
                <Grid  item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://th.bing.com/th/id/OIP.M5GpUHeODYmTCkff9d5DxAHaHa?rs=1&pid=ImgDetMain" alt="anh"/>
                        <div  className="ml-5 space-y-2 text-left">
                            <p>Men Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>34$</p>
                </Grid>
                <Grid item xs={4}>
                   { true && <p>
                        <AdjustIcon sx={{width:"15px", height: "15px"}} className="text-green-600 mr-2 text-sm" />
                        <span>
                            Delivered on March 03
                        </span>
                        <p className="text-sm">
                            Your item has been delivered
                        </p>
                    </p>
                    
                    }
                   { false &&  <p>
                        <span>
                            Expected Delivery On Mar 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}
export default OrderCard