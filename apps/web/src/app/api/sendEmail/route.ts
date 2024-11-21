import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
const DATACENTER = API_KEY.split('-')[1];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`;

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await axios.post(url, data, {
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json({ message: 'Email successfully added!' });
  } catch (error) {
    console.error('Error adding email:', error);
    return NextResponse.json(
      // @ts-ignore
      { message: 'Failed to add email', error: error?.message },
      { status: 500 },
    );
  }
}
