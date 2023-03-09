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

export default function Item ({idx,imageUrl,name,space,price,description,maximumPurchases,registrationDate}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const datas = useFetch("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T082344Z&X-Amz-Expires=86400&X-Amz-Signature=6706e57b09b8844dcabc35ab78b5ec768a07d3da1691a3d5c7b2672e24f9ef53&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject");
  
  function onClickReserve() {
     localStorage.setItem('key','value');
  }

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
    <Button variant='ghost' onClick={onClickReserve()}>예약하기</Button>
  </Box>
);
};

