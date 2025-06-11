import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 font-medium text-sm rounded-full whitespace-nowrap transition-all duration-300 shrink-0 ",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary-accent text-primary-foreground",
        outline:
          "bg-background hover:bg-background-accent border border-border",
      },
      size: {
        default: "h-9 px-4 py-2",
        lg: "h-11 px-4 py-2",
        sm: "h-8 px-3 py-2",
        icon: "size-9",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  variant,
  size,
  fullWidth,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  
  return (
    <Comp
      type={asChild ? undefined : "button"}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
};
