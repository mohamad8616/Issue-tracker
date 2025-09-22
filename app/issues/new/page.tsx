import { Button, TextArea, TextField } from "@radix-ui/themes";

const page = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder='Title'>
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <TextArea placeholder='Description' />
      <Button>Submit new issue</Button>
    </div>
  );
};

export default page;
