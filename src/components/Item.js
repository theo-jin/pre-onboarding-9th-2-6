import {
  Box,
  Button,
  Image,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import ModalView from './ModalView'
import { useEffect, useState } from "react";
import useFetch from '../util/useFetch';

export default function Item ({idx,imageUrl,name,space,price,description,maximumPurchases,registrationDate,onClickButton}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  


  return(
    <Box
    maxW={{ base: 'full', md: '275px' }}
    w={'full'}
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={5}>
    <Stack align={'start'} spacing={2}>
  <Image
           rounded={'lg'}
          height={230}
           width={282}
           objectFit={'cover'}
           src={imageUrl}
         />
      <Box mt={2}>
        <Heading size="md">{idx}.{name}</Heading>
        <Text mt={3} fontSize={'md'}>
         지역: {space}
        </Text>
        <Text mt={3} fontSize={'sm'}>
          {price}원
        </Text>   
      
      </Box>
    </Stack>
    <ModalView
    isOpen={isOpen}
    onClose={onClose}
    onOpen={onOpen}
    idx={idx}
    imageUrl={imageUrl}
    name={name}
    space={space}
    price={price}
    description={description} 
    maximumPurchases={maximumPurchases} 
    registrationDate={registrationDate}
    />
    <Button variant='ghost'  onClick={(e) => {
            e.stopPropagation();
            onClickButton();
          }}>예약하기</Button>
  </Box>
);
};