import React from 'react'
import { NextResponse ,NextRequest} from 'next/server';

export function middleware(request:NextRequest) {
    console.log('this is middleware');
    
    return NextResponse.redirect(new URL('/',request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/products',
    // matcher: '/about/:path*',
  }



