// Google Maps API integration for fetching photos and videos
// Replace with your actual Google Maps API key and Place ID

export interface GoogleMapsPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  type: "photo";
  source: "google_maps";
  photoReference: string;
  attribution: string;
  width?: number;
  height?: number;
}

export interface GoogleMapsVideo {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  caption: string;
  type: "video";
  source: "google_maps";
  attribution: string;
}

export interface GoogleMapsMedia {
  photos: GoogleMapsPhoto[];
  videos: GoogleMapsVideo[];
}

// Configuration
const GOOGLE_MAPS_API_KEY = process.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY";
const PLACE_ID = process.env.VITE_GOOGLE_PLACE_ID || "ChIJN1t_tDeuEmsRUsoyG83frY4";

/**
 * Fetch photos from Google Places API
 */
export const fetchGoogleMapsPhotos = async (placeId: string = PLACE_ID): Promise<GoogleMapsPhoto[]> => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=photos&key=${GOOGLE_MAPS_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }
    
    const photos = data.result?.photos || [];
    
    return photos.map((photo: any, index: number) => ({
      id: `gm_photo_${index}`,
      src: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photo.photo_reference}&key=${GOOGLE_MAPS_API_KEY}`,
      alt: `Google Maps photo ${index + 1}`,
      caption: `Photo from Google Maps - ${photo.html_attributions?.[0] || 'User uploaded'}`,
      type: "photo" as const,
      source: "google_maps" as const,
      photoReference: photo.photo_reference,
      attribution: photo.html_attributions?.[0] || 'Photo by Google Maps',
      width: photo.width,
      height: photo.height
    }));
  } catch (error) {
    console.error('Error fetching Google Maps photos:', error);
    return [];
  }
};

/**
 * Fetch videos from Google Places API (if available)
 * Note: Google Places API doesn't directly provide videos, 
 * but you can integrate with YouTube API or other video sources
 */
export const fetchGoogleMapsVideos = async (placeId: string = PLACE_ID): Promise<GoogleMapsVideo[]> => {
  try {
    // This is a placeholder implementation
    // In a real implementation, you might:
    // 1. Search YouTube for videos related to your place
    // 2. Use Google My Business API for business videos
    // 3. Integrate with other video platforms
    
    // For now, return empty array or mock data
    return [];
  } catch (error) {
    console.error('Error fetching Google Maps videos:', error);
    return [];
  }
};

/**
 * Fetch all media from Google Maps
 */
export const fetchGoogleMapsMedia = async (placeId: string = PLACE_ID): Promise<GoogleMapsMedia> => {
  try {
    const [photos, videos] = await Promise.all([
      fetchGoogleMapsPhotos(placeId),
      fetchGoogleMapsVideos(placeId)
    ]);
    
    return {
      photos,
      videos
    };
  } catch (error) {
    console.error('Error fetching Google Maps media:', error);
    return {
      photos: [],
      videos: []
    };
  }
};

/**
 * Get Google Maps place URL
 */
export const getGoogleMapsUrl = (placeId: string = PLACE_ID): string => {
  return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
};

/**
 * Generate Google Maps embed URL for iframe
 */
export const getGoogleMapsEmbedUrl = (placeId: string = PLACE_ID): string => {
  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=place_id:${placeId}`;
};

/**
 * Mock data for development/testing
 */
export const getMockGoogleMapsPhotos = (): GoogleMapsPhoto[] => [
  {
    id: "gm_1",
    src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    alt: "GKP Basketball Court - Google Maps",
    caption: "Our basketball court as seen on Google Maps",
    type: "photo",
    source: "google_maps",
    photoReference: "CmRaAAAA...",
    attribution: "Photo by Google Maps"
  },
  {
    id: "gm_2", 
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Training Session - Google Maps",
    caption: "Training session captured by visitors",
    type: "photo",
    source: "google_maps",
    photoReference: "CmRaAAAA...",
    attribution: "Photo by Google Maps"
  },
  {
    id: "gm_3",
    src: "https://images.unsplash.com/photo-1608245449312-9fe37b0a0b6a?w=800&h=600&fit=crop", 
    alt: "Team Practice - Google Maps",
    caption: "Team practice session",
    type: "photo",
    source: "google_maps",
    photoReference: "CmRaAAAA...",
    attribution: "Photo by Google Maps"
  }
];

export const getMockGoogleMapsVideos = (): GoogleMapsVideo[] => [
  {
    id: "gm_vid_1",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    alt: "Basketball Training Video",
    caption: "Training session video from Google Maps",
    type: "video",
    source: "google_maps",
    attribution: "Video by Google Maps"
  },
  {
    id: "gm_vid_2",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    alt: "Tournament Highlights",
    caption: "Tournament highlights video",
    type: "video", 
    source: "google_maps",
    attribution: "Video by Google Maps"
  }
];
