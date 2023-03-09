import useFetch from "../util/useFetch";
import DUMMY from "../data/mock_data.json"
import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import CartItem from '../components/CartItem'
import CartOrderSummary from '../components/CartOrderSummary'
import { useEffect } from "react";

export default function Reservations () {
  //localStorage.getItem(‘Key’)
  // localStorage.removeItem(‘name’)
  useEffect(() => {
    const list = JSON.parse(String(localStorage.getItem("cart"))) || [];

  }, []);
 return( <Box
    maxW={{ base: '3xl', lg: '7xl' }}
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      align={{ lg: 'flex-start' }}
      spacing={{ base: '8', md: '16' }}
    >
      <Stack spacing={{ base: '8', md: '10' }} flex="2">
        <Heading fontSize="2xl" fontWeight="extrabold">
          장바구니 {DUMMY.length}개
        </Heading>

        <Stack spacing="6">
          {DUMMY.map((item) => (
            <CartItem key={item.id} {...item}></CartItem>
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <Link to={"/main"} color={mode('blue.500', 'blue.200') }>계속 쇼핑하기</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
)}