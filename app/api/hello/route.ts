import { NextResponse } from "next/server";

export function GET(request: Request) {
  return NextResponse.json({
    message: "Hello From Next.js",
    data: [],
    errors: null,
  });
}
