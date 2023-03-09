import { Stack,
  Box,
  CloseButton, 
  Flex, 
  Link, 
  Select,
  Image,
  Text,
  HStack,
  useColorModeValue as mode,} from '@chakra-ui/react'

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={mode('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export default function CartItem (props) {
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
  <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={imageUrl}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
        </Stack>
       
      </Box>
    </Stack>

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />      
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} />
      </Flex>

   
    </Flex>
  )
}