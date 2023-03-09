import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  SimpleGrid,
  useDisclosure
} from '@chakra-ui/react';

import useFetch from "../util/useFetch";
import { useEffect, useState } from "react";
import ModalView from '../components/ModalView';
import Item from"../components/Item"


export default function Main(props){
  const datas = useFetch("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T082344Z&X-Amz-Expires=86400&X-Amz-Signature=6706e57b09b8844dcabc35ab78b5ec768a07d3da1691a3d5c7b2672e24f9ef53&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject");
 //TODO 모달

  return(
    <>
     <SimpleGrid
          columns={[null, 4]}
          justifyItems="center"
        >
    {datas.map((el)=>{
      return (
          <Item 
          idx={el.idx}
          imageUrl={el.mainImage}
          name={el.name}
          space={el.spaceCategory}
          price={el.price}
          description={el.description} 
          maximumPurchases={el.maximumPurchases} 
          registrationDate={el.registrationDate}
         />
    )})} 
    </SimpleGrid>
   
   </>
  )
}