import { prisma } from "@/app/lib/prisma";
import { createIssueSchema } from "@/app/lib/validationSchema";
import { NextRequest, NextResponse } from "next/server";

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
