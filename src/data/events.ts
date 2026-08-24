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
    ticketLink: "https://l.instagram.com/?u=https%3A%2F%2Flink.dice.fm%2Ff1540158d7c4%3Fdice_id%3Df1540158d7c4%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeum_Ih8RQJSnDnkq2JJ9NW39uJncErrXxZKX0hNFAcIE8TBJs3oVVAaO1NCA_aem_FTVe2UHE6Vx9Gp4FZAR9JQ&e=AUDOoc_aerV5QoKKFZCqL6Ml1nr0YqlqytEgF2Ej-nh_uBAB4eN-cGcByYR4c-Z96Yb5SmWFU6HjyfBLItqkgWShTrDrEzSHENTeusuALWme01-lnQqsEafXFBpnFxYebL-xcW8",
  },
];

export const cities: string[] = [
  "Leeds",
  "Nairobi",
];
