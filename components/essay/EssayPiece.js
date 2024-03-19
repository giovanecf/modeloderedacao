import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";

export default function EssayPiece({
  pieceText,
  color,
  firstOfParagraph,
  lastOfParagraph,
  paragraphIndex,
  locationIndex,
  isConnective,
  onClick,
}) {
  return (
    <Box
      className={` inline group leading-4 px-1 hover:text-white rounded-sm hover:cursor-pointer ${
        isConnective ? "bg-[rgba(255,229,100,0.2)]" : ""
      } ${firstOfParagraph ? "ml-6 mr-2 md:mr-1" : "mx-2 md:mx-1"}`}
      sx={{
        "&:hover": {
          backgroundColor: color,
          fontWeight: 500,
        },
      }}
      onClick={(event) => {
        onClick(
          event,
          event.currentTarget.children[1],
          paragraphIndex,
          locationIndex
        );
      }}
    >
      <Typography
        variant="caption"
        className="font-serif pr-1 group-hover:text-white"
        sx={{
          color,
        }}
      >
        {`${paragraphIndex}.${locationIndex}`}
      </Typography>
      <Typography
        variant="body1"
        className="font-serif inline group-hover:text-white "
      >
        {pieceText}
      </Typography>
    </Box>
  );
}
