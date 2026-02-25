import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const originalImages = [
  '1.HEIC',
  '2.HEIC',
  '3.HEIC',
  '4.HEIC',
  '5.HEIC',
  '6.HEIC',
  '7.JPG',
  '8.HEIC'
];

const OriginalPhotos = () => {
  const getPreviewUrl = (filename: string) => {
    // For HEIC files, use the pre-converted JPG version
    if (filename.endsWith('.HEIC')) {
      return `/images/photography/${filename.replace('.HEIC', '.jpg')}`;
    }
    // For JPG files, use the original
    return `/images/photography/${filename}`;
  };

  const getDownloadUrl = (filename: string) => {
    return `/images/photography/${filename}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to main site
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">
          Original Photography Files
        </h1>
        <p className="text-muted-foreground mb-8">
          High-resolution original images from the photography collection
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {originalImages.map((filename) => {
            const isHEIC = filename.endsWith('.HEIC');
            const previewUrl = getPreviewUrl(filename);
            const downloadUrl = getDownloadUrl(filename);
            
            return (
              <div
                key={filename}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="aspect-square bg-muted flex items-center justify-center relative">
                  <img
                    src={previewUrl}
                    alt={filename}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden flex items-center justify-center text-muted-foreground text-sm">
                    <Download className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>Image File</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground mb-3 break-all">
                    {filename}
                  </p>
                  <a
                    href={downloadUrl}
                    download={filename}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors w-full justify-center"
                  >
                    <Download className="h-4 w-4" />
                    Download Original
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OriginalPhotos;
