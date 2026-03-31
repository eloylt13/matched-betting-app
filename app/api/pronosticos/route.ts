import { NextResponse } from 'next/server'

import { getQuantLiteCombinada } from '@/lib/pronosticos/engine'

export const revalidate = 28800

export async function GET() {
  const data = await getQuantLiteCombinada()

  return NextResponse.json(data)
}
