export interface KaaskaziniEvent {
  id: string;
  city: string;
  venue: string;
  venueAddress: string;
  title: string;
  date: string; // ISO date
  displayDate: string; // e.g. "12 AUG"
  ticketLink: string;
}

export const events: KaaskaziniEvent[] = [
  {
    id: "ls-2",
    city: "Leeds",
    venue: "Headrow House",
    venueAddress: "19a The Headrow, Leeds LS1 6PU",
    title: "Kaaskazini II",
    date: "2026-09-19",
    displayDate: "19 SEPT",
    ticketLink: "https://link.dice.fm/f1540158d7c4?dice_id=f1540158d7c4",
  },
];

export const cities: string[] = [
  "Leeds",
  "Nairobi",
];
