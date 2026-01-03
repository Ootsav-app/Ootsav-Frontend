export interface WeddingDetails {
  id: string;
  groom_name: string;
  bride_name: string;
  groom_image: string;
  bride_image: string;
  groom_details: string;
  bride_details: string;
  hashtag: string;
}

export interface CoHost {
  id: string;
  name: string;
  mobileNumber: string;
  profilePic: string;
}

export interface SubEvent {
  id: string;
  title: string;
  location: string;
  address: string;
  inviteMessage: string | null;
  image: string;
  startDateTime: string;
  endDateTime: string;
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

// API Response Types
export interface InviteApiEvent {
  id: string;
  title: string;
  type: string;
  location: string;
  address: string;
  invite_message: string;
  image: string;
  visibility: string;
  created_at: string;
  start_date_time: string;
  end_date_time: string;
  hostId: string;
  weddingDetails: WeddingDetails | null;
  birthdayDetails: unknown | null;
  housePartyDetails: unknown | null;
  travelDetails: unknown | null;
  corporateDetails: unknown | null;
  collegeDetails: unknown | null;
  otherDetails: unknown | null;
}

export interface InviteApiGroup {
  id: string;
  name: string;
}

export interface InviteApiRsvpFormConfig {
  collectAttendance: boolean;
  collectGuestCount: boolean;
  collectFood: boolean;
  collectAlcohol: boolean;
  collectAccommodation: boolean;
  accommodationDetails: string;
  collectTransport: boolean;
  transportDetails: string;
  additionalNotes: string;
  isRsvpAllowed: boolean;
  rsvpLockDate: string;
  daysUntilLock: number;
}

export interface InviteApiRsvpPreferences {
  formConfig: InviteApiRsvpFormConfig;
  group: InviteApiGroup;
}

export interface InviteApiResponse {
  group: InviteApiGroup;
  event: InviteApiEvent;
  userContext: unknown | null;
  isAuthenticated: boolean;
  coHosts: CoHost[];
  subEvents: SubEvent[];
  rsvpPreferences: InviteApiRsvpPreferences;
}
