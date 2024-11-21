import dotenv from "dotenv";
import sequelize from "../db/index.js"; // Adjust the path if necessary
import Post from "../db/models/posts.js"; // Adjust the path if necessary

dotenv.config(); // Load environment variables

const posts = [
    {
        author: "Author 1",
        title: "Exploring the Alps",
        description: "A brief guide to hiking and exploring the beautiful Alps region.",
        content: "The Alps offer breathtaking views, thrilling hikes, and cozy lodges. In this post, we dive deep into the must-visit spots like Zermatt in Switzerland, Chamonix in France, and the Dolomites in Italy. We'll also share tips for safe hiking, the best seasons to visit, and the top local cuisines to try while enjoying the alpine scenery.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 2",
        title: "Discovering Bali",
        description: "Top things to see and do in Bali, from beaches to temples.",
        content: "Bali is known for its vibrant culture, stunning beaches, and lush landscapes. Explore serene temples like Uluwatu and Tanah Lot, unwind at beaches like Seminyak and Ubud, and indulge in authentic Balinese cuisine. We'll also guide you through some lesser-known gems such as Sidemen Valley and Pemuteran for an offbeat experience.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 3",
        title: "A Road Trip Across the USA",
        description: "Highlights from a cross-country journey through the United States.",
        content: "From the Grand Canyon's awe-inspiring landscapes to New York City's bustling streets, a road trip across the USA offers unparalleled diversity. Drive along Route 66, explore national parks like Yellowstone and Yosemite, and soak in cultural landmarks. Don't forget to pack these essential items for a smooth journey!",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 1",
        title: "Sailing the Greek Islands",
        description: "Experience the magic of Greece by exploring its stunning islands.",
        content: "The Greek Islands, from Santorini's iconic sunsets to Mykonos' vibrant nightlife, offer something for everyone. Charter a yacht or hop on ferries to explore hidden beaches, charming villages, and ancient ruins. Here's our itinerary for a 10-day adventure through the Aegean Sea.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 2",
        title: "The Magic of Kyoto",
        description: "A cultural deep dive into Kyoto's ancient temples and gardens.",
        content: "Kyoto is the cultural heart of Japan, boasting ancient temples, meticulously designed gardens, and vibrant festivals. Visit landmarks like Kinkaku-ji (the Golden Pavilion), Arashiyama Bamboo Grove, and Gion's geisha district. Experience the tea ceremony and discover the best times to see cherry blossoms and autumn leaves.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 3",
        title: "Camping in Patagonia",
        description: "Tips for an unforgettable camping trip in South America's wilderness.",
        content: "Patagonia's rugged landscapes, from Torres del Paine in Chile to Los Glaciares in Argentina, make it a paradise for adventurers. Learn how to prepare for unpredictable weather, what gear to pack, and the best camping spots to take in the stunning vistas of glaciers, mountains, and lakes.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 1",
        title: "Exploring Iceland's Ring Road",
        description: "An epic journey through Iceland's natural wonders along the Ring Road.",
        content: "Iceland's Ring Road circles the country, offering views of waterfalls, volcanoes, glaciers, and fjords. Visit iconic sites like Seljalandsfoss, Jökulsárlón Glacier Lagoon, and the geothermal fields of Myvatn. Our guide covers how to navigate the road, where to stop, and tips for a safe and memorable trip.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 2",
        title: "A Safari in Kenya",
        description: "Get up close with Africa's incredible wildlife on a Kenyan safari.",
        content: "Kenya's Maasai Mara, Amboseli, and Tsavo parks offer unforgettable wildlife encounters. Witness the Great Migration, spot the Big Five, and learn about conservation efforts. We'll also share tips for choosing a lodge, the best times to visit, and how to make the most of your safari adventure.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
    {
        author: "Author 3",
        title: "Exploring the Canadian Rockies",
        description: "A journey through the majestic landscapes of the Rockies.",
        content: "The Canadian Rockies are a haven for nature enthusiasts, with Banff and Jasper offering stunning vistas, serene lakes, and abundant wildlife. Visit Lake Louise, hike through the Icefields Parkway, and soak in hot springs. Discover the best trails, local cuisine, and how to plan a sustainable trip.",
        cover: "https://via.placeholder.com/300",
        date: new Date(),
    },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Recreate tables and clear data
    console.log("Database synchronized.");

    await Post.bulkCreate(posts); // Insert multiple posts
    console.log("Posts have been added successfully!");

    process.exit(0); // Exit the process
  } catch (error) {
    console.error("Error seeding the database:", error.message);
    process.exit(1); // Exit with an error code
  }
};

seedDatabase();

