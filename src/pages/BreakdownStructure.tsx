import { Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

const processSteps = [
  "Identify potential events",
  "Formulate risks and opportunities",
  "Evaluate Event Occurrence",
  "Identify Impacts",
  "Evaluate Impact Severity and Likelihood"
];

const BreakdownStructure = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#1A1F26] text-white">
        <AppSidebar />
        <div className="flex-1">
          {/* Header with navigation */}
          <header className="bg-[#1E242C] border-b border-[#2A3541]">
            <div className="container mx-auto">
              <div className="flex items-center justify-between h-16 px-4">
                <div className="flex items-center gap-4">
                  <img src="/lovable-uploads/526adaa9-7826-4703-b19e-6925aedb300a.png" alt="ESA Logo" className="h-8" />
                  <span className="text-sm text-gray-400">BUSINESS MANAGEMENT SYSTEM</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-[#2A3541] rounded-full px-4 py-1.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <span className="text-sm">AI</span>
                    <span className="text-sm text-gray-400">Ask anything about processes...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://github.com/shadcn.png" alt="User" className="w-8 h-8 rounded-full" />
                    <span className="text-sm">MARTIN Guillermo</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Sub navigation */}
          <div className="bg-[#1E242C] py-2 px-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-400">PM - Risk Management</span>
              <span>/</span>
              <span className="text-blue-400">Identify Risk</span>
              <span>/</span>
              <span className="text-blue-400">Analyse Risk</span>
              <span>/</span>
              <span className="text-blue-400">Prioritize Risk</span>
              <span>/</span>
              <span className="text-blue-400">Treat Risk</span>
              <span>/</span>
              <span className="text-blue-400">Monitor & Report</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Identify potential events</span>
              <span>/</span>
              <span>Formulate risks and opportunities</span>
              <span>/</span>
              <span>Evaluate Event Occurrence</span>
              <span>/</span>
              <span>Identify Impacts</span>
              <span>/</span>
              <span>Evaluate Impact severity and likelihood</span>
              <span>/</span>
              <span>Score risk</span>
            </div>
          </div>

          {/* Main content */}
          <main className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl font-bold">Identify Risks</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                  <Star className="w-4 h-4" />
                  ADD TO FAVOURITES
                </Button>
                <Button variant="outline" className="bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button variant="outline" className="bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                Explain
              </Button>
              <Button variant="outline" className="bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                Similar in ESA
              </Button>
              <Button variant="outline" className="bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                Discuss
              </Button>
              <Button variant="outline" className="bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                Updates
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* Process Sequence */}
              <div className="bg-[#1E242C] rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Process Sequence</h2>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 bg-[#2A3541] rounded-lg p-4">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Input/Output Diagram */}
              <div className="bg-[#1E242C] rounded-lg p-6">
                <Button variant="outline" className="w-full mb-4 bg-blue-500 hover:bg-blue-600 border-0">
                  Input A
                </Button>
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-[#2A3541] rounded-lg p-4 w-full">
                    <span className="text-sm">[task name]</span>
                  </div>
                  <div className="bg-[#2A3541] rounded-lg p-4 w-full">
                    <span className="text-sm">ERBS</span>
                  </div>
                  <Button variant="outline" className="w-full bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                    Output Name
                  </Button>
                  <Button variant="outline" className="w-full bg-[#2A3541] border-[#2A3541] hover:bg-[#374151]">
                    Output Name
                  </Button>
                </div>
              </div>

              {/* Right Panel */}
              <div className="space-y-8">
                <div className="bg-[#1E242C] rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Input A</h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. Pulvinar lacus facilisis et ac et tellus nibh enim. 
                    Sed pellentesque augue orci viverra. Et lacus porttitor quam euismod. Metus diam lacus erat proin.
                  </p>
                </div>

                <div className="bg-[#1E242C] rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Purpose</h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. In dignissim risus sed non lectus tortor elit. Risus porta 
                    adipiscing posuere tincidunt feugiat. Nisi a nibh cursus a. Ut scelerisque amet sed sed ultricies tristique 
                    diam tellus tempor. Sed mauris at porta interdum lacus sit. Lobortum nam velit. Feugiat purus amet ut rutrum quam. 
                    Lectus nulla mi tempus tellus libero. Egestas eleifend consectetur ornare et sagittis suspendisse.
                  </p>
                </div>

                <div className="bg-[#1E242C] rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Description</h3>
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. In dignissim risus sed non lectus tortor elit. Risus porta 
                    adipiscing posuere tincidunt feugiat. Nisi a nibh cursus a. Ut scelerisque amet sed sed ultricies tristique 
                    diam tellus tempor. Sed mauris at porta interdum lacus sit.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-sm text-gray-400 space-y-2">
                    <li>Nisi lacus habitant fringilla nulla morbi cras sed ullamcorper eget.</li>
                    <li>Viverra feugiat faucibus dignissim fringilla lacus. Vulputate enim venenatis congue senectus non et.</li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BreakdownStructure;