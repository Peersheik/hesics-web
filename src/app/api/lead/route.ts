import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, businessType, whatsappNumber } = body;

    if (!name || !whatsappNumber) {
      return NextResponse.json(
        { error: "Name and WhatsApp number are required" },
        { status: 400 }
      );
    }

    const leadData = {
      name: String(name).trim(),
      businessType: String(businessType || "General Business").trim(),
      whatsappNumber: String(whatsappNumber).trim(),
      createdAt: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "",
      referer: req.headers.get("referer") || "",
    };

    console.log("[HESICS Lead Captured]:", leadData);

    // 1. Send to n8n webhook if configured
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (n8nWebhookUrl) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        });
      } catch (err) {
        console.error("n8n webhook forward error:", err);
      }
    }

    // 2. Send to Supabase if configured
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/leads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name: leadData.name,
            business_type: leadData.businessType,
            whatsapp_number: leadData.whatsappNumber,
            created_at: leadData.createdAt,
          }),
        });
      } catch (err) {
        console.error("Supabase insert error:", err);
      }
    }

    return NextResponse.json({ success: true, data: leadData });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}
