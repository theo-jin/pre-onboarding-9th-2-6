import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import DUMMY from "../data/mock_data.json"
export default function CartOrderSummary ()  {

  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">결제정보</Heading>

      <Stack spacing="6">
      
      <OrderSummaryItem label="상품 수량">
          ㅁㅁㅁ
        </OrderSummaryItem>
      
        <OrderSummaryItem label="결제금액">
        ㅁㅁㅁ
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
          총 합
          </Text>
         
        </Flex>
      </Stack>
      <Button colorScheme="blue" size="lg" fontSize="md" >
        결제
      </Button>
    </Stack>
  )
}