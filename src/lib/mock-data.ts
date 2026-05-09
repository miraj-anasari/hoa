export const dashboardWidgets = [
  { label: "Total Due", value: "$1,450", change: "+12% this month", accent: "from-rose-500 to-fuchsia-500" },
  { label: "Upcoming Elections", value: "2", change: "Voting opens in 4 days", accent: "from-sky-500 to-cyan-500" },
  { label: "Meter Reading", value: "34 kWh", change: "Avg use this week", accent: "from-emerald-500 to-lime-500" },
  { label: "Pending Permits", value: "5", change: "3 new requests", accent: "from-violet-500 to-indigo-500" },
];

export const electionCandidates = [
  { name: "Maya Patel", role: "Board Candidate", votes: 320 },
  { name: "Jordan Lin", role: "Treasury Candidate", votes: 280 },
  { name: "Hannah Brooks", role: "Community Liaison", votes: 240 },
];

export const depositHistory = [
  { id: "HD-1024", date: "Apr 8, 2026", amount: "$450", status: "Completed" },
  { id: "HD-1018", date: "Mar 28, 2026", amount: "$500", status: "Completed" },
  { id: "HD-1007", date: "Mar 12, 2026", amount: "$500", status: "Pending" },
];

export const vehicles = [
  { make: "Tesla", model: "Model 3", plate: "ABC-7293", status: "Approved" },
  { make: "Honda", model: "CR-V", plate: "HDO-8812", status: "Approved" },
];

export const permits = [
  { id: "PR-1302", type: "Roof Repair", status: "Reviewing", owner: "House 14" },
  { id: "PR-1305", type: "Fence Replacement", status: "Approved", owner: "House 2" },
  { id: "PR-1310", type: "Pool Renovation", status: "Pending", owner: "House 9" },
];

export const duesSummary = [
  { period: "Apr 2026", status: "Paid", amount: "$250", dueDate: "Apr 1" },
  { period: "May 2026", status: "Due", amount: "$250", dueDate: "May 1" },
  { period: "Jun 2026", status: "Upcoming", amount: "$250", dueDate: "Jun 1" },
];

export const meterHistory = [
  { month: "Jan", reading: 28, usage: 112 },
  { month: "Feb", reading: 31, usage: 124 },
  { month: "Mar", reading: 33, usage: 132 },
  { month: "Apr", reading: 34, usage: 136 },
];

export const profileDetails = {
  name: "Owner Living House 1",
  email: "owner@hoa-example.com",
  phone: "+1 (415) 555-0198",
  address: "Unit 1, 29 Willow Creek, San Jose, CA",
  residentSince: "2021",
};
