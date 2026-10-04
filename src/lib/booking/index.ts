export function getBookingUrl(): string {
  return process.env.NEXT_PUBLIC_BOOKING_URL ?? "/booking";
}
