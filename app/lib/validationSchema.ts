import z from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(2, "Description is requierd").max(1000),
});
