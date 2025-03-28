
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Chip, ChipProps } from "@mui/material";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends Omit<ChipProps, "variant"> {
  variant?: BadgeVariant;
}

// Create a styled Chip component that matches our Badge styling
const BadgeComponent = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "variant"
})<BadgeProps>(({ theme, variant = "default" }) => {
  // Map our custom variants to MUI styling
  const styles = {
    default: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      border: "transparent",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      border: "transparent",
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
    destructive: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      border: "transparent",
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.divider}`,
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
    <BadgeComponent
      size="small"
      variant={variant === "outline" ? "outlined" : "filled"}
      {...props}
      className={className}
    />
  );
}

export { Badge };
