import { NextResponse } from 'next/server'

import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const revalidate = 86400

export async function GET() {
  const data = await getQuantLiteCombinada()

  return NextResponse.json(data)
}
