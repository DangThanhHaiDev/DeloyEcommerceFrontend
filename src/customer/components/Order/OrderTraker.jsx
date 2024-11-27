import { Step, StepLabel, Stepper } from "@mui/material"

const steps = [
    "Placed", 
    "Order Confirmed",
    "Shipepped",
    "Out For Delivery",
    "Delivered"
]
const OrderTraker = ({activeStep})=>{
    return(
        <div className="w-full">
            <Stepper activeStep={activeStep} alternativeLabel>
                {
                    steps.map((step, index)=>(
                        <Step key={index}>
                            <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{step}</StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </div>
    )
}

export default OrderTraker