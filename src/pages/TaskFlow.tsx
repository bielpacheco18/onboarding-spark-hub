
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

export default function TaskFlow() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Finalizar proposta de cliente", completed: false, priority: "high" },
    { id: "2", title: "Revisar documentação técnica", completed: false, priority: "medium" },
    { id: "3", title: "Preparar relatório semanal", completed: true, priority: "low" },
    { id: "4", title: "Agendar reunião com equipe", completed: false, priority: "medium" },
  ]);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">TaskFlow</h1>
          <p className="text-sm text-gray-400 mt-1">Foco. Clareza. Resultados.</p>
        </div>
        
        <nav className="flex gap-4">
          <Button variant="ghost">Tarefas</Button>
          <Button variant="ghost">Projetos</Button>
          <Button variant="ghost">Calendário</Button>
          <Button variant="outline">Conta</Button>
        </nav>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Tarefas prioritárias</h2>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <span className="sr-only">Filtrar</span>
                Hoje
              </Button>
              <Button size="sm" variant="ghost">
                <Plus className="h-4 w-4 mr-1" /> Nova tarefa
              </Button>
            </div>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-0">
              <ul className="divide-y divide-zinc-800">
                {tasks.map(task => (
                  <li key={task.id} className="flex items-center py-3 px-4 hover:bg-zinc-800/50">
                    <div className="flex items-center flex-1">
                      <Checkbox 
                        checked={task.completed} 
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mr-3"
                      />
                      <span className={`${task.completed ? 'line-through text-gray-500' : ''} flex-1`}>
                        {task.title}
                      </span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${getPriorityClass(task.priority)}`} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mt-8">
            <h2 className="text-xl font-semibold">Projetos ativos</h2>
            <Button size="sm" variant="ghost">
              <Plus className="h-4 w-4 mr-1" /> Novo projeto
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Redesign do site</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Progresso: 60%</span>
                  <span>4d restantes</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 mt-2">
                  <div className="bg-blue-500 h-1 w-3/5"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Lançamento de produto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Progresso: 25%</span>
                  <span>14d restantes</span>
                </div>
                <div className="w-full bg-zinc-800 h-1 mt-2">
                  <div className="bg-blue-500 h-1 w-1/4"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Atividade recente</h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-0">
                <ul className="text-sm">
                  <li className="py-2 px-4 border-b border-zinc-800">
                    <div className="flex items-center text-gray-400">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span>Concluiu <span className="text-white">Preparar apresentação</span></span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Hoje às 14:30</p>
                  </li>
                  <li className="py-2 px-4">
                    <div className="flex items-center text-gray-400">
                      <Plus className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Adicionou <span className="text-white">Revisar documentação</span></span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Hoje às 10:15</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Atalhos</h2>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-4 text-sm">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Nova tarefa</span>
                    <span className="text-gray-500">N</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Pesquisar</span>
                    <span className="text-gray-500">⌘ + K</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Modo foco</span>
                    <span className="text-gray-500">⌘ + F</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-gray-500 text-xs">
        <div className="mb-4">
          <Link to="/" className="hover:text-white inline-flex items-center">
            <ChevronRight className="h-3 w-3 rotate-180" />
            <span>Voltar para home</span>
          </Link>
        </div>
        <p>TaskFlow © {new Date().getFullYear()} - Foco radical em produtividade</p>
      </footer>
    </div>
  );
}
