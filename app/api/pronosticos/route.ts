import { NextResponse } from 'next/server'

import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const dynamic = 'force-dynamic'

export async function GET() {
  const data = await getQuantLiteCombinada()

  return NextResponse.json(data)
}
