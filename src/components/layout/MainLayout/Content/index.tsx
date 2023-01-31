import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
interface ContentProps extends BoxProps {
  children: ReactNode;
}

export function Content({ children, ...rest }: ContentProps) {
  return (
    <Box as="main" minH="500px" {...rest}>
      {children}
    </Box>
  );
}
