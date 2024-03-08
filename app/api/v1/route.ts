import { NextResponse } from 'next/server';

export async function GET() {
  // Do whatever you want
  return NextResponse.json({ message: '/api/v1' }, { status: 200 });
}
