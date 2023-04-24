import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Box, Typography,Button } from "@mui/material";



const checkout = () => {

  return (
    <div component="div" className="shopCard-container">
 
      {(swal({
          text: "Checked Out Successfully!",
          icon: "success",
        }),
        (
          <Box component="div" className="checkout-card">
            <Typography variant="h3" color="primary" fontWeight={700}>
              Checked Out Successfully!
            </Typography>
            <Button
                variant="contained"
                color="success"
               
              >
                 <Link to="/">Back to shop</Link>
              
              </Button>
          </Box>
        ))}

{/* <div component="div" className="checkout-card">
            <p variant="h3" color="primary" fontWeight={700}>
              Checked Out Successfully!
            </p>
            <Link to="/">Back to shop</Link>
          </div> */}
     
    </div>
  );
};

export default checkout;