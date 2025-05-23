
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
    
    // Check if we need an API key
    if (responseData && !responseData.success && responseData.needsApiKey) {
      return { success: false, needsApiKey: true, message: "Chave de API Resend não configurada" };
    }
    
    return { success: true };
  } catch (error) {
    console.error("Erro no envio de e-mail:", error);
    return { success: false, message: "Erro ao enviar e-mail" };
  }
};

// Test function to check email delivery
export const sendTestEmail = async () => {
  try {
    const testData = {
      to: "onboardingsparkhub@outlook.com",
      subject: "Teste de E-mail OnboardingSparkHub",
      message: `
        <h2>Este é um e-mail de teste</h2>
        <p>Se você está recebendo este e-mail, significa que a configuração de e-mail está funcionando corretamente.</p>
        <p>Data e hora do teste: ${new Date().toLocaleString('pt-BR')}</p>
        <p>Este é um e-mail automático de teste, não é necessário responder.</p>
      `
    };
    
    console.log("Enviando email de teste para:", testData.to);
    
    const { data, error } = await supabase.functions.invoke('send-notification', {
      body: testData
    });
    
    if (error) {
      console.error("Erro ao enviar e-mail de teste:", error);
      throw new Error("Não foi possível enviar o e-mail de teste");
    }
    
    console.log("Email de teste response:", data);
    
    // Check if we need an API key
    if (data && !data.success && data.needsApiKey) {
      return { 
        success: false, 
        needsApiKey: true, 
        message: "Chave de API Resend não configurada. Configure a chave para enviar emails." 
      };
    }
    
    return { success: true, message: "E-mail de teste enviado com sucesso" };
  } catch (error) {
    console.error("Erro no envio de e-mail de teste:", error);
    return { success: false, message: "Erro ao enviar e-mail de teste" };
  }
};
