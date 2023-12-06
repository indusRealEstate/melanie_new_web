"use client";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";

const AllDialogs = () => {
  const [openBuyingGuide, setOpenBuyingGuide] = useState(false);
  const [openTalkToUs, setOpenTalkToUs] = useState(false);
  const [openListProperty, setOpenListProperty] = useState(false);
  const [openTeam, setOpenTeam] = useState(false);

  const handleClickOpenBuyingGuide = () => {
    setOpenBuyingGuide(true);
  };

  const handleCloseBuyingGuide = () => {
    setOpenBuyingGuide(false);
  };

  const handleClickOpenTalkToUs = () => {
    setOpenTalkToUs(true);
  };

  const handleCloseTalkToUs = () => {
    setOpenTalkToUs(false);
  };

  const handleClickOpenListProperty = () => {
    setOpenListProperty(true);
  };

  const handleCloseListProperty = () => {
    setOpenListProperty(false);
  };

  const handleClickOpenTeam = () => {
    setOpenTeam(true);
  };

  const handleCloseTeam = () => {
    setOpenTeam(false);
  };

  const StyledBorderTextField = styled(TextField)`
    & label.Mui-focused {
      color: #c49f5a;
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: #c49f5a;
      }
    }
  `;
  return (
    <>
      <div className="nav-item d-flex justify-content-center mt30 d-grid-mbl">
        <button
          className="custom-btn mb15"
          onClick={handleClickOpenBuyingGuide}
        >
          Buying Guide
        </button>
        <button className="custom-btn mb15" onClick={handleClickOpenTalkToUs}>
          Talk To Us
        </button>
        <button
          className="custom-btn mb15"
          onClick={handleClickOpenListProperty}
        >
          Sell Your Property
        </button>
        <button className="custom-btn mb15" onClick={handleClickOpenTeam}>
          Team
        </button>
      </div>

      {/* ----------------------Buying Guide Dialog------------------------------- */}
      <Dialog open={openBuyingGuide} onClose={handleCloseBuyingGuide}>
        <DialogTitle className="mt10" align="center">
          Premium Buying Guide
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            Before you start looking for a home, it&apos;s important to
            determine your budget. This will help you narrow down your search
            and avoid wasting time looking at homes that are out of your price
            range.
          </DialogContentText>
          <StyledBorderTextField
            className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Your Email"
            type="email"
            fullWidth
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleCloseBuyingGuide}>
            Cancel
          </Button>
          <Button className="color-gold" onClick={handleCloseBuyingGuide}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      {/* ---------------------------------Talk To Us Dialog-------------------------------- */}
      <Dialog open={openTalkToUs} onClose={handleCloseTalkToUs}>
        <DialogTitle className="mt10" align="center">
          Talk To Us
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            Tell us specifications about your future property.
          </DialogContentText>
          <StyledBorderTextField
            className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Contact Number"
            type="number"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Tell Us.."
            type="text"
            fullWidth
            multiline
            rows={4}
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleCloseTalkToUs}>
            Cancel
          </Button>
          <Button className="color-gold" onClick={handleCloseTalkToUs}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      {/* ---------------------------------List Your Property Dialog-------------------------------- */}
      <Dialog open={openListProperty} onClose={handleCloseListProperty}>
        <DialogTitle className="mt10" align="center">
          Sell Your Property
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            Contact us for selling your property.
          </DialogContentText>
          <StyledBorderTextField
            className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="text"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="text"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Contact Number"
            type="number"
            fullWidth
            // variant="standard"
          />
          <StyledBorderTextField
            // className="mt20"
            autoFocus
            margin="dense"
            id="name"
            label="Tell Us.."
            type="text"
            fullWidth
            multiline
            rows={4}
            // variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleCloseListProperty}>
            Cancel
          </Button>
          <Button className="color-gold" onClick={handleCloseListProperty}>
            Send
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openTeam} onClose={handleCloseTeam}>
        <DialogTitle className="mt10" align="center">
          Our Team
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="font-style-2"
            fontSize={20}
            align="center"
          >
            Our team of Luxury Specialists are dedicated to providing you with
            exceptional services and expertise, focusing on a specialist areas
            with in-depth knowledge at a hyperlocal level. Leveraging their
            extensive networking and negotiating skills, they will work
            diligently to help you achieve the desired results, whether
            it&apos;s making a sound property investment, finding the perfect
            property, or obtaining the accurate price for your property.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="color-gold" onClick={handleCloseTeam}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllDialogs;
