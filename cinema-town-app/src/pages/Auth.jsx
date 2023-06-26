import React from "react";
import { Link } from "react-router-dom";
import { Button, Card} from "react-bootstrap";


export default function Auth() {
    return (
        <Card>
            <Link to={"/login"}>
                <Button>Login</Button>
            </Link>
            <Link to={"/signup"}>
                <Button>Signup</Button>
            </Link>
        </Card>
    );
}