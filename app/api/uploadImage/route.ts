import fs from "fs";
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
/*
export const config = {
    api: {
        bodyParser: false,
    },
};*/

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const date = Date.now();

    try {
        const formData = await request.formData();

        // Get the file from the form data
        const files = formData.getAll("file") as File[] | null;

        for (const file of files ?? []) {
            const arrayBuffer = await file.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            await fs.writeFile(`./public/uploads/${file.name}`, buffer, () => { });

            revalidatePath("/");
        }

        return NextResponse.json({ error: "success" }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: "fail" }, { status: 404 });
    }
}