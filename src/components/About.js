import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  useColorMode
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
  const { colorMode } = useColorMode();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            {colorMode==='dark' ? <Text color={"gray.300"} fontSize={"xl"} px={4}>
              {profile.about}
            </Text> :<Text fontSize={"xl"} px={4}>
              {profile.about}
            </Text> }
            
          </Stack>
        </Container>
      </>
    );
}

