import { mailOptions, transporter } from "@/components/NodeMailer/index.";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data || !data.name || !data.email || !data.message)
      return NextResponse.error();

    await transporter.sendMail({
      ...mailOptions,
      subject: "collab",
      text: data.name + "\n" + data.message + " " + data.email,
    });
    return NextResponse.json("ok");
  } catch (error) {
    console.log(error);
    return NextResponse.json("om");
  }
}
