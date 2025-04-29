
import { supabase } from "@/integrations/supabase/client";
import { DemoRequestFormData } from "@/schemas/demoRequestSchema";

export const sendDemoRequestEmail = async (data: DemoRequestFormData, selectedPlan?: string | null) => {
  try {
    // Format the message with form data
    const emailBody = {
      to: "onboardingsparkhub@outlook.com",
      subject: `Nova Solicitação de Demo: ${data.company} - Plano ${selectedPlan || 'Não especificado'}`,
      message: `
        <h2>Nova solicitação de demonstração</h2>
        
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Função:</strong> ${data.role}</p>
        <p><strong>Número de funcionários:</strong> ${data.employees}</p>
        <p><strong>Plano selecionado:</strong> ${selectedPlan || 'Não especificado'}</p>
        
        <p><strong>Mensagem adicional:</strong><br>
        ${data.message || 'Nenhuma mensagem adicional'}</p>
      `
    };

    // Send email notification using Supabase Edge Function
    const { data: responseData, error } = await supabase.functions.invoke('send-notification', {
      body: emailBody
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      throw new Error("Não foi possível enviar o e-mail de notificação");
    }
    
    console.log("Email response:", responseData);
    return true;
  } catch (error) {
    console.error("Erro no envio de e-mail:", error);
    return false;
  }
};
