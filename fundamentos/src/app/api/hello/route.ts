import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.json({
    name: 'Teste API',
    metodo: GET.name,
    message: 'Hello Next'
 })
}
export async function POST(request: Request) {
  return new Response('Hello, Next js')
}


// export default function handler(req, res) {
//     res.status(200).json({
//         name: 'Teste API',
//         metodo: req.method,
//     })
// }