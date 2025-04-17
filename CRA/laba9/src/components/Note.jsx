import { Button, Card, CardBody, CardFooter, CardHeader, Separator, Heading, Text } from "@chakra-ui/react";
import moment from "moment/moment";

export default function Note({ title, description, createdAt }) {
    return (
        <Card.Root variant={"filled"}>
            <Card.Header>
                <Heading size={"md"}>{title} </Heading>
            </Card.Header>
            <Separator borderColor={"gray"} />
            <Card.Body>
                <Text>{description}</Text>
            </Card.Body>
            <Separator borderColor={"gray"} />
            <Card.Footer>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</Card.Footer>
        </Card.Root>
    );
}