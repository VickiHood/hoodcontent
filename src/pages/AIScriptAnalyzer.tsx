import { useState } from "react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileSearch, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AIScriptAnalyzer = () => {
  const [script, setScript] = useState("");
  const [analysisType, setAnalysisType] = useState("general");
  const [analysis, setAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzeScript = async () => {
    if (!script) {
      toast({
        title: "Missing Script",
        description: "Please paste your script to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-script-analyzer", {
        body: { script, analysisType },
      });

      if (error) throw error;

      setAnalysis(data.analysis);
      toast({
        title: "Analysis Complete!",
        description: "AI has analyzed your script",
      });
    } catch (error: unknown) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to analyze script";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <SEO
        title="AI Script Analyzer | Video Production AI"
        description="Get AI-powered analysis and improvements for your video scripts"
      />
      <ModernHeader />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Script Analyzer
            </h1>
            <p className="text-xl text-muted-foreground">
              Get expert feedback and improvements for your video scripts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Your Script</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="analysisType">Analysis Type</Label>
                  <Select value={analysisType} onValueChange={setAnalysisType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Analysis</SelectItem>
                      <SelectItem value="improve">Improvement Suggestions</SelectItem>
                      <SelectItem value="engagement">Engagement Analysis</SelectItem>
                      <SelectItem value="conversion">Conversion Optimization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="script">Paste Your Script</Label>
                  <Textarea
                    id="script"
                    placeholder="Paste your video script here..."
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    className="min-h-[400px] font-mono"
                  />
                </div>

                <Button
                  onClick={analyzeScript}
                  disabled={isAnalyzing}
                  className="w-full"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Script...
                    </>
                  ) : (
                    <>
                      <FileSearch className="mr-2 h-4 w-4" />
                      Analyze Script
                    </>
                  )}
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                AI Analysis
              </h2>
              {analysis ? (
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-foreground bg-muted p-4 rounded-lg max-h-[500px] overflow-y-auto">
                    {analysis}
                  </pre>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <FileSearch className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>Your AI analysis will appear here</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AIScriptAnalyzer;
