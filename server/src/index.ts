import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
        name: "Tomato",
        price: 2500,
        text: "Master the art of growing flavorful tomatoes in your backyard with our comprehensive course.",
        image: "/images/tomato.jpg",
        type: "Vegitable",
        link:"FSFBPtRO4HU?si=I7WB6ecwmOZ4qLL7",
        about:"Tomato growing is a rewarding activity that requires attention to seasonal nuances for optimal results. To begin, selecting the appropriate time for planting is essential. In regions with colder climates, starting tomato seeds indoors in early spring provides a head start, allowing the plants to establish strong roots before transplanting them outdoors after the last frost. Throughout the summer months, ensuring tomatoes receive ample sunlight, consistent watering, and proper support is crucial for healthy growth and abundant fruit production. Vigilance against common pests and diseases such as aphids and blight is also necessary to safeguard plant health. As temperatures cool in the fall, protecting tomato plants from early frosts can prolong the growing season and extend the harvest. With careful planning and attention to seasonal considerations, home gardeners can enjoy a continuous supply of fresh, flavorful tomatoes from their own backyard throughout the year.",
        scheme:"The National Horticulture Mission (NHM) in India encompasses various initiatives aimed at bolstering tomato cultivation and enhancing the income of farmers. Through the NHM, financial assistance is provided for setting up nurseries and procuring quality seeds, facilitating the adoption of modern and high-yielding tomato varieties. Farmers are also trained extensively on best practices in tomato cultivation, including soil management, pest control, and post-harvest handling. Furthermore, the NHM supports the establishment of essential infrastructure such as cold storage facilities and processing units to minimize post-harvest losses and improve market access for tomato growers. Emphasis is also placed on promoting organic farming practices and providing access to credit and insurance schemes to mitigate risks associated with tomato cultivation. These concerted efforts under the NHM aim to boost tomato production, improve quality, and increase the income of farmers engaged in tomato cultivation across India.",
        rate:"15/kg",
    },
    {
        name: "Pepper",
        price: 3000,
        text: "Learn to cultivate vibrant peppers for flavorful culinary creations with our expert-led course.",
        image: "/images/pepper.jpg",
        type: "Seeds",
        link:"LZGrlmGoJIs?si=NJ6Gfqs_n92urcZV",
        about:"Growing peppers is an enjoyable and rewarding endeavor that can be adapted to different seasons and climates. Starting pepper seeds indoors several weeks before the last frost date in spring gives them a head start, ensuring robust seedlings ready for transplanting outdoors once the weather warms. Peppers thrive in warm, sunny locations with well-drained soil rich in organic matter. Throughout the growing season, consistent watering, occasional fertilization, and mulching around plants help promote healthy growth and abundant fruit production. Regular pruning and staking may be necessary to support the weight of the pepper plants and prevent sprawling. As temperatures cool in the fall, protecting pepper plants from early frosts with row covers or cloches can extend the harvest. By providing the right conditions and care, gardeners can enjoy a variety of flavorful peppers, from sweet bells to spicy jalapenos, throughout the growing season and beyond.",
        scheme:"Under the Mission for Integrated Development of Horticulture (MIDH), the Indian government extends support to pepper cultivation alongside various other horticultural crops. This scheme aims to uplift horticulture production, enhance productivity, and augment the income of horticulture farmers. Pepper growers benefit from several components of the MIDH, including financial assistance for establishing plantations and adopting modern cultivation practices. Farmers receive training and capacity building on scientific pepper cultivation techniques, pest and disease management, and post-harvest handling. Emphasis is placed on promoting integrated pest management (IPM) and organic farming methods. Additionally, the MIDH facilitates the development of infrastructure such as irrigation facilities, processing units, and marketing channels to improve the pepper value chain. Access to credit and insurance schemes is also provided to mitigate risks associated with pepper cultivation. The scheme further encourages export-oriented pepper cultivation and value addition to bolster farmers' income. Implemented by the Ministry of Agriculture and Farmers Welfare in collaboration with state governments and stakeholders, the MIDH aims to ensure sustainable growth in the pepper sector and support pepper growers across the country.",
        rate:"800/kg",
    },
    {
        name: "Cocnut",
        price: 2000,
        text: "Explore tropical cultivation with our expert-led coconut growing course.",
        image: "/images/coconut.jpg",
        type: "Tree",
        link:"hIjzJ-vRRCQ?si=bqBTeYBrCRdFVTRW",
        about:"Cultivating coconuts requires a warm, tropical climate with well-draining soil and plenty of sunlight. Coconuts are typically grown from mature coconut fruits, which are planted directly into the soil or germinated in pots until they develop into seedlings. Once established, coconut palms require regular watering, especially during dry periods, to ensure adequate moisture for growth. Pruning dead or diseased fronds and providing occasional fertilization can help promote healthy palm development and increase fruit production. Coconuts take several years to mature and bear fruit, with the first harvest typically occurring around 5-7 years after planting. Harvesting coconuts involves climbing the palm to retrieve ripe fruits or using specialized tools to cut them down. Coconuts are versatile fruits used in various culinary dishes and products, making coconut cultivation a valuable endeavor in tropical regions worldwide.",
        scheme:"The National Mission on Coconut (NMC) stands as a cornerstone government initiative aimed at fostering the comprehensive development of the coconut sector in India. Under this mission, a multifaceted approach is adopted to address various aspects of coconut cultivation, processing, and marketing. Key components of the NMC encompass expanding and revitalizing coconut gardens through the distribution of superior planting material and the adoption of modern agricultural practices. Additionally, emphasis is placed on promoting intercropping and mixed cropping systems to optimize farm productivity and income generation. The mission also prioritizes capacity building and training programs tailored to equip coconut farmers with essential skills in agronomy, pest and disease management, and post-harvest techniques. Furthermore, support is extended for establishing coconut processing units and value addition facilities to enhance the value chain of coconut products. Encouragement of organic farming practices, bolstering research and development endeavors, and providing financial assistance and subsidies to farmers are integral components of the NMC. Moreover, the establishment of coconut development boards and cooperatives aims to facilitate collective marketing, bargaining, and distribution of coconut products, ensuring the sustainable growth and prosperity of the coconut sector and the welfare of coconut farmers nationwide.",
        rate:"50",
    },

    {
        name: "Arecanut",
        price: 2000,
        text: "Unlock the potential of thriving arecanut plantations with our expert-led cultivation course.",
        image: "/images/arecanut.jpg",
        type: "Tree",
        link:"swFzYt56U1M?si=WH5Zbc_AzuGHAWJU",
        about:"Cultivating areca nut, also known as betel nut, requires a warm and humid tropical climate with well-drained soil. Areca nut palms thrive in regions with temperatures between 27°C to 35°C and an annual rainfall of 1500 to 4000 mm. Propagation is typically done using seeds obtained from mature areca nut fruits, which are planted directly into prepared soil beds or germinated in nurseries. Once established, areca nut palms require regular watering, especially during dry spells, to ensure optimal growth. Weeding and mulching around the base of the palms help to suppress weed growth and retain soil moisture. Areca nut palms take around 3 to 5 years to start bearing fruit, with full production reached in 7 to 10 years. Harvesting involves climbing the palm and cutting down the ripe fruits, which are then processed for consumption or further sale. Areca nut cultivation is an important agricultural activity in many tropical regions, providing livelihoods for farmers and contributing to local economies.",
        scheme:"The Arecanut Development Scheme (ADS) is a pivotal government initiative dedicated to fostering the cultivation and advancement of arecanut, or betel nut, within India. This comprehensive scheme encompasses a range of strategic components aimed at bolstering the productivity, quality, and marketability of arecanut crops across the country. At its core, the ADS focuses on expanding and rejuvenating arecanut plantations through the provision of quality planting material and the adoption of modern agricultural practices. Additionally, the scheme emphasizes capacity building and training programs designed to equip farmers with essential skills in agronomy, pest management, and post-harvest techniques. Moreover, efforts are made to promote integrated pest management (IPM) and encourage the adoption of organic farming practices to ensure sustainable production methods. Furthermore, the ADS extends support for the establishment of processing units and value addition facilities, thereby enhancing the value chain of arecanut products. Research and development initiatives are strengthened to drive innovation and address emerging challenges in the arecanut sector. Financial assistance and subsidies are provided to empower farmers and incentivize adoption of best practices. Additionally, the establishment of Arecanut Development Boards and cooperatives facilitates collective marketing, bargaining, and distribution, thereby promoting the overall growth and prosperity of the arecanut industry and the welfare of farmers nationwide. Through these concerted efforts, the ADS aims to drive sustainable growth, improve farmer livelihoods, and promote the value addition and export potential of arecanut products.",
        rate:"188/kg",
    },
    {
        name: "Mango",
        price: 1500,
        text: "Master the art of growing luscious mangoes with ease through our specialized course.",
        image: "/images/mango.jpg",
        type: "Tree",
        link:"0iAZa5bHQj0?si=nYS_RDigoo8R5uvs",
        about:"Mango cultivation is a popular and rewarding endeavor, typically undertaken in warm tropical climates. Mango trees thrive in temperatures ranging from 25°C to 30°C, with well-drained soil and ample sunlight. Propagation is commonly done through seeds or grafting techniques, with mango seedlings planted directly into prepared soil beds or nursery containers. Adequate spacing between trees is essential to allow for proper growth and airflow. Mango trees require regular watering, especially during dry periods, to promote healthy root development and fruit production. Fertilization with balanced nutrients helps support vigorous growth and flowering. Pruning dead or diseased branches and thinning excessive growth can improve fruit quality and facilitate harvesting. Mango trees typically bear fruit within 3 to 5 years, with peak production reached in 5 to 8 years. Harvesting involves handpicking ripe mangoes from the tree, with timing varying depending on the mango variety and desired ripeness. Mango cultivation provides a sustainable source of income for farmers and contributes to local economies worldwide.",
        scheme:"The Mango Development Scheme (MDS) stands as a cornerstone government initiative aimed at fostering the comprehensive development of mango cultivation in India. This holistic scheme encompasses a range of strategic components tailored to enhance the productivity, quality, and marketability of mango crops across the country. At its core, the MDS focuses on expanding mango orchards and rejuvenating existing plantations through the distribution of superior planting material and the adoption of modern agricultural practices. Emphasis is placed on capacity building and training programs designed to equip mango farmers with essential skills in agronomy, pest management, and post-harvest techniques. Furthermore, the scheme promotes the adoption of integrated pest management (IPM) and organic farming practices to ensure sustainable production methods. Additionally, support is extended for establishing mango processing units and value addition facilities, thereby enhancing the value chain of mango products. Research and development initiatives are strengthened to drive innovation and address emerging challenges in the mango sector. Financial assistance and subsidies are provided to empower farmers and incentivize adoption of best practices. Furthermore, the establishment of Mango Development Boards and cooperatives facilitates collective marketing, bargaining, and distribution, thereby promoting the overall growth and prosperity of the mango industry and the welfare of farmers nationwide. Through these concerted efforts, the MDS aims to drive sustainable growth, improve farmer livelihoods, and promote the value addition and export potential of mango products.",
        rate:"200/kg",
    },
    {
        name: "Capsicum",
        price: 15000,
        text: "Unlock the secrets of successful capsicum cultivation with our expert-led course.",
        image: "/images/capsicum.jpg",
        type: "Vegitable",
        link:"QJBIZn3776Q?si=YTvjYTNbx10RlixS",
        about:"Cultivating capsicum, also known as bell peppers or sweet peppers, is a rewarding venture that thrives in warm, sunny climates. Capsicum plants require well-drained soil rich in organic matter and ample sunlight to flourish. Propagation is commonly done through seeds, which can be sown directly into prepared soil beds or started indoors in seed trays before transplanting. Capsicum plants benefit from regular watering, particularly during dry periods, to ensure optimal growth and fruit development. Mulching around the base of the plants helps retain soil moisture and suppress weed growth. Fertilization with balanced nutrients supports healthy plant growth and encourages robust fruit production. Pruning may be necessary to remove dead or diseased foliage and promote airflow around the plants. Capsicum plants typically begin bearing fruit within 2 to 3 months of planting, with peak production occurring throughout the summer months. Harvesting involves handpicking ripe peppers from the plants, taking care not to damage the stems or surrounding foliage. Capsicum cultivation provides a bountiful harvest of colorful, flavorful peppers that are versatile additions to a variety of culinary dishes.",
        scheme:"The Capsicum Development Scheme (CDS) emerges as a pivotal government endeavor aimed at fostering the cultivation and advancement of capsicum, also known as bell peppers or sweet peppers, across India. This scheme encompasses a multifaceted approach, comprising various strategic components tailored to enhance the productivity, quality, and marketability of capsicum crops nationwide. At its core, the CDS focuses on expanding capsicum cultivation through the provision of quality planting material and the adoption of modern agricultural practices. Efforts are made to promote sustainable farming techniques, including organic farming practices and integrated pest management (IPM), to ensure environmental sustainability and minimize chemical usage. Capacity building and training programs are also emphasized to equip farmers with essential skills in capsicum cultivation, pest and disease management, and post-harvest handling. Additionally, the CDS extends support for the establishment of processing units and value addition facilities, thereby enhancing the value chain of capsicum products and creating additional avenues for income generation. Strengthening research and development initiatives in capsicum cultivation and product development further drives innovation and enhances the sector's competitiveness. Financial assistance and subsidies are provided to empower farmers and incentivize adoption of best practices. Through these concerted efforts, the Capsicum Development Scheme aims to drive sustainable growth, improve farmer livelihoods, and capitalize on the export potential of capsicum products, ultimately contributing to the overall prosperity of the agricultural sector in India.",
        rate:"100/kg",
    },
];
  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
