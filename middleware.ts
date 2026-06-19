import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const pathname = request.nextUrl.pathname;

  if (
    host === "company.automatewithaiagent.com" &&
    pathname === "/"
  ) {
    return NextResponse.rewrite(
      new URL("/company", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
<<<<<<< HEAD
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
=======
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
>>>>>>> e4d68d1 (fix: resolve LEA client component architecture and production build issues)
