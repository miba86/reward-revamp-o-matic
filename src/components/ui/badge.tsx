
import * as React from "react";
import styled from "@emotion/styled";
import { Chip, ChipProps } from "@mui/material";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends Omit<ChipProps, "variant"> {
  variant?: BadgeVariant;
}

// Create a styled Chip component that matches our Badge styling
const StyledChip = styled(Chip)<BadgeProps>(({ theme, variant = "default" }) => {
  // Map our custom variants to styling
  const styles = {
    default: {
      backgroundColor: "#9b87f5",
      color: "#ffffff",
      border: "transparent",
      "&:hover": {
        backgroundColor: "#7E69AB",
      },
    },
    secondary: {
      backgroundColor: "#7E69AB",
      color: "#ffffff",
      border: "transparent",
      "&:hover": {
        backgroundColor: "#6a5a91",
      },
    },
    destructive: {
      backgroundColor: "#ea384c",
      color: "#ffffff",
      border: "transparent",
      "&:hover": {
        backgroundColor: "#d3303f",
      },
    },
    outline: {
      backgroundColor: "transparent",
      color: "#1A1F2C",
      border: "1px solid #e2e8f0",
    },
  };

  return styles[variant];
});

export function Badge({ 
  className, 
  variant = "default", 
  ...props 
}: BadgeProps) {
  return (
    <StyledChip
      size="small"
      variant={variant === "outline" ? "outlined" : "filled"}
      {...props}
      className={className}
    />
  );
}
