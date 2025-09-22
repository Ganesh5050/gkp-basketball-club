import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LazyImage } from "@/components/ui/LazyImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Play, Image as ImageIcon, MapPin, ExternalLink, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import { 
  fetchGoogleMapsMedia, 
  getMockGoogleMapsPhotos, 
  getMockGoogleMapsVideos,
  getGoogleMapsUrl,
  type GoogleMapsPhoto,
  type GoogleMapsVideo
} from "@/lib/googleMaps";

// Real gallery images from uploaded files
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204618.png",
    alt: "GKP Basketball Training",
    caption: "Intensive training session at GKP Basketball Club",
    type: "photo",
    source: "local"
  },
  {
    id: 2,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204658.png",
    alt: "Team Practice Session",
    caption: "Team practice focusing on fundamentals",
    type: "photo",
    source: "local"
  },
  {
    id: 3,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204709.png",
    alt: "Basketball Skills Training",
    caption: "Developing advanced basketball skills",
    type: "photo",
    source: "local"
  },
  {
    id: 4,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204730.png",
    alt: "Court Action",
    caption: "Fast-paced action on our basketball court",
    type: "photo",
    source: "local"
  },
  {
    id: 5,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204806.png",
    alt: "Training Session",
    caption: "Dedicated training session with our coaches",
    type: "photo",
    source: "local"
  },
  {
    id: 6,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204826.png",
    alt: "Team Building",
    caption: "Building team spirit and camaraderie",
    type: "photo",
    source: "local"
  },
  {
    id: 7,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204904.png",
    alt: "Basketball Fundamentals",
    caption: "Mastering the basics of basketball",
    type: "photo",
    source: "local"
  },
  {
    id: 8,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204911.png",
    alt: "Court Practice",
    caption: "Regular practice sessions on our court",
    type: "photo",
    source: "local"
  },
  {
    id: 9,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204918.png",
    alt: "Skill Development",
    caption: "Focusing on individual skill development",
    type: "photo",
    source: "local"
  },
  {
    id: 10,
    src: "/images/gallery/gkp-images/Screenshot 2025-09-21 204934.png",
    alt: "Team Training",
    caption: "Comprehensive team training program",
    type: "photo",
    source: "local"
  },
  {
    id: 11,
    src: "/images/gallery/gkp-images/490346164_1215442663922243_3096316385282338702_n.jpg",
    alt: "GKP Basketball Action",
    caption: "Dynamic basketball action at GKP Basketball Club",
    type: "photo",
    source: "local"
  },
  {
    id: 12,
    src: "/images/gallery/gkp-images/490359023_1215442317255611_2239931278808328340_n.jpg",
    alt: "Training Session Highlights",
    caption: "Highlights from our intensive training sessions",
    type: "photo",
    source: "local"
  },
];

// No additional Google Maps photos needed - using real uploaded images
const mockGoogleMapsPhotos = [];

// Real videos from uploaded files
const mockGoogleMapsVideos = [
  {
    id: "gm_vid_1",
    src: "/videos/gallery/gkp videos/WhatsApp Video 2025-06-07 at 14.02.12_d6e5c350.mp4",
    thumbnail: "/images/gallery/gkp-images/Screenshot 2025-09-21 204709.png",
    alt: "GKP Basketball Training Video",
    caption: "Training session video from GKP Basketball Club",
    type: "video",
    source: "local",
    attribution: "Video by GKP Basketball Club"
  }
];

