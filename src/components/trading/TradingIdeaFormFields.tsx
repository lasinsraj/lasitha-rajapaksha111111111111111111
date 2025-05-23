
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TradingIdeaImageUploader from "./TradingIdeaImageUploader";

interface TradingIdeaFormFieldsProps {
  title: string;
  setTitle: (title: string) => void;
  description: string;
  setDescription: (description: string) => void;
  imageUrls: string[];
  setImageUrls: (urls: string[]) => void;
  youtubeUrl: string;
  setYoutubeUrl: (url: string) => void;
}

const TradingIdeaFormFields = ({
  title,
  setTitle,
  description,
  setDescription,
  imageUrls,
  setImageUrls,
  youtubeUrl,
  setYoutubeUrl
}: TradingIdeaFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="E.g., 'EURUSD Bullish Breakout Setup'"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full relative z-10"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Chart Images (Maximum 5)</Label>
        <TradingIdeaImageUploader 
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="youtubeUrl">YouTube Video URL (Optional)</Label>
        <Input
          id="youtubeUrl"
          placeholder="https://www.youtube.com/watch?v=..."
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="w-full"
        />
        <p className="text-xs text-muted-foreground">
          Add a YouTube video to provide additional context or analysis
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Describe your trading idea, analysis, and potential entry/exit points..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="min-h-32"
          required
        />
      </div>
    </>
  );
};

export default TradingIdeaFormFields;
