
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import DemoRequestForm from "./forms/DemoRequestForm";
import { sendDemoRequestEmail, sendTestEmail } from "@/services/emailService";
import { DemoRequestFormData } from "@/schemas/demoRequestSchema";
import { Button } from "./ui/button";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string | null;
}

const DemoModal = ({ open, onOpenChange, selectedPlan }: DemoModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  
  const onSubmit = async (data: DemoRequestFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form data:", { ...data, selectedPlan });
      
      // Send email notification
      const emailSent = await sendDemoRequestEmail(data, selectedPlan);
      
      toast({
        title: "Solicitação enviada!",
        description: emailSent 
          ? "Entraremos em contato em breve." 
          : "Sua solicitação foi registrada, mas houve um problema com a notificação por e-mail.",
      });
      
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleTestEmail = async () => {
    setIsTesting(true);
    
    try {
      const result = await sendTestEmail();
      
      toast({
        title: result.success ? "E-mail de teste enviado!" : "Erro ao enviar e-mail",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar e-mail de teste",
        description: "Ocorreu um erro ao tentar enviar o e-mail de teste.",
        variant: "destructive",
      });
    } finally {
      setIsTesting(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {selectedPlan 
              ? `Solicitar demonstração do plano ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}`
              : "Solicitar demonstração"}
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para que nossa equipe entre em contato.
          </DialogDescription>
        </DialogHeader>
        
        <DemoRequestForm 
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          selectedPlan={selectedPlan}
        />
        
        <div className="mt-4 pt-2 border-t">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleTestEmail}
            disabled={isTesting}
            className="text-xs"
          >
            {isTesting ? "Enviando..." : "Enviar e-mail de teste"}
          </Button>
          <p className="text-xs text-muted-foreground mt-1">
            Clique para verificar se o sistema de e-mails está funcionando corretamente.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
