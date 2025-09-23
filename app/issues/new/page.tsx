"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleMDE from "react-simplemde-editor";
import { createIssueSchema } from "@/app/lib/validationSchema";
import z from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>;

const Page = () => {
  const [error, setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const router = useRouter();
  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root className='mb-3' color='red'>
          <Callout.Text>{error}</Callout.Text>
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
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder='Description' {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button>Submit new issue</Button>
      </form>
    </div>
  );
};

export default Page;
