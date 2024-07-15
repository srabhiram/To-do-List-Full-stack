import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = NextResponse.json({
      message: "Logout Successful",
      success: true,
    });

    res.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // Set expiration date to clear the cookie
    });

    return res;
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    }, {
      status: 500
    });
  }
}