// Enhanced Image Slider Component
const ImageSlider = ({ images }: { images: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  // Progress bar animation
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // 2% every 100ms = 100% in 5 seconds
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [currentIndex, isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -100 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="absolute inset-0"
          >
            <LazyImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-3 text-sm px-3 py-1">
                    Training Session
                  </Badge>
                  <h3 className="text-white font-bold text-2xl mb-2 line-clamp-2">
                    {images[currentIndex].caption}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <ImageIcon className="w-4 h-4" />
                    <span>GKP Basketball</span>
                  </div>
                </div>
                <div className="text-right text-white/80">
                  <p className="text-sm">
                    {currentIndex + 1} of {images.length}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute top-6 left-6 right-20">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          </div>
        )}

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [googleMapsPhotos, setGoogleMapsPhotos] = useState<any[]>([]);
  const [googleMapsVideos, setGoogleMapsVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch Google Maps photos and videos
  useEffect(() => {
    const fetchGoogleMapsMedia = async () => {
      setLoading(true);
      try {
        // In a real implementation, you would call Google Places API here
        // For now, we'll use mock data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        
        setGoogleMapsPhotos(mockGoogleMapsPhotos);
        setGoogleMapsVideos(mockGoogleMapsVideos);
      } catch (error) {
        console.error("Error fetching Google Maps media:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleMapsMedia();
  }, []);

  // Combine all media
  const allMedia = [...galleryImages, ...googleMapsPhotos, ...googleMapsVideos];
  const photos = allMedia.filter(item => item.type === "photo");
  const videos = allMedia.filter(item => item.type === "video");

  const getFilteredMedia = () => {
    switch (activeTab) {
      case "photos":
        return photos;
      case "videos":
        return videos;
      default:
        return allMedia;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const MediaItem = ({ item }: { item: any }) => (
    <motion.div 
      className="relative overflow-hidden rounded-xl cursor-pointer group bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300"
      variants={itemVariants}
      onClick={() => setSelectedMedia(item)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative pb-[56.25%] w-full">
        <div className="absolute inset-0">
          {item.type === "video" ? (
            <div className="relative w-full h-full">
              <LazyImage 
                src={item.thumbnail} 
                alt={item.alt} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          ) : (
            <LazyImage 
              src={item.src} 
              alt={item.alt} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          )}
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Source Badge */}
      <div className="absolute top-3 right-3">
        <Badge 
          variant={item.source === "google_maps" ? "default" : "secondary"}
          className="text-xs bg-white/20 backdrop-blur-sm border-white/30 text-white"
        >
          {item.source === "google_maps" ? (
            <>
              <MapPin className="w-3 h-3 mr-1" />
              Google Maps
            </>
          ) : (
            <>
              <ImageIcon className="w-3 h-3 mr-1" />
              Local
            </>
          )}
        </Badge>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{item.caption}</h3>
        {item.attribution && (
          <p className="text-white/70 text-xs">{item.attribution}</p>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Moments captured from our training sessions, tournaments, and team events.
            Real photos and videos from GKP Basketball Club.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <ImageIcon className="w-4 h-4" />
              <span>{photos.length} Photos</span>
            </div>
            <div className="flex items-center gap-1">
              <Play className="w-4 h-4" />
              <span>{videos.length} Videos</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{galleryImages.length} Real Photos</span>
            </div>
          </div>
        </motion.div>

        {/* Auto-Playing Image Slider */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <ImageSlider images={photos} />
            
            {/* View All Button */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={() => setActiveTab("photos")}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View All Photos
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              All ({allMedia.length})
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Photos ({photos.length})
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Videos ({videos.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="all"
            >
              {getFilteredMedia().map((item, index) => (
                <motion.div
                  key={item.id}
              variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
                >
                  <MediaItem item={item} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="photos" className="mt-6">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="photos"
            >
              {getFilteredMedia().map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MediaItem item={item} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="videos"
            >
              {getFilteredMedia().map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MediaItem item={item} />
            </motion.div>
          ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Real Content Info */}
        <motion.div 
          className="text-center mt-12 p-6 bg-green-50 rounded-lg border border-green-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <ImageIcon className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-800">Real Content Gallery</h3>
          </div>
          <p className="text-green-700 text-sm mb-3">
            All photos and videos are from actual GKP Basketball Club training sessions and events.
          </p>
          <a 
            href="https://www.google.com/maps/place/Gkp+Basketball+Club+Ghatkopar/@19.0846065,72.914231,174m/data=!3m1!1e3!4m9!1m2!2m1!1sMaratha+Warriors,+Pant+Nagar+Colony+Rd,+Naidu+Colony,+Pant+Nagar,+Mankur,+Mumbai,+Maharashtra+400075!3m5!1s0x3be7c7784a621c99:0xdcfe3110293cfc24!8m2!3d19.0848387!4d72.9141381!16s%2Fg%2F11pxwhplqv?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium"
          >
            View Club Location on Google Maps
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>

      {/* Media Modal */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedMedia && (
            <div className="relative">
              {selectedMedia.type === "video" ? (
                <video 
                  src={selectedMedia.src} 
                  controls 
                  className="w-full h-auto rounded-lg"
                  poster={selectedMedia.thumbnail}
                  preload="metadata"
                />
              ) : (
              <LazyImage 
                  src={selectedMedia.src} 
                  alt={selectedMedia.alt} 
                className="w-full h-auto rounded-lg"
              />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{selectedMedia.caption}</p>
                    {selectedMedia.attribution && (
                      <p className="text-white/70 text-sm">{selectedMedia.attribution}</p>
                    )}
                  </div>
                  <Badge 
                    variant={selectedMedia.source === "google_maps" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {selectedMedia.source === "google_maps" ? (
                      <>
                        <MapPin className="w-3 h-3 mr-1" />
                        Google Maps
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 mr-1" />
                        Local
                      </>
                    )}
                  </Badge>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};