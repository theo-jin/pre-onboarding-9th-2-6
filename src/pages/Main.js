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
// import { useEffect, useState } from "react";

import Item from"../components/Item"
import Layout from '../components/Layout';

export default function Main(props){
  const datas = useFetch("https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T082344Z&X-Amz-Expires=86400&X-Amz-Signature=6706e57b09b8844dcabc35ab78b5ec768a07d3da1691a3d5c7b2672e24f9ef53&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject");
 //TODO 

//  function onClickReserve(tripItem) {
//       const basket =JSON.parse(localStorage.getItem("basket")) || [];
//       if(){

//       }
//       console.log(tripItem);
//        const newTripItem = { ...tripItem};
//       localStorage.setItem("basket", JSON.stringify(tripItem));
//  alert("장바구니에 담았습니다!");
// }

  return(

    <Layout>
     <SimpleGrid
          columns={[null, 4]}
          justifyItems="center"
        >
    {datas.map((tripItem)=>{
      return (
          <Item 
          idx={tripItem.idx}
          imageUrl={tripItem.mainImage}
          name={tripItem.name}
          space={tripItem.spaceCategory}
          price={tripItem.price}
          description={tripItem.description} 
          maximumPurchases={tripItem.maximumPurchases} 
          registrationDate={tripItem.registrationDate}
          
         />)
         })} 
    
    </SimpleGrid>  
    </Layout>


  )
}