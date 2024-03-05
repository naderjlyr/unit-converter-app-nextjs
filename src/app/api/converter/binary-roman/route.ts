import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { binaryToRoman as convertBinaryToRoman } from "@/utils/converters/numberConverters";
import type { ApiRequest, ApiResponse } from "@/types/api";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: ApiRequest = await req.json();
    const { formValue } = body;
    const result = await convertBinaryToRoman(formValue);
    const response: ApiResponse = { result };
    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const response: ApiResponse = {
      error: "Invalid input or conversion error",
    };
    return new NextResponse(JSON.stringify(response), { status: 400 });
  }
}
