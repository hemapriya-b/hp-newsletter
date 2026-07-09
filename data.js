// data.js
// 60 articles total — 10 each in: global, national, sports, business, politics, drama

const articles = [
  // ══════════════════════════════════════════════
  // GLOBAL (id 1–10)
  // ══════════════════════════════════════════════

  {
    id: 1,
    title:
      "G7 nations sign joint declaration on risk-based AI regulation framework",
    category: "global",
    author: "Rahul Mehta",
    date: "2026-06-29",
    image: "assets/images/img1.jpeg",
    readTime: "5 min read",
    featured: true,
    keywords: [
      "G7",
      "AI",
      "regulation",
      "artificial intelligence",
      "technology",
      "global",
    ],
    excerpt:
      "Leaders from the seven nations committed to a risk-based oversight model for advanced AI, with binding review mechanisms every two years.",
    body: [
      "Rome: Leaders of the G7 nations signed a landmark joint declaration on Saturday committing to a coordinated, risk-based approach to regulating artificial intelligence. The declaration, signed at the close of a two-day summit in Rome, stops short of a binding treaty but establishes shared principles that member nations are expected to enshrine in domestic law over the coming eighteen months.",
      "The framework categorises AI systems by risk level — minimal, limited, high, and unacceptable — with progressively stricter requirements at each tier. Systems used in criminal justice, hiring, and critical infrastructure are classified as high-risk and will require mandatory audits before deployment, along with ongoing monitoring once they are in use by the public or by government agencies.",
      "The United States, which had previously resisted binding AI rules, agreed to the framework after negotiators added a clause allowing member states to grant exemptions for national security applications. Critics, including several digital rights groups, called this a significant loophole that could be used to shield military and intelligence-linked AI systems from meaningful oversight.",
      "The declaration also includes a commitment to review and update the framework every two years to keep pace with rapid technological change. India, though not a G7 member, was invited as a guest nation and its representatives indicated the country would align its own AI policy with the framework's core principles, particularly around high-risk system audits.",
      "Technology industry groups gave the declaration a cautious welcome, noting that a common baseline across major economies would reduce compliance complexity for companies operating internationally, even as smaller firms warned that audit requirements could raise costs significantly.",
    ],
  },

  {
    id: 2,
    title:
      "UN report warns Himalayan glaciers melting at twice the global average rate",
    category: "global",
    author: "Rahul Mehta",
    date: "2026-06-25",
    image: "assets/images/img2.jpeg",
    readTime: "5 min read",
    featured: false,
    keywords: ["UN", "glaciers", "himalaya", "climate", "environment", "water"],
    excerpt:
      "Glaciers in the Hindu Kush Himalaya are melting at twice the global average, threatening water security for 240 million people downstream.",
    body: [
      "Geneva: A comprehensive report released by the United Nations Environment Programme on Thursday warned that glaciers in the Hindu Kush Himalayan region are losing mass at twice the global average rate, driven primarily by rising temperatures linked to carbon emissions and changing precipitation patterns across the region.",
      "The report, compiled from satellite data and ground measurements across fifteen years, found that the region lost approximately 65 billion tonnes of ice annually between 2010 and 2025. Scientists say this pace has accelerated by 40 percent compared to the previous decade, with the steepest losses recorded in the eastern Himalayan ranges.",
      "The consequences extend far beyond the mountains themselves. Around 240 million people in downstream river basins across India, Pakistan, Nepal, Bangladesh, and China depend on glacial meltwater for drinking, agriculture, and hydroelectric power. The report warns that short-term increases in river flow will eventually give way to dramatic reductions as glaciers shrink beyond a critical threshold.",
      "India's Ministry of Environment acknowledged the findings and said the government was working on a national glacier monitoring programme in partnership with research institutes. Climate scientists urged immediate cuts in global emissions, saying that even limiting warming to 1.5°C would result in the loss of a third of all Himalayan glacier volume by 2100.",
      "Regional governments have been urged to jointly fund early-warning systems for glacial lake outburst floods, which have already caused significant damage in mountain communities over the past several monsoon seasons.",
    ],
  },

  {
    id: 3,
    title: "Ukraine and Russia agree to 72-hour ceasefire brokered by Turkey",
    category: "global",
    author: "Meera Pillai",
    date: "2026-06-20",
    image: "assets/images/img3.jpeg",
    readTime: "4 min read",
    featured: false,
    keywords: ["ukraine", "russia", "ceasefire", "war", "turkey", "peace"],
    excerpt:
      "The temporary halt in fighting is the longest agreed pause since the conflict began and is seen as a possible opening for formal negotiations.",
    body: [
      "Ankara: Ukraine and Russia agreed on Wednesday to a 72-hour ceasefire beginning at midnight, in a deal brokered by Turkish officials during talks held in Ankara. The pause in hostilities is the longest agreed halt since the conflict escalated and has raised cautious hopes of progress toward formal peace negotiations in the weeks ahead.",
      "Both sides said the ceasefire would apply along the entire front line but stopped short of committing to a withdrawal of forces. Humanitarian corridors are expected to open during the pause, allowing civilian evacuations from several contested towns in the eastern region where supplies have run critically low.",
      "Western governments welcomed the development while urging caution. A senior EU official said the bloc was ready to provide a monitoring mechanism if both parties agreed to extend the arrangement. The United Nations Secretary-General called the agreement 'a fragile but necessary step' toward de-escalation.",
      "Analysts remain sceptical about whether the ceasefire will hold, noting that similar pauses in the past have broken down within hours. Ukrainian officials said they would respond immediately to any violation, while Russian state media framed the agreement as a humanitarian gesture initiated by Moscow.",
      "Diplomats from both sides are expected to hold follow-up talks in Istanbul once the ceasefire period concludes, with the agenda reportedly including prisoner exchanges and the status of several contested border regions.",
    ],
  },

  {
    id: 4,
    title:
      "Antarctic ice shelf collapse accelerates, scientists report record thinning",
    category: "global",
    author: "Neha Bansal",
    date: "2026-06-17",
    image: "assets/images/img4.jpeg",
    readTime: "4 min read",
    featured: false,
    keywords: ["antarctica", "ice shelf", "climate", "sea level", "science"],
    excerpt:
      "A major ice shelf in West Antarctica is thinning faster than any previous measurement, raising fresh concerns about long-term sea level rise.",
    body: [
      "Cape Town: An international team of glaciologists reported this week that a major ice shelf in West Antarctica is thinning at a record pace, with satellite measurements showing the ice has lost nearly a fifth of its thickness over the past decade alone.",
      "The shelf acts as a buttress holding back much larger inland glaciers, and researchers warn that its continued weakening could accelerate ice flow into the ocean, contributing more directly to global sea level rise than previously modelled. Warm ocean currents reaching underneath the shelf are considered the primary driver.",
      "The findings, published in a peer-reviewed climate journal, add to a growing body of evidence that polar ice loss is outpacing earlier projections. Several coastal nations have called for updated risk assessments in light of the new data, particularly for low-lying delta regions.",
      "Scientists involved in the study cautioned against viewing any single measurement in isolation, but said the trend line across multiple ice shelves in the region was now consistent and concerning enough to warrant urgent policy attention at the next international climate summit.",
    ],
  },

  {
    id: 5,
    title:
      "EU and African Union sign expanded trade and infrastructure partnership",
    category: "global",
    author: "Arjun Varma",
    date: "2026-06-15",
    image: "assets/images/img5.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["EU", "African union", "trade", "infrastructure", "partnership"],
    excerpt:
      "The new agreement expands tariff-free access for African exporters and commits billions toward rail and port infrastructure across the continent.",
    body: [
      "Addis Ababa: The European Union and the African Union signed an expanded trade and infrastructure partnership on Monday, deepening economic ties between the two blocs and committing fresh funding toward transport infrastructure across several African nations.",
      "Under the agreement, tariff-free access will be extended to a wider range of African agricultural and manufactured exports, while European development banks pledged financing for new rail corridors and port upgrades intended to reduce logistics costs for regional trade.",
      "African Union officials described the deal as a step toward more balanced economic cooperation, moving away from purely extractive trade relationships toward joint investment in manufacturing and processing capacity within the continent itself.",
      "Critics in some member states questioned whether the funding commitments would be honoured on the promised timeline, pointing to past pledges that were only partially delivered. EU negotiators said a new monitoring body would track disbursement and project completion annually.",
    ],
  },

  {
    id: 6,
    title: "Japan and South Korea launch joint semiconductor research alliance",
    category: "global",
    author: "Kavya Reddy",
    date: "2026-06-12",
    image: "assets/images/img6.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "japan",
      "south korea",
      "semiconductor",
      "technology",
      "alliance",
    ],
    excerpt:
      "The two nations will jointly fund next-generation chip research in a bid to reduce reliance on manufacturers outside East Asia.",
    body: [
      "Tokyo: Japan and South Korea announced a joint semiconductor research alliance on Thursday, pooling funding and research talent to develop next-generation chip manufacturing techniques amid growing global competition in the sector.",
      "The alliance will focus on advanced chip packaging and materials research, areas where both countries hold significant expertise but have historically competed rather than collaborated. Officials said the shift reflects growing concern over supply chain vulnerabilities exposed during recent years.",
      "Analysts noted the partnership comes as several governments worldwide pour subsidies into domestic chip production, seeking to reduce dependence on a small number of manufacturing hubs. The Japan-Korea alliance is expected to draw in private sector partners over the coming year.",
      "Industry observers said the collaboration could reshape competitive dynamics in the sector, though they cautioned that longstanding rivalries between firms in both countries may slow the pace of joint research in practice.",
    ],
  },

  {
    id: 7,
    title: "Global chip shortage eases as new fabrication plants come online",
    category: "global",
    author: "Arjun Varma",
    date: "2026-06-09",
    image: "assets/images/img7.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "semiconductors",
      "chip shortage",
      "manufacturing",
      "supply chain",
    ],
    excerpt:
      "New fabrication capacity in the US, India, and Southeast Asia has begun easing the years-long global shortage of automotive and consumer chips.",
    body: [
      "Singapore: The global semiconductor shortage that disrupted automotive and electronics production for several years is finally easing, industry data released this week shows, as new fabrication plants in the United States, India, and Southeast Asia begin full-scale operations.",
      "Lead times for common automotive-grade chips have fallen sharply compared to their peak, according to a trade association report, while consumer electronics manufacturers say supply has largely normalised for most product categories except the most advanced processors.",
      "Analysts attributed the improvement to a combination of factors: new government-backed fabrication investments, more diversified sourcing by manufacturers, and a cooling in pandemic-era demand spikes that had strained capacity across the industry.",
      "Some segments, particularly cutting-edge chips used in artificial intelligence hardware, remain tightly supplied. Industry executives said they expect that gap to persist for at least another two years given the specialised equipment required for the most advanced fabrication nodes.",
    ],
  },

  {
    id: 8,
    title:
      "World Health Organization member states finalize pandemic preparedness treaty",
    category: "global",
    author: "Meera Pillai",
    date: "2026-06-06",
    image: "assets/images/img8.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["WHO", "pandemic", "health", "treaty", "global health"],
    excerpt:
      "After years of negotiation, member states agreed on a binding framework for sharing pathogen data and vaccine access during future outbreaks.",
    body: [
      "Geneva: Member states of the World Health Organization finalized a long-negotiated pandemic preparedness treaty on Tuesday, establishing binding commitments for sharing pathogen data and ensuring more equitable vaccine access during future global health emergencies.",
      "The treaty, negotiated over nearly four years, requires signatory nations to share genetic sequencing data for emerging pathogens within a set timeframe in exchange for guaranteed access to a portion of any resulting vaccines or treatments developed using that data.",
      "Developing nations, which had pushed hardest for the equity provisions after experiencing significant vaccine access delays during earlier global outbreaks, called the agreement a meaningful step forward, though some negotiators said the final text was weaker than their original proposals.",
      "Pharmaceutical industry groups said they would cooperate with the framework while raising concerns about intellectual property provisions. The treaty will now go through domestic ratification processes in member countries, with the WHO aiming for it to take effect within two years.",
      "Public health experts welcomed the deal but cautioned that its real test will come only when the next major outbreak occurs, noting that similar frameworks in the past have sometimes broken down under real-world political pressure.",
    ],
  },

  {
    id: 9,
    title: "Middle East peace talks resume in Cairo after months of stalemate",
    category: "global",
    author: "Neha Bansal",
    date: "2026-06-03",
    image: "assets/images/img9.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: [
      "middle east",
      "peace talks",
      "cairo",
      "diplomacy",
      "negotiation",
    ],
    excerpt:
      "Regional and international mediators returned to the negotiating table this week, with a renewed ceasefire framework as the primary agenda item.",
    body: [
      "Cairo: Diplomats from across the region gathered in Cairo this week to resume peace negotiations that had stalled for several months, with mediators from Egypt, Qatar, and the United States jointly leading the renewed effort.",
      "The primary agenda item is a revised ceasefire and reconstruction framework, building on an earlier proposal that collapsed after disagreements over sequencing and security guarantees. Negotiators said this round would focus first on humanitarian access before moving to broader political questions.",
      "Regional analysts described the resumption of talks as cautiously significant, noting that all parties involved have faced mounting domestic and international pressure to reach some form of agreement after a prolonged and costly period of conflict.",
      "No formal timeline has been set for the talks to conclude. Mediators said they expected the process to unfold in stages over several weeks, with smaller technical working groups addressing specific issues such as prisoner exchanges and border security arrangements.",
    ],
  },

  {
    id: 10,
    title:
      "Pacific island nations sign regional climate adaptation fund agreement",
    category: "global",
    author: "Kavya Reddy",
    date: "2026-05-30",
    image: "assets/images/img10.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "pacific islands",
      "climate adaptation",
      "fund",
      "sea level rise",
    ],
    excerpt:
      "Fourteen Pacific nations agreed to pool resources into a shared adaptation fund aimed at coastal defence and relocation planning.",
    body: [
      "Suva: Fourteen Pacific island nations signed an agreement on Saturday to establish a shared regional climate adaptation fund, pooling resources to support coastal defence projects and, in some cases, long-term relocation planning for vulnerable communities.",
      "The fund will be capitalised through a mix of member contributions and international donor support, with priority given to nations facing the most immediate risk from rising sea levels and increasingly severe storm surges.",
      "Leaders at the signing ceremony emphasized that the agreement reflects a shift toward regional self-organisation on climate issues, rather than waiting solely on commitments from larger economies that have often fallen short of stated pledges.",
      "International climate finance experts said the initiative could serve as a model for other vulnerable regions, though they noted the fund's total capitalisation remains modest relative to the scale of adaptation costs projected over the coming decades.",
    ],
  },

  // ══════════════════════════════════════════════
  // NATIONAL (id 11–20)
  // ══════════════════════════════════════════════

  {
    id: 11,
    title:
      "Parliament passes landmark digital privacy bill amid opposition walkout",
    category: "national",
    author: "Priya Ramesh",
    date: "2026-06-30",
    image: "assets/images/img11.jpeg",
    readTime: "5 min read",
    featured: true,
    keywords: [
      "parliament",
      "privacy",
      "digital",
      "bill",
      "data",
      "opposition",
    ],
    excerpt:
      "The bill mandates strict data handling norms for tech companies and passed with 287 votes despite a walkout by three opposition parties.",
    body: [
      "New Delhi: The lower house of Parliament on Monday passed the much-debated Digital Personal Data Protection Amendment Bill after a marathon seven-hour debate. The bill, which seeks to tighten regulations around how companies collect, store, and process citizen data, was backed by 287 members while 143 voted against it.",
      "Three major opposition parties staged a walkout ahead of the vote, calling the bill 'surveillance legislation in disguise.' Their leaders argued that the amendments give the government sweeping powers to exempt itself from the very norms it imposes on private entities — a charge the ruling coalition firmly denied.",
      "The Minister for Electronics and Information Technology, while presenting the bill, said the legislation brings India in line with global data protection standards such as Europe's GDPR. 'Every citizen now has the right to know what data is collected about them, why it is collected, and the right to have it erased,' she said.",
      "The bill will now go to the upper house next week. Industry bodies have broadly welcomed the move, though several startups have raised concerns about compliance costs for smaller organisations. Legal experts say the implementation rules — to be notified separately — will determine the true impact of the law.",
      "Consumer rights groups said they would continue to push for stronger enforcement provisions during the upper house debate, particularly around penalties for repeated data breaches by large corporations.",
    ],
  },

  {
    id: 12,
    title:
      "Chennai Metro Phase 2 to begin operations by December, says Minister",
    category: "national",
    author: "Deepa Suresh",
    date: "2026-06-26",
    image: "assets/images/img12.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["chennai", "metro", "transport", "infrastructure", "phase 2"],
    excerpt:
      "The 118-km Phase 2 expansion will add 128 new stations and cut commute times across the city by an estimated 40 percent.",
    body: [
      "Chennai: The Union Minister for Urban Development on Saturday confirmed that the Chennai Metro Rail Phase 2 project is on track for partial commercial operations by December this year. The announcement was made during an inspection of the Madhavaram corridor, one of the six corridors under the expansion.",
      "Phase 2 adds 118.9 km of new lines to the existing 54-km network, effectively tripling the reach of the metro system. The expansion covers key commuter routes including the airport, central railway station, and the rapidly growing IT corridor in OMR.",
      "Officials say the Madhavaram to CMBT stretch — the most heavily used planned route — will open first, followed by remaining corridors in phases through 2027. Around 128 new stations are being built, each designed with accessibility ramps, tactile paths, and integrated bus bays.",
      "Residents and commuter groups have welcomed the update but urged the authorities to ensure last-mile connectivity through feeder buses. The project, funded jointly by the Centre and the Tamil Nadu government, has a total outlay of ₹63,246 crore.",
      "Transport planners said the completed network is expected to take close to four lakh private vehicles off city roads daily once all corridors are operational, meaningfully easing congestion during peak hours.",
    ],
  },

  {
    id: 13,
    title:
      "Supreme Court stays demolition of 300 heritage structures in Old Delhi",
    category: "national",
    author: "Priya Ramesh",
    date: "2026-06-21",
    image: "assets/images/img13.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["supreme court", "heritage", "delhi", "demolition", "history"],
    excerpt:
      "The bench called the demolition plan hasty and irreversible and ordered a stay pending a full heritage impact assessment.",
    body: [
      "New Delhi: The Supreme Court on Friday issued an interim stay on the proposed demolition of over 300 structures in the Shahjahanabad area of Old Delhi, calling the municipal authority's plan 'hasty and irreversible.' A bench of two judges was hearing a petition filed by heritage conservation groups.",
      "The structures in question, some dating back to the Mughal era, were slated for demolition to widen roads as part of an urban redevelopment project. The petitioners argued that no heritage impact assessment had been conducted and that the move violated the Ancient Monuments and Archaeological Sites and Remains Act.",
      "The court directed the Archaeological Survey of India to submit a detailed report within six weeks, cataloguing the historical significance of each structure marked for demolition. It also restrained the Delhi Municipal Corporation from undertaking any further demolition work until the next hearing.",
      "Heritage experts praised the order, saying it sets an important precedent for how city authorities must approach redevelopment in historically sensitive areas. The case will be taken up again in August.",
      "Local shopkeepers whose businesses had faced imminent relocation said the stay offered temporary relief, though many called for a permanent resolution that balances redevelopment needs with preservation of the old quarter's character.",
    ],
  },

  {
    id: 14,
    title:
      "Cabinet approves revised National Education Policy implementation roadmap",
    category: "national",
    author: "Deepa Suresh",
    date: "2026-06-18",
    image: "assets/images/img14.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["education", "NEP", "cabinet", "schools", "policy"],
    excerpt:
      "The revised roadmap sets phased deadlines for multilingual instruction and vocational integration across government schools by 2030.",
    body: [
      "New Delhi: The Union Cabinet approved a revised implementation roadmap for the National Education Policy on Tuesday, setting phased deadlines for rolling out multilingual instruction, vocational training integration, and revised assessment methods across government schools nationwide.",
      "Under the roadmap, states are expected to introduce regional-language instruction alongside English in primary grades by 2028, with vocational skill modules to be embedded into the curriculum from middle school onward by 2030. The Education Ministry said the changes aim to reduce dropout rates in rural areas.",
      "Several state governments welcomed the roadmap but flagged concerns over funding, noting that teacher retraining and new textbook development would require substantial additional budget allocations that have not yet been fully committed by the Centre.",
      "Education policy analysts said the phased approach was more realistic than earlier timelines, though they cautioned that uneven implementation capacity across states could widen existing gaps in learning outcomes unless closely monitored.",
    ],
  },

  {
    id: 15,
    title:
      "Centre announces ₹18,000 crore farm loan waiver for drought-hit districts",
    category: "national",
    author: "Suresh Iyer",
    date: "2026-06-14",
    image: "assets/images/img15.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["farm loan", "waiver", "agriculture", "drought", "farmers"],
    excerpt:
      "The scheme covers small and marginal farmers across 112 drought-affected districts following two consecutive years of poor rainfall.",
    body: [
      "New Delhi: The central government announced an ₹18,000 crore farm loan waiver scheme on Friday, targeted at small and marginal farmers across 112 districts officially classified as drought-affected following two consecutive years of below-normal monsoon rainfall.",
      "Under the scheme, loans up to ₹2 lakh taken from scheduled banks and cooperative societies will be waived for eligible farmers, with the Agriculture Ministry saying disbursement of relief would begin within six weeks through a dedicated digital verification portal.",
      "Farmer unions cautiously welcomed the announcement while demanding that the eligibility criteria be widened to include tenant farmers, who are often excluded from formal loan waiver schemes despite bearing similar financial distress during drought years.",
      "Economists noted that while loan waivers provide short-term relief, sustainable solutions would require greater investment in irrigation infrastructure and crop insurance schemes to reduce farmers' vulnerability to recurring rainfall deficits.",
      "State governments in the affected regions said they would supplement the central scheme with additional local relief measures, including subsidised fodder and diesel for irrigation pumps during the ongoing dry spell.",
    ],
  },

  {
    id: 16,
    title:
      "ISRO confirms Gaganyaan crewed mission timeline pushed to early 2027",
    category: "national",
    author: "Arjun Varma",
    date: "2026-06-11",
    image: "assets/images/img16.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["ISRO", "gaganyaan", "space", "crewed mission", "science"],
    excerpt:
      "Additional safety validation tests for the crew escape system have pushed India's first human spaceflight mission back by several months.",
    body: [
      "Bengaluru: The Indian Space Research Organisation confirmed on Monday that the first crewed Gaganyaan mission has been pushed to early 2027, citing the need for additional safety validation tests on the crew escape system following an uncrewed test flight earlier this year.",
      "ISRO officials said the delay was a precautionary measure rather than a response to any specific anomaly, emphasizing that human safety protocols require multiple redundant validation rounds before a crewed launch can be cleared by the mission review board.",
      "The uncrewed test flight, conducted in April, successfully validated the launch abort system's primary function, but engineers identified minor deviations in sensor data that they want to fully understand before proceeding to the next stage of testing.",
      "The four astronaut-designates continue their training programme, which includes stints at international space training facilities. Officials said the revised timeline would not affect the broader roadmap for India's planned space station module, expected later in the decade.",
      "Space policy analysts said the cautious approach reflects lessons learned from human spaceflight programmes elsewhere, where compressed timelines have occasionally led to significant setbacks.",
    ],
  },

  {
    id: 17,
    title:
      "Bengaluru civic body unveils emergency plan to tackle deepening water crisis",
    category: "national",
    author: "Kavya Reddy",
    date: "2026-06-08",
    image: "assets/images/img17.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["bengaluru", "water crisis", "civic body", "groundwater"],
    excerpt:
      "The plan includes tanker rationing, borewell regulation, and an accelerated rollout of the city's long-delayed water recycling network.",
    body: [
      "Bengaluru: The city's civic body unveiled an emergency action plan on Wednesday to address a deepening water crisis affecting several outer zones, as groundwater levels in some localities have dropped to their lowest recorded point in over a decade.",
      "The plan includes stricter rationing of water tanker supply to prevent hoarding, tighter regulation of new borewell construction in critically depleted zones, and an accelerated rollout of the city's long-delayed treated wastewater recycling network for non-potable use.",
      "Residents' welfare associations in the worst-affected areas said the measures were overdue, pointing to years of unchecked construction that had paved over natural water recharge zones without adequate compensatory infrastructure being built.",
      "Officials acknowledged that long-term solutions would require restoring the city's network of lakes and rainwater harvesting structures, a process expected to take several years even with immediate investment.",
    ],
  },

  {
    id: 18,
    title:
      "New expressway corridor linking three states inaugurated ahead of schedule",
    category: "national",
    author: "Suresh Iyer",
    date: "2026-06-04",
    image: "assets/images/img18.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["expressway", "highway", "infrastructure", "inauguration"],
    excerpt:
      "The 340-km corridor is expected to cut freight transit times between the three states by nearly six hours.",
    body: [
      "New Delhi: A new 340-km expressway corridor connecting three states was inaugurated on Saturday, six months ahead of its original schedule, in what officials described as one of the fastest major highway completions in recent years.",
      "The corridor is expected to cut freight transit times between the connected industrial hubs by nearly six hours, easing logistics costs for manufacturers and agricultural exporters who currently rely on older, congested state highways for the same route.",
      "The project used a mix of central and state funding along with a build-operate-transfer model involving private contractors, an approach officials credited for the accelerated timeline despite land acquisition challenges in two districts along the route.",
      "Local transport associations welcomed the opening, though some raised concerns about toll pricing structures, which they said had not been finalised with adequate consultation with freight operators who will rely on the corridor daily.",
    ],
  },

  {
    id: 19,
    title:
      "Government announces Census 2027 to include caste enumeration for first time in decades",
    category: "national",
    author: "Priya Ramesh",
    date: "2026-06-01",
    image: "assets/images/img19.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["census", "caste enumeration", "population", "government"],
    excerpt:
      "The decision follows years of demands from multiple political parties and will shape future welfare scheme eligibility criteria.",
    body: [
      "New Delhi: The government announced on Monday that the Census 2027 exercise will include caste enumeration for the first time in several decades, a decision that follows years of demands from political parties across the spectrum and several state-level surveys conducted independently.",
      "Officials said the caste data collected would be used to refine eligibility criteria for existing welfare and reservation schemes, though the exact methodology for classification is still being finalised by a dedicated technical committee working with statisticians and social scientists.",
      "The announcement was welcomed by several regional parties who had long argued that updated caste data was essential for evidence-based policymaking, while some social scientists cautioned that the exercise would need robust safeguards to avoid politicisation during the data collection process.",
      "The broader Census 2027 exercise, delayed from its original schedule, will also be the first to use a fully digital enumeration process, with field officers using tablet devices instead of paper forms across both rural and urban areas.",
      "Preparatory training for over two million enumerators is expected to begin later this year, with the full count scheduled to be completed within an eighteen-month window starting early 2027.",
    ],
  },

  {
    id: 20,
    title:
      "Centre releases ₹2,400 crore disaster relief fund for Kerala flood recovery",
    category: "national",
    author: "Deepa Suresh",
    date: "2026-05-28",
    image: "assets/images/img20.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["kerala", "floods", "disaster relief", "fund", "recovery"],
    excerpt:
      "The funds will support rebuilding of damaged roads, bridges, and homes across the worst-affected districts of the state.",
    body: [
      "Thiruvananthapuram: The central government released ₹2,400 crore in disaster relief funding on Thursday to support recovery efforts in Kerala following severe flooding earlier this month that damaged homes, roads, and agricultural land across several districts.",
      "State officials said the funds would be prioritised for rebuilding damaged bridges and rural roads that had cut off several hill communities from essential services, along with compensation payments for families whose homes were destroyed or rendered uninhabitable.",
      "The Kerala government had earlier submitted a memorandum requesting a higher allocation, and state ministers said they would continue to press for additional support given the scale of agricultural losses, particularly to spice and rubber plantations in the affected hill districts.",
      "Relief camps housing displaced families are being gradually wound down as temporary housing arrangements are completed, though officials estimate full reconstruction in the worst-hit areas could take up to a year to complete.",
    ],
  },

  // ══════════════════════════════════════════════
  // SPORTS (id 21–30)
  // ══════════════════════════════════════════════

  {
    id: 21,
    title:
      "India beats Australia by 6 wickets in a thrilling final ODI at Eden Gardens",
    category: "sports",
    author: "Karthik Nair",
    date: "2026-06-29",
    image: "assets/images/img21.jpeg",
    readTime: "4 min read",
    featured: true,
    keywords: ["cricket", "india", "australia", "ODI", "eden gardens", "gill"],
    excerpt:
      "Shubman Gill's unbeaten 94 guided India to a series-clinching victory in front of a capacity crowd at Eden Gardens.",
    body: [
      "Kolkata: Shubman Gill produced a masterful unbeaten 94 to guide India to a six-wicket victory over Australia in the final ODI at Eden Gardens on Sunday, sealing the three-match series 2–1. Chasing 271, India reached the target with four balls to spare in front of a packed, electric crowd.",
      "Australia had posted a competitive 270 for 7 after winning the toss and choosing to bat first, with a disciplined middle-order partnership pulling them back from an early wobble. Fast bowler Mohammed Siraj was the pick of the Indian bowlers, finishing with figures of 3 for 48.",
      "In reply, India lost two early wickets before Gill anchored the innings, combining calm accumulation with occasional bursts of aggression against the second new ball. He found a reliable partner in the middle overs, adding 118 runs together to steady the chase.",
      "The victory caps a strong home season for India and will boost confidence ahead of an away tour later this year. Captain Rohit Sharma praised the depth of the bowling attack, saying the team had 'found different ways to win' across the series.",
      "Gill was named player of the match and player of the series, with selectors indicating the innings further cemented his standing as a middle-order anchor across formats heading into the next major tournament cycle.",
    ],
  },

  {
    id: 22,
    title:
      "PV Sindhu clinches Olympic qualifier title, books spot in Paris squad",
    category: "sports",
    author: "Karthik Nair",
    date: "2026-06-27",
    image: "assets/images/img22.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["badminton", "sindhu", "olympics", "qualifier"],
    excerpt:
      "A straight-games win in the qualifier final confirmed Sindhu's place on the national badminton squad for the upcoming Olympics.",
    body: [
      "Guwahati: PV Sindhu secured her spot in the national badminton squad for the upcoming Olympics after winning the Olympic qualifying tournament final in straight games on Saturday, overcoming a determined opponent in a match that stretched close to an hour.",
      "Sindhu, who has struggled with form and fitness in recent seasons, looked sharp throughout the tournament, dropping just one game across five matches. Coaches said her improved movement around the court reflected months of dedicated conditioning work after a mid-season injury layoff last year.",
      "The win comes as a relief for the national federation, which had faced questions over its singles depth heading into the qualification window. Sindhu will now begin a focused training block aimed at peaking form closer to the Games.",
      "Speaking after the match, Sindhu said she felt 'physically and mentally in a much better place' than during the previous qualification cycle, crediting a revised training approach for her renewed consistency on court.",
    ],
  },

  {
    id: 23,
    title:
      "ISL transfer window opens with record ₹14 crore deal for young striker",
    category: "sports",
    author: "Vikram Das",
    date: "2026-06-23",
    image: "assets/images/img23.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["ISL", "football", "transfer", "striker", "record deal"],
    excerpt:
      "The domestic transfer fee sets a new benchmark for Indian football as clubs ramp up spending ahead of the new season.",
    body: [
      "Mumbai: The Indian Super League transfer window opened on Tuesday with a record domestic deal, as a 21-year-old striker moved between two top-flight clubs for a reported ₹14 crore, the highest transfer fee ever paid for an Indian player in the league's history.",
      "The move reflects growing financial investment in domestic football, with several ISL clubs expanding scouting networks and youth academies over the past few seasons in an effort to develop and retain homegrown talent rather than relying heavily on foreign imports.",
      "League officials said the record fee signals increasing competitiveness among clubs vying for continental qualification spots, with several teams also reportedly in advanced talks for marquee foreign signings ahead of the new season kicking off in September.",
      "Football analysts noted that rising transfer valuations, while a positive sign for the league's growth, would need to be matched by continued investment in grassroots infrastructure to sustain a genuine pipeline of talent over the long term.",
    ],
  },

  {
    id: 24,
    title:
      "Indian teenager stuns seeded opponent to reach Wimbledon junior semifinal",
    category: "sports",
    author: "Vikram Das",
    date: "2026-06-19",
    image: "assets/images/img24.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["wimbledon", "tennis", "junior", "india"],
    excerpt:
      "The 17-year-old's aggressive baseline game overwhelmed the third seed in straight sets on Centre Court's outer grass.",
    body: [
      "London: A 17-year-old Indian tennis player produced the upset of the junior tournament so far on Wednesday, defeating the third seed in straight sets to reach the semifinals of the Wimbledon junior championships for the first time in her career.",
      "Playing an aggressive baseline game suited to the fast grass surface, she broke serve twice in the opening set and never relinquished control, closing out the match in just under an hour and a half against a significantly higher-ranked opponent.",
      "The result marks the best performance by an Indian junior at the tournament in several years, and coaches back home said it reflected a broader improvement in grass-court training facilities now available to young Indian players ahead of the European swing.",
      "She will face the top seed in the semifinal, a match she described as 'nothing to lose' given her run so far, adding that simply reaching the final four had already exceeded her own expectations for the tournament.",
    ],
  },

  {
    id: 25,
    title:
      "Grandmaster claims national chess championship title with round to spare",
    category: "sports",
    author: "Meera Pillai",
    date: "2026-06-16",
    image: "assets/images/img25.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["chess", "grandmaster", "national championship"],
    excerpt:
      "An unbeaten run through the tournament secured the title before the final round had even been played.",
    body: [
      "Chennai: A 22-year-old grandmaster clinched the national chess championship title on Monday with a round still to play, finishing the tournament unbeaten across ten games and securing the crown two points clear of the nearest rival.",
      "The decisive moment came in round nine, where a patient endgame grind against the tournament's second seed yielded a full point after nearly six hours of play, effectively putting the title out of reach for the remaining contenders.",
      "Tournament organisers praised the strength of this year's field, which included several rising junior players alongside established grandmasters, calling it one of the most competitive editions of the national championship in recent memory.",
      "The winner said the title would serve as valuable preparation ahead of an international rapid chess circuit event later in the year, where ranking points could influence qualification for a major invitational tournament.",
    ],
  },

  {
    id: 26,
    title:
      "Patna Pirates edge out defending champions in Pro Kabaddi League final",
    category: "sports",
    author: "Karthik Nair",
    date: "2026-06-13",
    image: "assets/images/img26.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["kabaddi", "pro kabaddi league", "final", "sports"],
    excerpt:
      "A last-raid super tackle sealed a narrow three-point victory in one of the closest finals in league history.",
    body: [
      "Hyderabad: Patna Pirates edged out the defending champions in a nail-biting Pro Kabaddi League final on Saturday, winning by three points after a last-raid super tackle turned the match in their favour with barely a minute remaining on the clock.",
      "The match swung repeatedly through its second half, with both teams trading all-out situations that briefly reduced each side to a single defender on court. A composed do-or-die raid in the closing minutes proved decisive for the eventual champions.",
      "The Pirates' star raider was named player of the final after contributing 14 raid points across the match, while the team's defensive unit held firm during a crucial passage of play when the opposition mounted a late comeback attempt.",
      "League officials said viewership figures for the final were the highest recorded in the competition's history, reflecting kabaddi's continued growth as a mainstream televised sport alongside cricket and football in the domestic market.",
    ],
  },

  {
    id: 27,
    title:
      "Marathon runner shatters national record at international city marathon",
    category: "sports",
    author: "Vikram Das",
    date: "2026-06-10",
    image: "assets/images/img27.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["marathon", "national record", "athletics", "running"],
    excerpt:
      "The runner finished more than ninety seconds inside the previous national record, boosting Olympic qualification prospects.",
    body: [
      "Berlin: An Indian long-distance runner shattered the national marathon record on Sunday, finishing the international city marathon in a time more than ninety seconds faster than the previous national best, set nearly six years ago.",
      "Running as part of a pace group for the first half of the race, the athlete broke away in the final ten kilometres, maintaining a steady pace even as several higher-ranked competitors visibly struggled with the day's warm and humid conditions.",
      "The performance significantly boosts the runner's prospects of meeting the qualification standard for the next major international championship, with athletics federation officials saying the result places them firmly among medal contenders in Asian regional competition.",
      "Coaches credited a revised altitude training programme conducted over the past year for the breakthrough performance, noting that the athlete's finishing speed in the closing stretch had improved markedly compared to previous major races.",
    ],
  },

  {
    id: 28,
    title: "IPL mega auction sees record spending as franchises rebuild squads",
    category: "sports",
    author: "Meera Pillai",
    date: "2026-06-07",
    image: "assets/images/img28.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["IPL", "auction", "cricket", "franchise", "spending"],
    excerpt:
      "Franchises collectively spent a record sum across two days of bidding as several teams overhauled their core playing squads.",
    body: [
      "Mumbai: The IPL mega auction concluded on Sunday with franchises collectively spending a record sum across two days of intense bidding, as several teams undertook significant squad overhauls ahead of the upcoming season.",
      "A young uncapped all-rounder emerged as the auction's most expensive buy, going for a fee well above pre-auction estimates after a bidding war between three franchises, reflecting the growing premium placed on players who can contribute with both bat and ball.",
      "Several established international players went unsold in early rounds before being picked up during accelerated bidding later in the auction, as franchises balanced marquee signings against retaining budget flexibility for mid-season replacements.",
      "Franchise owners and team management said the auction results reflected a broader shift toward valuing versatility and death-overs specialists, a trend several head coaches attributed to increasingly competitive and unpredictable tournament conditions in recent seasons.",
      "Analysts noted that overall spending patterns also suggested renewed confidence in the league's long-term commercial growth, with broadcast and sponsorship revenues reportedly factoring into franchises' willingness to stretch their auction budgets this year.",
    ],
  },

  {
    id: 29,
    title:
      "India secures direct qualification for Hockey World Cup after strong Asia Cup run",
    category: "sports",
    author: "Karthik Nair",
    date: "2026-06-02",
    image: "assets/images/img29.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["hockey", "world cup", "qualification", "asia cup"],
    excerpt:
      "A dominant Asia Cup campaign, capped by a final win over Pakistan, secured India's automatic qualification spot.",
    body: [
      "Chennai: India's men's hockey team secured direct qualification for the next Hockey World Cup on Tuesday after a dominant Asia Cup campaign that culminated in a hard-fought final victory over Pakistan, sealing the continental title for the third time in five editions.",
      "The team remained unbeaten throughout the tournament, conceding just four goals across six matches, with the forward line combining fluidly to create scoring chances even against defensively organised opponents in the group stage.",
      "Head coach praised the squad's improved fitness levels and structured pressing game, saying the tournament had validated changes made to the training regime over the past year following a disappointing performance at the previous major international event.",
      "The World Cup qualification allows the team to shift focus toward a series of preparatory tournaments and training camps over the coming months, with selectors indicating a few fringe players would get extended opportunities to press their claims for the final squad.",
    ],
  },

  {
    id: 30,
    title:
      "National athletics championship sees three meet records broken in one evening",
    category: "sports",
    author: "Vikram Das",
    date: "2026-05-29",
    image: "assets/images/img30.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "athletics",
      "national championship",
      "records",
      "track and field",
    ],
    excerpt:
      "Records fell in the men's 400m, women's long jump, and mixed relay events during an unusually fast final evening session.",
    body: [
      "Bhubaneswar: The national athletics championship delivered its most dramatic evening in years on Thursday, with three meet records broken within the space of two hours, including in the men's 400m, women's long jump, and mixed relay events.",
      "In the 400m, a 23-year-old sprinter clocked a personal best that also broke the decade-old meet record, benefiting from ideal weather conditions and a fast track surface that several athletes credited for the flurry of strong performances across the evening.",
      "The women's long jump record fell to a rising junior athlete whose winning attempt in the final round surprised even her own coaching staff, while the mixed relay team combined strong individual legs into a smooth baton-change performance that shaved a full second off the previous best.",
      "Athletics federation officials said the record-breaking evening reflected improved training infrastructure at regional centres, expressing optimism that several of the athletes involved could be competitive at the continental level in the coming season.",
    ],
  },

  // ══════════════════════════════════════════════
  // BUSINESS (id 31–40)
  // ══════════════════════════════════════════════

  {
    id: 31,
    title:
      "RBI holds repo rate at 6.25% for third straight quarter citing stable inflation",
    category: "business",
    author: "Ananya Krishnan",
    date: "2026-06-28",
    image: "assets/images/img31.jpeg",
    readTime: "5 min read",
    featured: true,
    keywords: [
      "RBI",
      "repo rate",
      "inflation",
      "monetary policy",
      "economy",
      "interest",
    ],
    excerpt:
      "The Monetary Policy Committee voted unanimously to hold rates, pointing to stable retail inflation and resilient GDP growth of 7.1 percent.",
    body: [
      "Mumbai: The Reserve Bank of India's Monetary Policy Committee voted unanimously on Friday to keep the benchmark repo rate unchanged at 6.25 percent for the third consecutive quarter. The decision was widely expected by markets, which have priced in a prolonged pause given steady inflation and robust growth.",
      "RBI Governor, in his statement, said retail inflation had remained within the 2–6 percent target band for five consecutive months and that the committee was confident of its trajectory. He pointed to easing food prices and stable fuel costs as the primary factors keeping inflation in check.",
      "GDP growth came in at 7.1 percent for the last quarter, above the central bank's own forecast of 6.8 percent. The Governor said the growth outlook remained positive but flagged global uncertainty — particularly from volatile commodity markets and a slowdown in key export destinations — as risks to monitor.",
      "Bond markets reacted positively, with yields dipping slightly after the announcement. Banking sector analysts said the stable rate environment would support credit growth, particularly in retail lending and housing finance.",
      "The Governor also indicated the committee would remain data-dependent in the coming quarters, declining to give explicit forward guidance on the timing of any future rate cut despite market speculation of a shift later in the year.",
    ],
  },

  {
    id: 32,
    title: "Nifty crosses 26,000 mark for the first time on strong FII inflows",
    category: "business",
    author: "Ananya Krishnan",
    date: "2026-06-24",
    image: "assets/images/img32.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "nifty",
      "stock market",
      "FII",
      "sensex",
      "BSE",
      "NSE",
      "shares",
    ],
    excerpt:
      "Strong foreign institutional buying in banking and IT stocks pushed the Nifty 50 to a historic high in early trading on Tuesday.",
    body: [
      "Mumbai: The Nifty 50 index crossed the 26,000 mark for the first time in its history on Tuesday morning, driven by heavy buying from foreign institutional investors in banking, IT, and consumer goods stocks. The index touched an intra-day high of 26,043 before settling at 25,987 by afternoon trade.",
      "FIIs pumped in over ₹8,400 crore in a single session — one of the largest single-day inflows in recent memory. Market analysts attributed the surge to renewed confidence in India's macroeconomic stability following the RBI's rate hold decision and strong Q4 earnings from major banks.",
      "HDFC Bank, Infosys, and Reliance Industries were the top contributors to the index's rise. Midcap and smallcap indices also rallied, with the BSE Midcap index rising 1.8 percent on the day.",
      "Retail investors and market experts urged caution despite the milestone, noting that valuations in several sectors are stretched. 'The momentum is strong but the market is not cheap,' said one fund manager. 'Selective stock picking matters more now than riding the index.'",
      "Trading volumes on the derivatives segment also hit a record for the year, with analysts noting increased participation from retail investors placing leveraged bets around the milestone level.",
    ],
  },

  {
    id: 33,
    title:
      "Bengaluru startup raises ₹420 crore to expand cold chain logistics network",
    category: "business",
    author: "Suresh Iyer",
    date: "2026-06-19",
    image: "assets/images/img33.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "startup",
      "funding",
      "logistics",
      "cold chain",
      "bengaluru",
      "investment",
    ],
    excerpt:
      "The company plans to double its refrigerated warehouse capacity across tier-2 cities over the next 18 months using the fresh capital.",
    body: [
      "Bengaluru: Cold chain logistics startup FreshRoute on Thursday announced it had raised ₹420 crore in a Series C funding round led by a Singapore-based growth equity fund. The round also saw participation from two existing investors and marks the company's largest fundraise to date.",
      "FreshRoute operates a network of temperature-controlled warehouses and last-mile delivery vehicles across 14 cities. The new capital will be used to expand into 12 additional tier-2 cities, with Coimbatore, Nagpur, Bhopal, and Kochi identified as priority markets.",
      "The company's co-founder said cold chain infrastructure remains a critical gap in India's food supply chain, with an estimated 30 percent of perishable produce lost annually due to inadequate storage and transport. 'We're not just building a business — we're reducing food waste at scale,' he said.",
      "The raise comes at a time of growing investor interest in agritech and supply chain startups in India. FreshRoute reported a 3x growth in revenue over the past year and said it expects to reach operational profitability by mid-2027.",
      "Industry observers said the funding round underscores continued investor appetite for logistics infrastructure plays even as broader startup funding has moderated compared to the highs of previous years.",
    ],
  },

  {
    id: 34,
    title:
      "Homegrown EV battery maker lists on stock exchanges with strong debut",
    category: "business",
    author: "Ananya Krishnan",
    date: "2026-06-16",
    image: "assets/images/img34.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["IPO", "electric vehicle", "battery", "stock market listing"],
    excerpt:
      "Shares of the battery manufacturer opened 38 percent above their issue price, valuing the company at over ₹22,000 crore.",
    body: [
      "Mumbai: Shares of a homegrown electric vehicle battery manufacturer listed on stock exchanges on Monday with a strong debut, opening 38 percent above their issue price and valuing the company at over ₹22,000 crore on its first day of trading.",
      "The IPO, which was oversubscribed more than 60 times across investor categories, had generated significant pre-listing buzz given the company's position as one of the few domestic manufacturers of lithium-ion battery cells rather than just battery pack assembly.",
      "Company executives said proceeds from the offering would fund a new gigafactory expected to triple production capacity over the next three years, positioning the firm to supply a growing number of domestic electric two-wheeler and passenger vehicle manufacturers.",
      "Analysts said the strong debut reflects investor optimism around India's electric vehicle transition, though some cautioned that the company's current valuation already prices in aggressive growth assumptions that will need to be met over the coming years.",
    ],
  },

  {
    id: 35,
    title:
      "Two mid-sized private banks announce merger to create fourth-largest lender",
    category: "business",
    author: "Suresh Iyer",
    date: "2026-06-12",
    image: "assets/images/img35.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["bank merger", "private bank", "lender", "finance"],
    excerpt:
      "The all-stock merger will create the country's fourth-largest private lender by branch network, pending regulatory approval.",
    body: [
      "Mumbai: Two mid-sized private sector banks announced an all-stock merger on Friday that, once approved by regulators, would create the country's fourth-largest private lender by branch network, combining complementary strengths in retail and corporate banking.",
      "Under the terms of the deal, shareholders of the smaller bank will receive shares in the larger entity based on an agreed swap ratio, with the combined bank expected to operate under the larger institution's existing brand name following completion of the merger process.",
      "Both banks' boards said the merger would create significant operational synergies, particularly in technology infrastructure and geographic branch overlap, while management committed to no forced layoffs during the integration period, which is expected to take up to eighteen months.",
      "The deal requires approval from the Reserve Bank of India and the Competition Commission, along with shareholder votes at both institutions. Banking analysts said the merger reflects a broader trend of consolidation among mid-sized private banks facing rising compliance costs and competitive pressure from larger rivals.",
      "Employee unions at both banks said they would seek written assurances on job security and service conditions before the merger receives final regulatory clearance.",
    ],
  },

  {
    id: 36,
    title: "Textile exports post strongest quarterly growth in five years",
    category: "business",
    author: "Ananya Krishnan",
    date: "2026-06-09",
    image: "assets/images/img36.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["textile", "exports", "trade", "manufacturing"],
    excerpt:
      "Higher demand from European and US buyers, along with a weaker rupee, boosted textile export earnings by 18 percent year-on-year.",
    body: [
      "New Delhi: India's textile exports posted their strongest quarterly growth in five years, rising 18 percent year-on-year according to trade data released on Tuesday, driven by higher demand from European and US buyers along with a favourable exchange rate.",
      "Industry associations said orders had shifted increasingly toward Indian manufacturers as buyers diversified supply chains away from other traditional sourcing hubs facing labour cost pressures and logistics disruptions of their own over the past year.",
      "Cotton and synthetic apparel categories led the growth, with home textiles also showing a notable uptick in export orders. Manufacturers in key hubs said they were operating at near-full capacity to meet the surge in demand ahead of the year-end shopping season abroad.",
      "The Textiles Ministry said it would push for further trade facilitation measures, including faster port clearances, to help exporters sustain the momentum, while industry bodies called for continued support on raw material cost stabilisation.",
    ],
  },

  {
    id: 37,
    title:
      "Major automaker inaugurates new EV manufacturing plant, creating 8,000 jobs",
    category: "business",
    author: "Suresh Iyer",
    date: "2026-06-05",
    image: "assets/images/img37.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: [
      "EV manufacturing",
      "automaker",
      "plant",
      "jobs",
      "electric vehicle",
    ],
    excerpt:
      "The ₹9,600 crore facility will produce electric passenger vehicles and components, with initial capacity of 300,000 units annually.",
    body: [
      "Pune: A major domestic automaker inaugurated its new electric vehicle manufacturing plant on Thursday, a ₹9,600 crore facility expected to create approximately 8,000 direct jobs and produce up to 300,000 electric passenger vehicles annually at full capacity.",
      "The plant, built over two years, will manufacture both vehicles and key components including battery packs and electric motors, reducing the company's reliance on imported parts that had previously added significant cost and lead time to its electric vehicle production.",
      "Company executives said the facility incorporates automation across much of the assembly line while retaining a significant manual workforce for quality inspection and final assembly stages, striking a balance between efficiency and employment generation in the region.",
      "State government officials, who provided land and tax incentives to attract the investment, said the plant was expected to catalyse a broader ecosystem of component suppliers setting up operations nearby, potentially creating thousands of additional indirect jobs over the coming years.",
      "The first vehicles from the new plant are expected to roll out for domestic sale within three months, with export shipments to select international markets planned for the following year.",
    ],
  },

  {
    id: 38,
    title:
      "Retail inflation eases to 4.1 percent, lowest reading in over a year",
    category: "business",
    author: "Ananya Krishnan",
    date: "2026-06-02",
    image: "assets/images/img38.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["inflation", "retail inflation", "CPI", "economy", "prices"],
    excerpt:
      "Falling vegetable and cereal prices drove the headline inflation figure to its lowest level in more than a year.",
    body: [
      "New Delhi: India's retail inflation eased to 4.1 percent in the latest reading released on Monday, its lowest level in more than a year, driven primarily by falling vegetable and cereal prices following a strong harvest season across major agricultural states.",
      "The data showed food inflation, which carries significant weight in the overall index, dropped sharply compared to the previous month, while core inflation excluding food and fuel remained relatively stable, suggesting underlying price pressures have not shifted dramatically.",
      "Economists said the softer inflation print gives the Reserve Bank of India additional room to consider policy easing later in the year, though most expect the central bank to remain cautious until the trend is confirmed over several more months of data.",
      "Consumer goods companies said the moderation in input costs was already feeding into more stable retail pricing, with several major brands indicating they had no immediate plans for further price increases in the near term.",
    ],
  },

  {
    id: 39,
    title:
      "Housing prices in top seven cities rise 14 percent amid tight supply",
    category: "business",
    author: "Suresh Iyer",
    date: "2026-05-30",
    image: "assets/images/img39.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["real estate", "housing prices", "property market"],
    excerpt:
      "A property consultancy report found average housing prices across top cities rose sharply as new project launches failed to keep pace with demand.",
    body: [
      "Mumbai: Average housing prices across India's top seven cities rose 14 percent year-on-year, according to a property consultancy report released on Saturday, as new project launches continued to lag behind steady demand from both end-users and investors.",
      "The report found that price growth was most pronounced in the premium and luxury housing segments, with several developers reporting near sell-out launches within days, while affordable housing supply remained comparatively constrained in most major metros.",
      "Real estate analysts attributed the tight supply partly to rising construction costs and slower regulatory approvals for new projects, which have discouraged some developers from launching new inventory despite strong underlying demand across most cities surveyed.",
      "Industry bodies called for streamlined approval processes to boost new supply, warning that continued price growth without a corresponding rise in launches could eventually dampen affordability and slow transaction volumes in the coming quarters.",
    ],
  },

  {
    id: 40,
    title:
      "Renewable energy investment in India crosses $18 billion for the fiscal year",
    category: "business",
    author: "Ananya Krishnan",
    date: "2026-05-27",
    image: "assets/images/img40.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "renewable energy",
      "solar",
      "wind",
      "investment",
      "clean energy",
    ],
    excerpt:
      "Solar and wind projects accounted for the bulk of new investment as the country pushes toward its renewable capacity targets.",
    body: [
      "New Delhi: Investment in India's renewable energy sector crossed $18 billion for the fiscal year, according to figures released by an industry tracking body on Wednesday, with solar and wind projects together accounting for the vast majority of new capital deployed.",
      "The figures reflect accelerating momentum toward the country's renewable capacity targets, with several large solar park projects reaching financial close during the year and a number of offshore wind projects moving from planning into early construction stages.",
      "Energy sector analysts noted that falling equipment costs and improved financing terms had made renewable projects increasingly competitive against conventional power sources, drawing in both domestic institutional investors and international green energy funds.",
      "Government officials said the investment momentum puts the country on a stronger footing to meet its stated clean energy targets, though grid infrastructure upgrades and storage capacity remain key bottlenecks that will need continued investment in the years ahead.",
    ],
  },

  // ══════════════════════════════════════════════
  // POLITICS (id 41–50)
  // ══════════════════════════════════════════════

  {
    id: 41,
    title:
      "Ruling alliance retains power in state assembly elections with reduced majority",
    category: "politics",
    author: "Rajesh Kumar",
    date: "2026-06-30",
    image: "assets/images/img41.jpeg",
    readTime: "5 min read",
    featured: true,
    keywords: [
      "assembly elections",
      "state politics",
      "ruling alliance",
      "results",
    ],
    excerpt:
      "The incumbent coalition won a third consecutive term but with a significantly narrower margin than the previous election.",
    body: [
      "Lucknow: The ruling alliance retained power in state assembly elections with results declared on Monday, securing a third consecutive term in office though with a significantly narrower majority than it enjoyed after the previous election five years ago.",
      "The coalition won 148 of 280 seats, down from 187 in the last election, with opposition parties making notable gains in rural constituencies where local issues around unemployment and agricultural distress appeared to weigh heavily on voter sentiment.",
      "The chief minister, addressing supporters after the results were declared, acknowledged the reduced mandate and pledged to address concerns raised during the campaign, particularly around job creation and support for small farmers in the coming term.",
      "Opposition leaders described the results as a moral victory despite falling short of forming government, pointing to their improved vote share as evidence of eroding support for the incumbent administration heading into the next general election cycle.",
      "Political analysts said the results suggest a more competitive landscape ahead, with several smaller regional parties also gaining ground, potentially reshaping alliance calculations before the next round of state elections scheduled later in the year.",
    ],
  },

  {
    id: 42,
    title: "Prime Minister reshuffles cabinet, inducts five new ministers",
    category: "politics",
    author: "Rajesh Kumar",
    date: "2026-06-25",
    image: "assets/images/img42.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: [
      "cabinet reshuffle",
      "prime minister",
      "ministers",
      "government",
    ],
    excerpt:
      "The reshuffle brings younger leaders into key ministries ahead of a busy legislative session focused on economic reforms.",
    body: [
      "New Delhi: The Prime Minister carried out a cabinet reshuffle on Wednesday, inducting five new ministers and reassigning portfolios for several senior leaders, in a move widely seen as preparation for a busy upcoming legislative session focused on economic reform bills.",
      "Among the changes, a relatively younger leader known for his work on digital governance was elevated to a full cabinet rank, while two ministers were shifted to portfolios seen as more aligned with their prior professional expertise in infrastructure and finance.",
      "Political observers said the reshuffle reflects an effort to inject fresh energy into the government's economic agenda while also addressing regional representation concerns raised by allied parties within the coalition ahead of the next state elections.",
      "Opposition parties criticised the reshuffle as largely cosmetic, arguing that it did not address what they called deeper governance issues. Government spokespersons rejected the criticism, saying the changes were aimed squarely at improving delivery on key welfare and infrastructure programmes.",
      "The new ministers are expected to be sworn in at a ceremony later this week, after which portfolio allocations will be formally notified ahead of the start of the legislative session.",
    ],
  },

  {
    id: 43,
    title:
      "Three regional parties announce new opposition alliance ahead of general elections",
    category: "politics",
    author: "Anjali Menon",
    date: "2026-06-21",
    image: "assets/images/img43.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: [
      "opposition alliance",
      "regional parties",
      "general elections",
      "coalition",
    ],
    excerpt:
      "The new grouping aims to consolidate anti-incumbency votes across several states ahead of the next general election.",
    body: [
      "Patna: Three regional parties announced the formation of a new opposition alliance on Saturday, aiming to consolidate anti-incumbency votes across several states ahead of the next general election, in what leaders described as a pragmatic response to a fragmented opposition landscape.",
      "The alliance's leaders said seat-sharing negotiations would begin in the coming weeks, with a joint coordination committee set up to manage disagreements and present a unified campaign strategy across the states where all three parties have a meaningful electoral presence.",
      "Analysts said the alliance's success would hinge largely on whether the constituent parties could resolve seat-sharing disputes without the public infighting that has undermined similar opposition coalitions in the past, particularly in states where their support bases overlap significantly.",
      "Ruling party spokespersons dismissed the alliance as an opportunistic arrangement lacking ideological coherence, while alliance leaders countered that shared opposition to what they called anti-federal policies provided sufficient common ground for sustained cooperation.",
      "The alliance is expected to hold its first joint public rally next month, which leaders said would serve as an early test of their ability to mobilise combined support bases.",
    ],
  },

  {
    id: 44,
    title:
      "Parliament budget session concludes with passage of key economic reform bills",
    category: "politics",
    author: "Rajesh Kumar",
    date: "2026-06-17",
    image: "assets/images/img44.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["budget session", "parliament", "economic reforms", "bills"],
    excerpt:
      "The session saw passage of labour code amendments and a new manufacturing incentive bill after extended debate.",
    body: [
      "New Delhi: The Parliament's budget session concluded on Tuesday with the passage of several key economic reform bills, including amendments to labour codes and a new manufacturing incentive bill, following extended debate that occasionally saw heated exchanges between treasury and opposition benches.",
      "The labour code amendments, which drew the most sustained opposition, revise provisions around working hours and dispute resolution mechanisms. The government maintained the changes would improve ease of doing business, while trade unions warned they could weaken worker protections if not implemented carefully.",
      "The manufacturing incentive bill, which passed with comparatively broader support, expands production-linked incentive schemes to additional sectors including specialty chemicals and advanced electronics components, building on the government's existing push to boost domestic manufacturing capacity.",
      "Opposition parties said they would continue to press for amendments to the labour code provisions through subsequent parliamentary sessions, while industry bodies broadly welcomed the reform package as a positive signal for long-term investment planning.",
      "The session also saw approval of the annual budget allocations for several ministries, with total government spending for the fiscal year confirmed at levels broadly in line with earlier projections presented during the budget speech.",
    ],
  },

  {
    id: 45,
    title:
      "Local body elections see record voter turnout amid tight multi-cornered contests",
    category: "politics",
    author: "Anjali Menon",
    date: "2026-06-13",
    image: "assets/images/img45.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["local body elections", "voter turnout", "municipal elections"],
    excerpt:
      "Turnout crossed 68 percent across the state, the highest recorded for local body polls in over a decade.",
    body: [
      "Bhopal: Local body elections held across the state on Sunday recorded voter turnout of over 68 percent, the highest figure for municipal polls in over a decade, election officials said, as several urban wards saw closely contested multi-cornered races.",
      "Independent candidates performed notably well in several urban wards, capitalising on local infrastructure and civic service grievances that voters said mainstream parties had failed to adequately address over the previous term of municipal governance.",
      "Election observers attributed the higher turnout partly to an extensive voter awareness campaign run in the weeks preceding the polls, along with improved accessibility measures at polling stations, including additional booths in high-density urban constituencies.",
      "Counting is scheduled for later this week, with all major parties claiming confidence in strong performances based on internal exit assessments, though officials cautioned that the unusually high number of independent candidates makes outcomes harder to predict this cycle.",
    ],
  },

  {
    id: 46,
    title:
      "Main opposition party unveils manifesto promising jobs and healthcare expansion",
    category: "politics",
    author: "Anjali Menon",
    date: "2026-06-10",
    image: "assets/images/img46.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: [
      "manifesto",
      "opposition party",
      "jobs",
      "healthcare",
      "elections",
    ],
    excerpt:
      "The manifesto centres on a job guarantee scheme for youth and expanded free healthcare coverage if the party comes to power.",
    body: [
      "Chennai: The main opposition party unveiled its election manifesto on Wednesday, centring its campaign pitch around a youth job guarantee scheme and expanded free healthcare coverage, in a document party leaders described as a direct response to voter concerns over unemployment.",
      "The manifesto commits to creating a fixed number of guaranteed public sector apprenticeship positions annually for unemployed youth, alongside a phased expansion of free diagnostic and treatment coverage at government hospitals, funded partly through a proposed restructuring of existing subsidy programmes.",
      "Economists offered mixed reactions to the manifesto's fiscal projections, with some questioning whether the promised spending increases were adequately matched by realistic revenue assumptions, while others said the proposals were broadly in line with spending patterns seen in comparable states.",
      "Ruling party leaders dismissed the manifesto as a collection of unfunded promises, pointing to what they called the opposition's fiscal record during its previous term in office. Opposition leaders rejected the criticism, saying their governance record spoke for itself.",
      "The manifesto also includes commitments on rural infrastructure and women's welfare schemes, which party leaders said would form the core of their door-to-door campaign messaging over the coming weeks.",
    ],
  },

  {
    id: 47,
    title:
      "No-confidence motion against state government defeated in dramatic floor vote",
    category: "politics",
    author: "Rajesh Kumar",
    date: "2026-06-06",
    image: "assets/images/img47.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["no-confidence motion", "floor vote", "state government"],
    excerpt:
      "The government survived by a narrow eight-vote margin after two independent legislators sided with the ruling coalition.",
    body: [
      "Bhubaneswar: A no-confidence motion against the state government was defeated in a dramatic floor vote on Friday, with the ruling coalition surviving by a narrow eight-vote margin after two independent legislators sided with the government following hours of tense negotiation.",
      "The motion, brought by opposition parties following allegations of financial irregularities in a state infrastructure project, had triggered days of political manoeuvring, with both sides reportedly working to secure the support of undecided legislators ahead of the vote.",
      "The chief minister, addressing the assembly after the vote, said the result reaffirmed public confidence in the government's development agenda and dismissed the corruption allegations as politically motivated, promising a full inquiry through an independent committee.",
      "Opposition leaders said they would continue to pursue the corruption allegations through other institutional channels, including a formal complaint to the state's anti-corruption bureau, despite the setback in the assembly vote.",
      "Political analysts said the narrow margin exposes underlying fault lines within the ruling coalition that could resurface ahead of the next budget session, particularly if the corruption inquiry uncovers further evidence.",
    ],
  },

  {
    id: 48,
    title:
      "Election Commission announces reforms to curb use of money power in campaigns",
    category: "politics",
    author: "Anjali Menon",
    date: "2026-06-02",
    image: "assets/images/img48.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "election commission",
      "reforms",
      "campaign finance",
      "elections",
    ],
    excerpt:
      "New measures include stricter expenditure monitoring and mandatory real-time disclosure of large campaign donations.",
    body: [
      "New Delhi: The Election Commission announced a set of reforms on Tuesday aimed at curbing the use of money power in election campaigns, including stricter expenditure monitoring teams and mandatory real-time disclosure requirements for large campaign donations above a specified threshold.",
      "Under the new rules, candidates will be required to report significant donations within 48 hours through a dedicated digital portal, while district-level monitoring teams will be given expanded authority to track and flag unusually large cash movements during campaign periods.",
      "Civil society groups that had long campaigned for greater transparency in political funding welcomed the reforms, though some said the measures did not go far enough in addressing indirect and in-kind campaign contributions that remain difficult to track under existing rules.",
      "Political parties across the spectrum offered cautious support for the reforms in public statements, while several party insiders privately expressed concern about the practical challenges of complying with the tightened disclosure timelines during fast-moving campaign periods.",
    ],
  },

  {
    id: 49,
    title:
      "State names new chief minister after weeks of coalition negotiations",
    category: "politics",
    author: "Rajesh Kumar",
    date: "2026-05-29",
    image: "assets/images/img49.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["chief minister", "coalition", "state government"],
    excerpt:
      "A compromise candidate was chosen after the two largest coalition partners failed to agree on their preferred nominees.",
    body: [
      "Jaipur: A regional coalition named its choice for chief minister on Friday, ending weeks of internal negotiations after the two largest partners in the alliance failed to agree on their initially preferred nominees for the top post.",
      "The eventual choice, a senior legislator seen as broadly acceptable across the coalition's constituent parties, is expected to be sworn in later this week following a formal endorsement vote among the alliance's elected members.",
      "Coalition insiders said the prolonged negotiations reflected genuine disagreements over portfolio allocations and regional representation within the cabinet, rather than purely personal rivalries between the contending candidates for the top position.",
      "Political observers said the compromise choice, while resolving the immediate impasse, leaves open questions about the coalition's long-term stability, given that the negotiations exposed underlying tensions that could resurface during future cabinet formation decisions.",
    ],
  },

  {
    id: 50,
    title:
      "Parliamentary committee report flags delays in flagship rural housing scheme",
    category: "politics",
    author: "Anjali Menon",
    date: "2026-05-26",
    image: "assets/images/img50.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["parliamentary committee", "rural housing", "government scheme"],
    excerpt:
      "The report found that nearly a third of sanctioned houses under the scheme remain incomplete beyond their target deadlines.",
    body: [
      "New Delhi: A parliamentary standing committee report tabled on Tuesday flagged significant delays in the implementation of the government's flagship rural housing scheme, finding that nearly a third of sanctioned houses remain incomplete well beyond their originally targeted deadlines.",
      "The committee attributed the delays to a combination of factors, including inconsistent fund disbursement to state implementing agencies, land title disputes in several districts, and shortages of construction materials in remote areas during peak monsoon months.",
      "The Rural Development Ministry, responding to the report, said corrective measures were already underway, including a revised fund release schedule and a dedicated grievance redressal mechanism for beneficiaries facing construction delays beyond their control.",
      "Opposition members on the committee called for an independent audit of the scheme's implementation at the state level, while government representatives maintained that the overall completion rate still compared favourably to similar housing programmes in previous years.",
    ],
  },

  // ══════════════════════════════════════════════
  // DRAMA / ENTERTAINMENT (id 51–60)
  // ══════════════════════════════════════════════

  {
    id: 51,
    title:
      "Period epic shatters opening weekend box office records across the country",
    category: "drama",
    author: "Ishaan Kapoor",
    date: "2026-06-29",
    image: "assets/images/img51.jpeg",
    readTime: "4 min read",
    featured: true,
    keywords: ["box office", "period drama", "film", "opening weekend"],
    excerpt:
      "The historical epic collected over ₹210 crore in its opening weekend, becoming the highest-grossing debut of the year so far.",
    body: [
      "Mumbai: A big-budget period epic shattered opening weekend box office records across the country, collecting over ₹210 crore in its first three days of release and becoming the highest-grossing debut weekend of the year so far, according to trade estimates released on Monday.",
      "The film, which took nearly three years to complete due to its elaborate production design and large-scale battle sequences, drew packed houses across both metro multiplexes and single-screen theatres in smaller towns, an increasingly rare combination for big-ticket releases in recent years.",
      "Trade analysts credited the film's marketing campaign, which built anticipation gradually over several months through behind-the-scenes content, alongside strong word-of-mouth following early reviews that praised its technical craft and lead performances.",
      "The director, speaking at a press event on Sunday, said the film's success reflected renewed audience appetite for large-scale theatrical experiences after a period where streaming releases had dominated conversation, adding that a sequel was already in early development.",
      "Industry watchers said the film's performance could influence release strategies for other big-budget productions scheduled later in the year, with several studios reportedly reconsidering their own marketing timelines in light of its success.",
    ],
  },

  {
    id: 52,
    title: "Tamil film sweeps top honours at international film festival",
    category: "drama",
    author: "Divya Nair",
    date: "2026-06-24",
    image: "assets/images/img52.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["tamil film", "film festival", "awards", "cinema"],
    excerpt:
      "The independent drama won best film, best director, and best actress honours at the festival's closing ceremony.",
    body: [
      "Chennai: A Tamil independent drama swept the top honours at an international film festival over the weekend, winning best film, best director, and best actress awards at the closing ceremony, marking a significant moment for regional independent cinema on the global stage.",
      "The film, shot on a modest budget largely in a small coastal village, follows three generations of a fishing family navigating changing livelihoods amid environmental pressures. Jury members praised its restrained storytelling and naturalistic performances from a largely non-professional cast.",
      "The director, accepting the award, dedicated the honour to the coastal community that had hosted the production for several months, saying many of the film's supporting cast members were drawn directly from the village where the story was set.",
      "The wins are expected to boost the film's prospects for wider theatrical and streaming distribution, with several international distributors reportedly in early talks following its strong festival reception this week.",
    ],
  },

  {
    id: 53,
    title:
      "Popular streaming series renewed for third season after record viewership numbers",
    category: "drama",
    author: "Ishaan Kapoor",
    date: "2026-06-20",
    image: "assets/images/img53.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["streaming series", "renewal", "OTT", "web series"],
    excerpt:
      "The crime thriller became the platform's most-watched original series within its first two weeks of release.",
    body: [
      "Mumbai: A popular streaming crime thriller was officially renewed for a third season on Thursday, after the platform confirmed the show had become its most-watched original series within just two weeks of its second season's release.",
      "The show, known for its dense narrative structure and morally ambiguous characters, has built a dedicated fan base since its debut, with the second season's finale reportedly generating significant social media discussion around its unresolved plot threads.",
      "The lead actor and showrunner both confirmed their return for the third season during an announcement livestream, with the showrunner hinting at a broader narrative scope that would expand the story beyond the setting established in the first two seasons.",
      "Streaming analysts said the renewal reflects the platform's continued investment in high-production-value regional-language originals, a strategy that has increasingly paid off in subscriber retention figures over the past two years.",
    ],
  },

  {
    id: 54,
    title:
      "Singer's surprise album drops at midnight, tops streaming charts within hours",
    category: "drama",
    author: "Divya Nair",
    date: "2026-06-16",
    image: "assets/images/img54.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["music album", "singer", "streaming charts", "surprise release"],
    excerpt:
      "The twelve-track album was released without prior announcement and climbed to the top of streaming charts within six hours.",
    body: [
      "Mumbai: A leading playback singer surprised fans with a midnight release of a new twelve-track solo album, dropped without any prior announcement, which climbed to the top of major streaming charts within just six hours of going live.",
      "The album marks the singer's first full solo project outside of film soundtracks in nearly four years, featuring collaborations with several independent producers and a notable shift toward experimental sounds compared to the singer's mainstream film work.",
      "Music critics who reviewed the album in the hours following its release praised its cohesive thematic arc, with several tracks drawing on personal experiences the singer had not previously discussed publicly in interviews or promotional material.",
      "The surprise release strategy, increasingly common among established artists seeking to generate organic buzz, appears to have paid off, with the album's lead single already trending on multiple platforms by the following morning.",
    ],
  },

  {
    id: 55,
    title:
      "Actor and director couple's wedding draws celebrity guest list in Udaipur",
    category: "drama",
    author: "Ishaan Kapoor",
    date: "2026-06-12",
    image: "assets/images/img55.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["celebrity wedding", "actor", "director", "udaipur"],
    excerpt:
      "The three-day celebration brought together prominent names from film and television for a lakeside ceremony.",
    body: [
      "Udaipur: A well-known actor and film director tied the knot in a three-day celebration held at a lakeside venue this week, drawing a guest list packed with prominent names from film and television for a series of ceremonies that dominated entertainment headlines.",
      "The couple, who had kept their relationship largely private over the past two years, shared official photographs from the event through their social media accounts on Wednesday evening, prompting an outpouring of congratulatory messages from colleagues across the industry.",
      "Security around the venue was notably tight, with event organisers citing extensive precautions taken to prevent unauthorised photography, though several guests shared glimpses of the celebrations, including a traditional ceremony followed by a reception attended by close to four hundred guests.",
      "The couple is expected to resume work commitments shortly after a brief honeymoon, with both having film projects scheduled to begin production later in the year according to industry sources close to the production houses involved.",
    ],
  },

  {
    id: 56,
    title:
      "Big-budget film shoot halted after location dispute with local authorities",
    category: "drama",
    author: "Divya Nair",
    date: "2026-06-08",
    image: "assets/images/img56.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "film shoot",
      "controversy",
      "production halt",
      "location dispute",
    ],
    excerpt:
      "Production was suspended for over a week after local authorities raised objections over permits for a heritage fort location.",
    body: [
      "Jaipur: The shoot of a big-budget upcoming film was suspended for over a week after local authorities raised objections over permits granted for filming at a protected heritage fort location, in a dispute that has drawn significant media attention over recent days.",
      "Officials from the state archaeology department said the production had exceeded the scope of activities originally approved for the site, particularly around the use of heavy equipment near sections of the fort undergoing conservation work at the time.",
      "The production house issued a statement expressing regret over the disruption and said it was fully cooperating with local authorities to resolve the matter, adding that filming had already been scaled back to minimise any impact on the heritage structure.",
      "Heritage conservation groups welcomed the intervention, saying it reflected growing scrutiny of film productions using protected historical sites without adequate oversight, while the production team said they expected to resume shooting at an alternative location within the coming weeks.",
    ],
  },

  {
    id: 57,
    title:
      "Streaming platform unveils slate of eight new regional-language originals",
    category: "drama",
    author: "Ishaan Kapoor",
    date: "2026-06-04",
    image: "assets/images/img57.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: [
      "streaming platform",
      "OTT originals",
      "regional language",
      "web series",
    ],
    excerpt:
      "The lineup spans five languages and includes both limited series and multi-season commitments from established filmmakers.",
    body: [
      "Mumbai: A major streaming platform unveiled a slate of eight new regional-language original productions on Wednesday, spanning five languages and including both limited series and multi-season commitments from a mix of established and emerging filmmakers.",
      "The announcement included a political thriller set in a fictional coastal state, a coming-of-age drama, and an ensemble family series, reflecting the platform's continued push to diversify its content library beyond its earlier focus on Hindi-language productions.",
      "Platform executives said the investment reflects strong viewership data from previous regional originals, several of which had significantly outperformed internal projections and drawn audiences well beyond their primary language markets through subtitled viewing.",
      "Industry observers said the expanded regional slate reflects broader competitive dynamics among streaming platforms, all of which have increasingly turned to regional content as a differentiator in an increasingly crowded subscription market.",
    ],
  },

  {
    id: 58,
    title: "Debut director's film wins big at national film awards ceremony",
    category: "drama",
    author: "Divya Nair",
    date: "2026-05-31",
    image: "assets/images/img58.jpg",
    readTime: "4 min read",
    featured: false,
    keywords: ["national film awards", "debut director", "awards ceremony"],
    excerpt:
      "The low-budget social drama won best film, best debut director, and best supporting actor at the ceremony.",
    body: [
      "New Delhi: A low-budget social drama from a first-time director won top honours at the national film awards ceremony held on Sunday, taking home best film, best debut director, and best supporting actor awards in what jury members called a standout year for independent cinema.",
      "The film, made on a fraction of the budget of typical mainstream releases, tells the story of a sanitation worker's daughter navigating access to education in a small town, drawing praise for its unflinching yet hopeful portrayal of systemic inequality.",
      "Accepting the award, the director thanked the small crew who worked on the project largely on deferred payments, saying the film's recognition validated years of difficult, self-funded development before securing eventual distribution support.",
      "The ceremony also honoured veteran performers with lifetime achievement recognitions, and several presenters used their remarks to call for greater institutional support for independent filmmakers working outside the traditional studio system.",
      "Distribution deals for the award-winning film are reportedly already in motion following the ceremony, with a limited theatrical re-release planned in several cities in the coming weeks to capitalise on the renewed attention.",
    ],
  },

  {
    id: 59,
    title:
      "Acclaimed director announces ambitious new trilogy set in ancient India",
    category: "drama",
    author: "Ishaan Kapoor",
    date: "2026-05-27",
    image: "assets/images/img59.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["film announcement", "trilogy", "director", "period film"],
    excerpt:
      "The three-film project, described as the director's most ambitious to date, is expected to begin production early next year.",
    body: [
      "Mumbai: An acclaimed director announced an ambitious new trilogy of films set in ancient India on Wednesday, describing the project as the most extensive undertaking of his career, with production expected to begin in early 2027 following an extended pre-production and research phase.",
      "The announcement, made at a press event alongside the project's lead producers, included concept art and a brief teaser reel that generated immediate excitement online, with the director emphasizing extensive historical research already underway with a team of consulting scholars.",
      "Casting for the lead roles has not yet been finalised, though the director confirmed conversations with several major actors were ongoing, adding that the scale of the production would require building large practical sets rather than relying primarily on visual effects.",
      "Industry analysts noted the announcement reflects continued studio appetite for large-scale historical epics following the recent success of similar big-budget period productions, though they cautioned that such ambitious multi-film commitments carry significant financial risk if the first instalment underperforms.",
    ],
  },

  {
    id: 60,
    title:
      "Sold-out stadium tour concludes with surprise guest performances in finale city",
    category: "drama",
    author: "Divya Nair",
    date: "2026-05-24",
    image: "assets/images/img60.jpg",
    readTime: "3 min read",
    featured: false,
    keywords: ["concert tour", "stadium tour", "music", "finale"],
    excerpt:
      "The twenty-city tour wrapped with a three-hour finale show featuring surprise appearances from several fellow artists.",
    body: [
      "Mumbai: A sold-out twenty-city concert tour concluded on Saturday with a three-hour finale performance that featured surprise guest appearances from several fellow artists, capping what organisers described as the most successful domestic stadium tour in recent years.",
      "The finale show, held before a packed stadium crowd, included an elaborate stage production with live orchestral accompaniment for several songs, a departure from the artist's earlier tours that had relied more heavily on recorded backing tracks and simpler staging.",
      "Concert promoters said overall ticket sales across the tour exceeded projections by a wide margin, attributing the demand to a combination of strong new album sales and pent-up appetite for large-scale live music events following a comparatively quieter touring year previously.",
      "The artist, addressing the crowd near the end of the finale show, hinted at plans for an international leg of the tour later in the year, though no formal dates or venues have been confirmed by the management team as of yet.",
      "Fans who attended multiple stops on the tour took to social media to compare setlists and surprise moments across different cities, with the finale's guest appearances quickly becoming one of the most discussed entertainment stories of the week.",
    ],
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { articles };
}
