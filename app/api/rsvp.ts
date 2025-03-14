import { NextResponse } from 'next/server';
import dbConnect from '../../lib/mongodb';
import rsvp from '../../models/rsvp';

export async function GET(request: Request, res: Response) {
    try {
        const rsvps = await rsvp.find({});

        NextResponse.json({ status: 200, data: rsvps });
    } catch (error) {
        NextResponse.json({ status: 400 });
    }
}

export async function POST(request: Request, res: Response) {

    try {
        const item = await rsvp.create(request.body)

        NextResponse.json({ status: 201, data: item });
    } catch (error) {
        NextResponse.json({ status: 400 });
    }
}


export default async function handler(req: Request, res: any) {

    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const rsvps = await rsvp.find({});
                res.status(200).json({ success: true, data: rsvps });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const item = await rsvp.create(req.body);
                res.status(201).json({ success: true, data: item });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}