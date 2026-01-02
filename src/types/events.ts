export interface WeddingDetails {
  groom_name: string;
  bride_name: string;
  groom_image?: string;
  bride_image?: string;
  groom_details?: string;
  bride_details?: string;
}

export interface CoHost {
  name: string;
  mobile_number: string;
  profile_pic?: string;
}

export interface SubEvent {
  id: string;
  name: string;
  date: string; // ISO String or "DD/MM/YYYY" depending on backend
  time: string;
  location: string;
  imageUrl?: string;
  day: string; // e.g., "Day 1"
}

export interface EventData {
  _id: string; // or 'id'
  title: string;
  hashtag: string;
  start_time: string; // ISO String
  end_time: string; // ISO String
  location: string;
  address: string;
  banner_image: string;
  event_type: string; // e.g., 'Wedding'
  invite_message: string;
  wedding_details?: WeddingDetails;
  is_published?: boolean;
}