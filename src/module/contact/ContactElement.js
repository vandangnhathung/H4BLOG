import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { Textarea } from "components/textarea";
import React from "react";
import { useForm } from "react-hook-form";

const ContactElement = () => {
  const { control } = useForm();
  return (
    <div className="container__homepage">
      <div className="text-center pt-36">
        <h1 className="mx-auto inline-block text-[48px] font-bold mb-6">
          Contact
        </h1>
        <form action="">
          <div className="form-layout text-center">
            <Field>
              <Label htmlFor="name">Your name</Label>
              <Input
                name="name"
                control={control}
                placeholder="Your name"
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="email">Email adddress</Label>
              <Input
                name="email"
                control={control}
                placeholder="Your email"
              ></Input>
            </Field>
          </div>
          <Field>
            <Label htmlFor="title">Title</Label>
            <Input
              name="title"
              control={control}
              placeholder="Your title"
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="message">Message</Label>
            <Textarea
              name="message"
              placeholder="Please enter your message"
              control={control}
            ></Textarea>
          </Field>
          <Button className="mx-auto mb-16" kind="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactElement;
