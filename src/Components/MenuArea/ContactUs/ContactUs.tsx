import { Button, TextField, Typography } from "@material-ui/core";
import "./ContactUs.css";
import CommentIcon from '@material-ui/icons/Comment';

function ContactUs(): JSX.Element {
  return (
    <div className="ContactUs Box">
      <form>
      
        <Typography variant="h4">Contact Us <CommentIcon/>  </Typography>
        <TextField className="TextBox" label="Name" variant="outlined" />
        <br />
        <TextField className="TextBox" label="Subject" variant="outlined" />
        <br />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactUs;
