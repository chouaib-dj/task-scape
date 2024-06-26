import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);
  if (["/login"].includes(request.nextUrl.pathname) && user) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (["/"].includes(request.nextUrl.pathname) && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return response;
}
