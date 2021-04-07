import { Text, Button, Row, useToasts, Page } from "@geist-ui/react";
import Router from "next//router";
import React, { useState } from "react";
import base from "firebase/app";
import "firebase/auth";
import {firebase,provider} from "@services/firebase";

// initFirebase();


export default function Join() {
  const [authorizing, setAuthorizing] = useState(false);

  const handleAuthentication = async () => {
    setAuthorizing(true);
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user, credential } = result;
      console.log(credential)
      if (!user) {
        throw new Error("There was issue authorizing");
      }
      Router.push("/");
    } catch (error) {
        console.log(error)
    }
    setAuthorizing(false);
  };
  return (
    <Page>
      <Row justify="center">
        <Text h1>Join Now</Text>
      </Row>
      <Row justify="center">
        <Text h2>Click below to sign in or join</Text>
      </Row>
      <Row justify="center">
        <Button onClick={handleAuthentication} loading={authorizing}>Get Started</Button>
      </Row>
    </Page>
  );
}
