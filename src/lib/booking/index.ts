export const OFFICIAL_BOOKING_URL =
  "https://app.minihotelman.com/ChannelManager/booking-engine/nishigandh-agro-farms";

export function getBookingUrl(): string {
  return process.env.NEXT_PUBLIC_BOOKING_URL || OFFICIAL_BOOKING_URL;
}
