import React from "react";
import "./galeriaImagenes.css";
import { Popover } from "@mui/material";
import SwipeableTextMobileStepper from "../carouselImageFade";
import { Context } from "../../../Contexts/CategoryContextProvider";
import { useContext } from "react";

const ImageGridGallery = (props) => {
  const { anchor, setAnchor } = useContext(Context);
  const openPopover = () => {
    setAnchor(true);
  };
  return (
    <div>
      <CarrouselFadeGallery anchor={anchor} imagenes = {props?.imagenes} />
      <div className="gridImageContainer" id="gridImageContainer">
        <div className="gridImageItem" id="item1">
          {" "}
          <img
            src={props.imagenes
              ?.filter((item) => item.esPrincipal)
              .map((item) => item.url)}
            alt={"Foto auto"}
          />
        </div>
        <div className="gridImageItem" id="item2">
          {" "}
          <img
            src={props.imagenes?.filter((item) => !item.esPrincipal)[0]?.url}
            alt={"Foto auto"}
          />
        </div>
        <div className="gridImageItem" id="item3">
          {" "}
          <img
            src={props.imagenes?.filter((item) => !item.esPrincipal)[1]?.url}
            alt={"Foto auto"}
          />
        </div>
        <div className="gridImageItem" id="item4">
          {" "}
          <img
            src={props.imagenes?.filter((item) => !item.esPrincipal)[2]?.url}
            alt={"Foto auto"}
          />
        </div>
        <div className="gridImageItem" id="item5">
          <img
            src={props.imagenes?.filter((item) => !item.esPrincipal)[3]?.url}
            alt={"Foto auto"}
          ></img>
          <button
            style={{ backgroundColor: "var(--bottonForm)", color: "white" }}
            onClick={openPopover}
          >
            ver mas
          </button>
        </div>
      </div>
    </div>
  );
};
const CarrouselFadeGallery = (props) => {
  return (
    <div>
      <Popover
        open={Boolean(props.anchor)}
        sx={{
          bgcolor: "#e4e0e0cc",
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}
        PaperProps={{
          style: {
          width: '75%',
          height: 'auto',
          borderRadius :'1rem',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          position:'unset',
          top:'none',
          left:'none',
        },

        }}
      >
          <SwipeableTextMobileStepper imagenes = {props.imagenes} />
      </Popover>
    </div>
  );
};
export default ImageGridGallery;
