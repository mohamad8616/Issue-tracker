import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const createIssueSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(2).max(1000),
});

export async function POST(request: NextRequest) {
  const json = await request.json();
  const validation = createIssueSchema.safeParse(json);
  if (!validation.success) {
    return NextResponse.json(
      { error: "Invalid request data", issues: validation.error.issues },
      { status: 400 }
    );
  }

  const issue = await prisma.issue.create({
    data: {
      title: json.title,
      description: json.description,
    },
  });
  return NextResponse.json(issue, { status: 201 });
}
