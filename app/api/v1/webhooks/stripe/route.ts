import { NextResponse } from 'next/server';

export async function GET() {
  // Do whatever you want
  return NextResponse.json(
    { message: '/api/v1/webhooks/stripe' },
    { status: 200 },
  );
}
