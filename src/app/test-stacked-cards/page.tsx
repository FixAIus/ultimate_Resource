import { KPIStackedCards } from "@/components/ui/kpi-stacked-cards";
import { MessageSquareMore, Target, Sparkles, PhoneCall } from "lucide-react";

export default function TestStackedCardsPage() {
  return (
    <main className="max-w-content mx-auto container-px py-14">
      <h1 className="text-3xl font-bold text-white mb-8">Test Stacked Cards Component</h1>
      
      <div className="bg-gray-900 p-8 rounded-lg">
        <KPIStackedCards
          cards={[
            {
              title: "Message & Pitch Effectiveness",
              icon: <MessageSquareMore className="w-full h-full" />,
              iconBgColor: "bg-purple-600",
              iconColor: "text-white",
              bulletPoints: {
                whatToAnalyze: "Test content for what to analyze",
                whyImportant: "Test content for why important",
                whatItReveals: "Test content for what it reveals"
              }
            },
            {
              title: "Funnel Performance Signals",
              icon: <Target className="w-full h-full" />,
              iconBgColor: "bg-blue-600",
              iconColor: "text-white",
              bulletPoints: {
                whatToAnalyze: "Test content for what to analyze",
                whyImportant: "Test content for why important",
                whatItReveals: "Test content for what it reveals"
              }
            },
            {
              title: "ICP Profiling & Prospect Clarity",
              icon: <Sparkles className="w-full h-full" />,
              iconColor: "text-white",
              iconBgColor: "bg-green-600",
              bulletPoints: {
                whatToAnalyze: "Test content for what to analyze",
                whyImportant: "Test content for why important",
                whatItReveals: "Test content for what it reveals"
              }
            },
            {
              title: "Objection & Pain Points",
              icon: <PhoneCall className="w-full h-full" />,
              iconBgColor: "bg-red-600",
              iconColor: "text-white",
              bulletPoints: {
                whatToAnalyze: "Test content for what to analyze",
                whyImportant: "Test content for why important",
                whatItReveals: "Test content for what it reveals"
              }
            },
            {
              title: "Talking Points & Interests",
              icon: <MessageSquareMore className="w-full h-full" />,
              iconBgColor: "bg-orange-600",
              iconColor: "text-white",
              bulletPoints: {
                whatToAnalyze: "Test content for what to analyze",
                whyImportant: "Test content for why important",
                whatItReveals: "Test content for what it reveals"
              }
            }
          ]}
        />
      </div>
    </main>
  );
}
