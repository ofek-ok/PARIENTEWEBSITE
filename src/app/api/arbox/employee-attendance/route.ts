import { NextRequest, NextResponse } from "next/server";

const ARBOX_BASE_URL = "https://arboxserver.arboxapp.com/api/public";

function getCurrentMonthRange() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const from = new Date(Date.UTC(year, month, 1));
  const to = new Date(Date.UTC(year, month + 1, 0));

  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { fromDate: fmt(from), toDate: fmt(to) };
}

export async function GET(request: NextRequest) {
  const arboxApiKey = process.env.ARBOX_API_KEY;
  const bridgeToken = process.env.ARBOX_BRIDGE_TOKEN;

  if (!arboxApiKey || !bridgeToken) {
    return NextResponse.json(
      { error: "Server integration is not configured" },
      { status: 503 },
    );
  }

  const providedToken = request.headers.get("x-bridge-token");
  if (providedToken !== bridgeToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const defaults = getCurrentMonthRange();
  const fromDate = searchParams.get("fromDate") ?? defaults.fromDate;
  const toDate = searchParams.get("toDate") ?? defaults.toDate;
  const locationId = searchParams.get("location_id");

  const query = new URLSearchParams({
    fromDate,
    toDate,
    limit: "500",
  });

  if (locationId) query.set("location_id", locationId);

  const url = `${ARBOX_BASE_URL}/v3/reports/employeeAttendanceReport?${query.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        "api-key": arboxApiKey,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const body = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Arbox request failed",
          status: response.status,
          details: body,
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      period: { fromDate, toDate },
      report: "employeeAttendanceReport",
      data: body,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach Arbox" },
      { status: 502 },
    );
  }
}
