import { NextResponse } from "next/server";

export async function GET(request: Request){
    return NextResponse.json({
        nome: 'Teste API',
        metodo: request.method,
        message: 'Hello World',

    })
}

export async function POST(request: Request) {
  return new Response('Hello, Next js')
}

/**
 * export default function handler(req, res) {
 *    res.status(200).json({
 *      nome: 'Teste API',
 *      metodo: req.method,
 *    })
 * }
 */