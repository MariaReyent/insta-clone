import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Dan Abbrah"
        followers={1298}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={567}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Christian Mwaba"
        followers={768}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https:/www/youtube.com/@asaprogrammer_"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          As a Programmer
        </Link>
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;
