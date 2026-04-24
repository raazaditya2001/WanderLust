const samplelistings = [
{
  title: "Cozy Beach Cottage",
  description: "A peaceful cottage near the beach.",
  image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "unsplash1" },
  price: 1200,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "Mountain View Cabin",
  description: "Enjoy scenic mountain views.",
  image: { url: "https://picsum.photos/500/300?random=1", filename: "picsum1" },
  price: 1500,
  location: "Manali",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Luxury Apartment",
  description: "Modern apartment in city center.",
  image: { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", filename: "unsplash2" },
  price: 2500,
  location: "Mumbai",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Desert Camp",
  description: "Experience desert life.",
  image: { url: "https://picsum.photos/500/300?random=2", filename: "picsum2" },
  price: 900,
  location: "Jaisalmer",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "Lake House",
  description: "Relax near the lake.",
  image: { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", filename: "unsplash3" },
  price: 1800,
  location: "Udaipur",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Forest Retreat",
  description: "Stay surrounded by nature.",
  image: { url: "https://picsum.photos/500/300?random=3", filename: "picsum3" },
  price: 1100,
  location: "Coorg",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "City Studio",
  description: "Compact and stylish studio.",
  image: { url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb", filename: "unsplash4" },
  price: 1300,
  location: "Delhi",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "Hilltop Villa",
  description: "Panoramic hill views.",
  image: { url: "https://picsum.photos/500/300?random=4", filename: "picsum4" },
  price: 3000,
  location: "Ooty",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Riverside Cottage",
  description: "Cottage beside river.",
  image: { url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d4c", filename: "unsplash5" },
  price: 1400,
  location: "Rishikesh",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "Heritage Haveli",
  description: "Traditional Rajasthani stay.",
  image: { url: "https://picsum.photos/500/300?random=5", filename: "picsum5" },
  price: 2200,
  location: "Jaipur",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Backwater Villa",
  description: "Kerala backwater experience.",
  image: { url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", filename: "unsplash6" },
  price: 2700,
  location: "Alleppey",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Snow Cabin",
  description: "Perfect winter getaway.",
  image: { url: "https://picsum.photos/500/300?random=6", filename: "picsum6" },
  price: 1900,
  location: "Shimla",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "Beach Shack",
  description: "Budget-friendly beach stay.",
  image: { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", filename: "unsplash7" },
  price: 800,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "Modern Loft",
  description: "Trendy loft apartment.",
  image: { url: "https://picsum.photos/500/300?random=7", filename: "picsum7" },
  price: 2100,
  location: "Bangalore",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Tea Estate Bungalow",
  description: "Stay in tea gardens.",
  image: { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e", filename: "unsplash8" },
  price: 2300,
  location: "Darjeeling",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Island Resort",
  description: "Luxury island stay.",
  image: { url: "https://picsum.photos/500/300?random=8", filename: "picsum8" },
  price: 5000,
  location: "Andaman",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "Desi Farmhouse",
  description: "Village experience.",
  image: { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", filename: "unsplash9" },
  price: 1000,
  location: "Punjab",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "Lake View Apartment",
  description: "Apartment with lake view.",
  image: { url: "https://picsum.photos/500/300?random=9", filename: "picsum9" },
  price: 1600,
  location: "Bhopal",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Temple Stay",
  description: "Peaceful spiritual stay.",
  image: { url: "https://images.unsplash.com/photo-1524492449090-1c7f4a6cbe2d", filename: "unsplash10" },
  price: 700,
  location: "Varanasi",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Jungle Safari Lodge",
  description: "Stay near wildlife.",
  image: { url: "https://picsum.photos/500/300?random=10", filename: "picsum10" },
  price: 2800,
  location: "Jim Corbett",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "City Penthouse",
  description: "Luxury penthouse suite.",
  image: { url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae", filename: "unsplash11" },
  price: 6000,
  location: "Delhi",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "Coastal Villa",
  description: "Villa near coastline.",
  image: { url: "https://picsum.photos/500/300?random=11", filename: "picsum11" },
  price: 3500,
  location: "Chennai",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Budget Hostel",
  description: "Affordable stay option.",
  image: { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", filename: "unsplash12" },
  price: 500,
  location: "Hyderabad",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Luxury Resort",
  description: "5-star resort experience.",
  image: { url: "https://picsum.photos/500/300?random=12", filename: "picsum12" },
  price: 8000,
  location: "Goa",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "Studio Apartment",
  description: "Simple and clean.",
  image: { url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5", filename: "unsplash13" },
  price: 1200,
  location: "Pune",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "River Camp",
  description: "Adventure riverside camp.",
  image: { url: "https://picsum.photos/500/300?random=13", filename: "picsum13" },
  price: 1400,
  location: "Rishikesh",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
},
{
  title: "Hill Cottage",
  description: "Quiet hill retreat.",
  image: { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", filename: "unsplash14" },
  price: 1500,
  location: "Mussoorie",
  country: "India",
  reviews: [],
  owner: "69e12a74898c8c371ff8d42a"
},
{
  title: "Urban Flat",
  description: "Modern city flat.",
  image: { url: "https://picsum.photos/500/300?random=14", filename: "picsum14" },
  price: 1700,
  location: "Ahmedabad",
  country: "India",
  reviews: [],
  owner: "69e11f61296007f5ab0c41a3"
},
{
  title: "Eco Lodge",
  description: "Eco-friendly accommodation.",
  image: { url: "https://images.unsplash.com/photo-1472224371017-08207f84aaae", filename: "unsplash15" },
  price: 2000,
  location: "Sikkim",
  country: "India",
  reviews: [],
  owner: "69e46d8251229bd3e8c9fb58"
},
{
  title: "Cliffside Villa",
  description: "Villa on cliff with views.",
  image: { url: "https://picsum.photos/500/300?random=15", filename: "picsum15" },
  price: 4000,
  location: "Varkala",
  country: "India",
  reviews: [],
  owner: "69e27148977e1dfbd952f21c"
}
];


module.exports={data:samplelistings};