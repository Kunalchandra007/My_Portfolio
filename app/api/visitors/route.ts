import { NextResponse } from 'next/server';

export const revalidate = 300;

export async function GET() {
  const token = process.env.ANALYTICS_READ_TOKEN;
  const projectId = process.env.ANALYTICS_PROJECT_ID || process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.ANALYTICS_TEAM_ID;

  if (!token || !projectId) {
    return NextResponse.json({ visitors: null });
  }

  const params = new URLSearchParams({ projectId });
  if (teamId) params.set('teamId', teamId);

  const res = await fetch(
    `https://api.vercel.com/v1/query/web-analytics/visits/count?${params}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    return NextResponse.json({ visitors: null });
  }

  const body = (await res.json()) as { data?: { visitors?: number } };
  const visitors = Number(body.data?.visitors);

  return NextResponse.json(
    { visitors: Number.isFinite(visitors) ? visitors : null },
    { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } },
  );
}
