import { NextResponse } from "next/server";

let counter = 5;

export async function POST(request: Request) {
  const formData = await request.json();

  console.log(formData);

  return NextResponse.json({ message: "Form submitted successfully. This message is from route.ts file" });
}




export async function GET() {
  return NextResponse.json({ message: "GET request received!", counter });
}



export async function PUT(request: Request) {
  const data = await request.json();
  counter = data.counter;

  console.log(data);

  return NextResponse.json({ message: "Counter updated successfully!" });
}




export async function DELETE() {
  counter = 0;
  return NextResponse.json({ message: "Counter deleted successfully!" });
}
