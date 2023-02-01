import { Box } from "@chakra-ui/react";
import { HomeProps } from "../../../interface/IHome";

export function Home({
    prop
}: HomeProps){
    return (
        <>
            <Box>{prop}</Box>
        </>
    )
}