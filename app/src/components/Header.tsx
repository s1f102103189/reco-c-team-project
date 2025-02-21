import { Box, Button, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import { FC } from "react";
import { BsSearch } from "react-icons/bs"
export const Header: FC = () => {
    return (
        <Box as="header" w='100vw' h={"16"} backgroundColor='blue.700' position='sticky' top={0} px={6} display='flex' justifyContent='left' alignItems='center'>
            <InputGroup borderRadius={5} backgroundColor='white' w={"50%"}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BsSearch color="gray.600" />}
                />
                <Input type="text" placeholder="商品検索" />
                <InputRightAddon
                    p={0}
                    border="none"
                >
                    <Button borderLeftRadius={0} borderRightRadius={3.3} >
                        検索
                    </Button>
                </InputRightAddon>
            </InputGroup>
        </Box>
    )
}