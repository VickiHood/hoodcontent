import { useState } from "react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Image as ImageIcon, Sparkles, Loader2, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AIThumbnailGenerator = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [style, setStyle] = useState("professional");
  const [colorScheme, setColorScheme] = useState("blue and white");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateThumbnail = async () => {
    if (!videoTitle) {
      toast({
        title: "Missing Information",
        description: "Please enter a video title",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-thumbnail-generator", {
        body: { videoTitle, style, colorScheme },
      });

      if (error) throw error;

      setThumbnailUrl(data.imageUrl);
      toast({
        title: "Thumbnail Generated!",
        description: "Your AI thumbnail is ready",
      });
    } catch (error: unknown) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to generate thumbnail";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadThumbnail = () => {
    if (!thumbnailUrl) return;
    
    const link = document.createElement('a');
    link.href = thumbnailUrl;
    link.download = `${videoTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_thumbnail.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <SEO
        title="AI Thumbnail Generator | Video Production AI"
        description="Generate eye-catching YouTube thumbnails using AI for your video content"
      />
      <ModernHeader />
      
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Thumbnail Generator
            </h1>
            <p className="text-xl text-muted-foreground">
              Create professional YouTube thumbnails in seconds
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Thumbnail Settings</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="videoTitle">Video Title</Label>
                  <Input
                    id="videoTitle"
                    placeholder="e.g., How to Scale Your SaaS to $1M ARR"
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="style">Visual Style</Label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="energetic">Energetic</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="tech">Tech/Futuristic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="colorScheme">Color Scheme</Label>
                  <Input
                    id="colorScheme"
                    placeholder="e.g., blue and white, vibrant colors"
                    value={colorScheme}
                    onChange={(e) => setColorScheme(e.target.value)}
                  />
                </div>

                <Button
                  onClick={generateThumbnail}
                  disabled={isGenerating}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Thumbnail...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Generate Thumbnail
                    </>
                  )}
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Generated Thumbnail
              </h2>
              {thumbnailUrl ? (
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border border-border">
                    <img
                      src={thumbnailUrl}
                      alt="Generated thumbnail"
                      className="w-full h-auto"
                    />
                  </div>
                  <Button
                    onClick={downloadThumbnail}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Thumbnail
                  </Button>
                </div>
              ) : (
                <div className="text-center py-24 text-muted-foreground border-2 border-dashed border-border rounded-lg">
                  <ImageIcon className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>Your thumbnail will appear here</p>
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

export default AIThumbnailGenerator;
