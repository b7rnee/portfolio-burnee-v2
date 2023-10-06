// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";

export async function POST() {
  try {
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
