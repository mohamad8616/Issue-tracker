import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Button className='cursor-pointer'>
        <Link href='/issues/new'>new issue</Link>
      </Button>
    </div>
  );
};

export default page;
