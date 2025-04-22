
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

type TrainingModule = {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
  module_order: number | null;
  created_at: string;
  updated_at: string;
};

export default function TrainingModules() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["training_modules"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("training_modules")
        .select("*")
        .order("module_order", { ascending: true });
      if (error) throw error;
      return data as TrainingModule[];
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Training Modules</h1>
      {isLoading && (
        <div>
          <Skeleton className="h-12 w-full mb-2" />
          <Skeleton className="h-12 w-full mb-2" />
        </div>
      )}
      {error && (
        <div className="text-red-600">Error loading modules: {error.message}</div>
      )}
      {data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((mod) => (
              <TableRow key={mod.id}>
                <TableCell className="font-medium">{mod.title}</TableCell>
                <TableCell>{mod.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      {data && data.length === 0 && (
        <div className="text-muted-foreground mt-4">No training modules found.</div>
      )}
    </div>
  );
}
