"use client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import SimpleMDE from "react-simplemde-editor";

interface IssueForm {
  title: string;
  description: string;
}

const Page = () => {
  const [errors, setError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  return (
    <div className='max-w-xl'>
      {errors && (
        <Callout.Root className='mb-3' color='red'>
          <Callout.Text>{errors}</Callout.Text>
        </Callout.Root>
      )}

      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issue", data);
            router.push("/issues");
          } catch (error) {
            setError("Something wrong occured");
          }
        })}
        className='max-w-xl space-y-3'
      >
        <TextField.Root placeholder='Title' {...register("title")}>
          <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder='Description' {...field} />
          )}
        />

        <Button>Submit new issue</Button>
      </form>
    </div>
  );
};

export default Page;
