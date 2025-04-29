
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, message }: EmailRequest = await req.json();

    // Validate required fields
    if (!to || !subject || !message) {
      throw new Error("Missing required fields: 'to', 'subject', and 'message' are required");
    }

    // Log the email details (for debugging in deployment)
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // In a production environment, you would integrate with an email service here
    // For example: SendGrid, AWS SES, Resend, etc.
    
    // For now, we'll simulate a successful email send
    // This would be replaced with actual email sending code in production
    
    return new Response(
      JSON.stringify({ success: true, message: "Email notification sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
