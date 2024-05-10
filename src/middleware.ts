import { NextRequest, NextResponse } from 'next/server';

// Next.JS Middleware file which execute between every request
export async function middleware(req: NextRequest) {}

// config option for configuring on which routes above middleware should be executed.
export const config = {
  matcher: [],
};
