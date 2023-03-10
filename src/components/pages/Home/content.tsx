import { Box } from "@chakra-ui/react";
import { HomeProps } from "../../../interface/pages/IHome";

export function Home({
    prop
}: HomeProps){
    return (
        <>
            <Box>{prop}</Box>
        </>
    )
}