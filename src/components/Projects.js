import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
  Flex,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState } from "react";
import ProjectsArray from "./ProjectsArray";
import OtherProjectsArray from "./OtherProjectsArray";
import TagsArray from "./TagsArray";

export default function Projects({ color }) {
  const projects = ProjectsArray();
  const others = OtherProjectsArray();
  const options = TagsArray("ProjectsTags");

  const [selected, setSelected] = useState("Web Development");
  const [otherSelected, otherSetSelected] = useState("All");

  const handleOtherSelected = (value) => {
    otherSetSelected(value);
  };
  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid rows={[1, 2]} px={4} spacing={4}>
            <Stack px={4} spacing={4}>
              {projects
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              }).map((project) => (
                <Fade bottom>
                  <Card
                    key={project.name}
                    direction={{
                      base: "column",
                    }}
                    overflow="hidden"
                  >
                    <Image height="250px" objectFit="cover" src={project.image} />

                    <Stack >
                      <CardBody align="left">
                        <Heading size="md">{project.name}</Heading>
                        <CardBody>
                          <Flex>
                            <List align="left" spacing={3}>
                              {project.descriptionItems.map((item, index) => (
                                <ListItem key={index}>
                                  <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={`${color}.500`}
                                  />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Flex>
                        </CardBody>
                        {/* <Text py={2}>{project.description}</Text> */}

                        <HStack py={2}>
                          {project.buttons.map((button) => (
                            <a key={button.text} href={button.href}>
                              <Button color={`${color}.400`}>
                                {button.text}
                              </Button>
                            </a>
                          ))}
                        </HStack>
                        <HStack pt={4} spacing={2}>
                          {project.badges.map((badge) => (
                            <Badge
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
            </Stack>
          </SimpleGrid>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={otherSelected === "All" ? `${color}` : "gray"}
                onClick={() => handleOtherSelected("All")}
              >
                All
              </Button>
              {options.map((option) => (
                <Button
                  colorScheme={otherSelected === option.value ? `${color}` : "gray"}
                  onClick={() => handleOtherSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (otherSelected === "All") {
                  return true;
                } else {
                  return other.tags.includes(otherSelected);
                }
              })
              .map((other) => (
                <Fade bottom>
                  <Card key={other.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`${color}.400`}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              my={2}
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </Fade>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
