import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Download } from "lucide-react";

const costData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/10 bg-secondary/50">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/526adaa9-7826-4703-b19e-6925aedb300a.png" alt="ESA Logo" className="h-8" />
            <h1 className="text-2xl font-bold">Ariel</h1>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">MARTIN Guillermo</p>
              <p className="text-muted-foreground">Project Manager</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 space-y-8">
        {/* Timeline */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Working schedule</h2>
          <div className="grid grid-cols-5 gap-4">
            {['Phase 0', 'Phase A/B1', 'Phase A/B1', 'Project plan', 'Project'].map((phase, i) => (
              <Card key={i} className={`p-4 ${i === 2 ? 'bg-destructive text-destructive-foreground' : ''}`}>
                <p className="text-sm">{phase}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* KPIs */}
        <div className="grid grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Global Risks KPIs</h3>
            <p className="text-sm text-muted-foreground mb-4">LAST EVALUATION - 03/2025</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current risk level</p>
                <p className="text-4xl font-bold text-destructive">4</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Potential cost</p>
                <p className="text-2xl font-bold">XXXM€</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={costData}>
                <Line type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={2} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Cost KPIs</h3>
            <p className="text-sm text-muted-foreground mb-4">LAST EVALUATION - 03/2025</p>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={costData}>
                <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
                <XAxis dataKey="name" hide />
                <YAxis hide />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Objectives */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Phase A/B1 Objectives</h3>
          <p className="text-sm text-muted-foreground">
            Ariel is currently experiencing delays and cost overruns due to issues with a critical satellite component supplier. 
            The project is now 31 days behind schedule, primarily due to a backlog in the supplier's production capacity, 
            which has delayed the delivery of essential parts.
          </p>
        </Card>

        {/* Topics */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Phase topics</h2>
          <Tabs defaultValue="risk">
            <TabsList className="grid grid-cols-6 h-auto">
              {['Risk', 'Schedule', 'Cost', 'Contracts', 'Resources', 'Quality'].map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab.toLowerCase()}
                  className="data-[state=active]:bg-primary"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </section>

        {/* Input Section */}
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Input A</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;