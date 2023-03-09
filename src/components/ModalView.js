import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

export default function ModalView({isOpen,onClose,onOpen,idx,imageUrl,name,space,price,description,maximumPurchases,registrationDate }) {

  return (
    <>
     <Button onClick={onOpen}>자세히</Button>
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>여행 상세 정보</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image
           rounded={'lg'}
          height={230}
           width={282}
           objectFit={'cover'}
           src={imageUrl}
         /> 
       <Text as={'span'} fontWeight={'bold'}>
        {idx}.{name}
        </Text>
        <Text mt={3} fontSize={'md'}>
         지역: {space}
        </Text>
        <Text mt={3} fontSize={'md'}>
        설명: {description}
        </Text>
         <Text mt={3} fontSize={'md'}>
         최대 구매 한도: {maximumPurchases }
        </Text>
        <Text mt={3} fontSize={'md'}>
         예약날짜: {registrationDate }
        </Text>
        <Text mt={3} fontSize={'sm'}>
         가격: {price}원
        </Text>   
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}