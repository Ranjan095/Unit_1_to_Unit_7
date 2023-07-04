/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { mainUrl } from "./url";
import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

export const ForumPage = () => {
  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${mainUrl}/question`).then((data) => {
      setQuestions(data.data);
    });
  }, []);

  return (
    <>
      {questions.map((ele, i) => {
        return (
          <Box>
            <Card maxW="xl" margin={'20px'}>
              <Flex gap={'10px'}>
                <Stack>
                  <Image
                    width={"100px"}
                    src={ele.userAvatar}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Text fontSize="lg">{ele.username}</Text>
                </Stack>
                <Stack>
                  <Text fontSize="2xl">{ele.questionTitle}</Text>
                  <Flex gap={"20px"}>
                    <Text
                      bg={"gray"}
                      padding={"5px"}
                      borderRadius={"2px"}
                      fontSize="sm"
                    >
                      {ele.language}
                    </Text>
                    <Text
                      bg={"gray"}
                      padding={"5px"}
                      borderRadius={"2px"}
                      fontSize="sm"
                    >
                      {ele.postedDate}
                    </Text>
                    <Text
                      bg={"gray"}
                      padding={"5px"}
                      borderRadius={"2px"}
                      fontSize="sm"
                    >
                      {ele.noOfAnswer}
                    </Text>
                  </Flex>
                </Stack>
                <Stack>
               <Flex>
               <Image
  borderRadius='full'
  boxSize='50px'
  src='https://em-content.zobj.net/thumbs/240/apple/354/thumbs-up_1f44d.png'
  alt='Dan Abramov'
/>
<Text fontSize='3xl'>{ele.upvotes}</Text>
               </Flex>

                </Stack>
              </Flex>
            </Card>
          </Box>
        );
      })}
    </>
  );
};
