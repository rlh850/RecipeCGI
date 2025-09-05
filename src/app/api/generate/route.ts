import {
   generateController,
   RequestBody,
} from '@/app/controllers/generate.controller';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
   const body: RequestBody = await req.json();
   const response = await generateController.sendMessage(body);
   return NextResponse.json(response);
}
