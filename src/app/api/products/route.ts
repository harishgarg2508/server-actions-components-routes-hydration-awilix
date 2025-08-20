import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const testUrl = request.url
  console.log('testUrl: ', testUrl);
  

  return NextResponse.json({ testUrl });
}