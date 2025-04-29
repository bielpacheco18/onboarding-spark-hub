
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  company: z.string().min(2, {
    message: "O nome da empresa deve ter pelo menos 2 caracteres."
  }),
  role: z.string({
    required_error: "Por favor, selecione sua função."
  }),
  employees: z.string({
    required_error: "Por favor, selecione o número de funcionários."
  }),
  message: z.string().optional(),
});

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan?: string | null;
}

const DemoModal = ({ open, onOpenChange, selectedPlan }: DemoModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const sendEmailNotification = async (data: z.infer<typeof formSchema>) => {
    try {
      // Format the message with form data
      const emailBody = {
        to: "onboardingsparkhub@outlook.com",
        subject: `Nova Solicitação de Demo: ${data.company} - Plano ${selectedPlan || 'Não especificado'}`,
        message: `
          Nova solicitação de demonstração:
          
          Nome: ${data.name}
          Email: ${data.email}
          Empresa: ${data.company}
          Função: ${data.role}
          Número de funcionários: ${data.employees}
          Plano selecionado: ${selectedPlan || 'Não especificado'}
          
          Mensagem adicional:
          ${data.message || 'Nenhuma mensagem adicional'}
        `
      };

      // Send email notification using Supabase Edge Function
      const { error } = await supabase.functions.invoke('send-notification', {
        body: emailBody
      });

      if (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw new Error("Não foi possível enviar o e-mail de notificação");
      }
      
      return true;
    } catch (error) {
      console.error("Erro no envio de e-mail:", error);
      return false;
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form data:", { ...data, selectedPlan });
      
      // Send email notification
      const emailSent = await sendEmailNotification(data);
      
      toast({
        title: "Solicitação enviada!",
        description: emailSent 
          ? "Entraremos em contato em breve." 
          : "Sua solicitação foi registrada, mas houve um problema com a notificação por e-mail.",
      });
      
      form.reset();
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
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="João Silva" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email profissional</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Sua Empresa Ltda." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua função</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecionar função" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ceo">CEO / Diretor</SelectItem>
                        <SelectItem value="hr">RH / Pessoas</SelectItem>
                        <SelectItem value="manager">Gerente / Líder</SelectItem>
                        <SelectItem value="it">TI</SelectItem>
                        <SelectItem value="other">Outra função</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="employees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de funcionários</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar tamanho da empresa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-10">1-10</SelectItem>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201-500">201-500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem (opcional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Conte-nos mais sobre suas necessidades ou perguntas específicas"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-brand-600 hover:bg-brand-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitação"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
