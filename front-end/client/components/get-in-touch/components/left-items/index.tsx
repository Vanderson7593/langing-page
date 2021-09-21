import { Flex, Text } from '@elements'
import { FC } from 'react'
import Image from 'next/image'

type TLeftItemProps = {
  url: string
  fstField: string
  sndField: string
}

const LeftItem: FC<TLeftItemProps> = ({ fstField, sndField, url }) => {
  return (
    <>
      <Flex style={{ gap: 30 }} alignItems="center">
        <Image src={url} width={60} height={60} alt="location-icon" />
        <Flex flexDirection="column" style={{ gap: 15 }}>
          <Text>{fstField}</Text>
          <Text>{sndField}</Text>
        </Flex>
      </Flex>
    </>
  )

}
export default LeftItem
