
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import DemoRequestForm from "./forms/DemoRequestForm";
import { sendDemoRequestEmail } from "@/services/emailService";
import { DemoRequestFormData } from "@/schemas/demoRequestSchema";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string | null;
}

const DemoModal = ({ open, onOpenChange, selectedPlan }: DemoModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
