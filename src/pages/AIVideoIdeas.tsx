import { useState } from "react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, Sparkles, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AIVideoIdeas = () => {
  const [topic, setTopic] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [videoType, setVideoType] = useState("explainer");
  const [numberOfIdeas, setNumberOfIdeas] = useState("5");
  const [ideas, setIdeas] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateIdeas = async () => {
    if (!topic || !targetAudience) {
      toast({
        title: "Missing Information",
        description: "Please fill in topic and target audience",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-video-ideas", {
        body: { topic, targetAudience, videoType, numberOfIdeas: parseInt(numberOfIdeas) },
      });

      if (error) throw error;

      setIdeas(data.ideas);
      toast({
        title: "Ideas Generated!",
        description: "AI has created your video ideas",
      });
    } catch (error: unknown) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate ideas";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <SEO
        title="AI Video Idea Generator | Video Production AI"
        description="Generate creative video content ideas using AI for your SaaS marketing videos"
      />
      <ModernHeader />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Video Idea Generator
            </h1>
            <p className="text-xl text-muted-foreground">
              Generate creative video content ideas tailored to your audience
            </p>
          </div>

          <Card className="p-6 mb-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="topic">Video Topic or Theme</Label>
                <Input
                  id="topic"
                  placeholder="e.g., SaaS onboarding, Product features, Customer success"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  placeholder="e.g., B2B SaaS founders, Product managers"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="videoType">Video Type</Label>
                  <Select value={videoType} onValueChange={setVideoType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="explainer">Explainer</SelectItem>
                      <SelectItem value="demo">Product Demo</SelectItem>
                      <SelectItem value="testimonial">Testimonial</SelectItem>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="numberOfIdeas">Number of Ideas</Label>
                  <Select value={numberOfIdeas} onValueChange={setNumberOfIdeas}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 Ideas</SelectItem>
                      <SelectItem value="5">5 Ideas</SelectItem>
                      <SelectItem value="10">10 Ideas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={generateIdeas}
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Generate Video Ideas
                  </>
                )}
              </Button>
            </div>
          </Card>

          {ideas && (
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Your Video Ideas
              </h2>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-foreground bg-muted p-4 rounded-lg">
                  {ideas}
                </pre>
              </div>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AIVideoIdeas;
