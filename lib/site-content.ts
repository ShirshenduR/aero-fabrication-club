export interface HeroContent {
  titleTop: string;
  titleMiddle: string;
  titleBottom: string;
  tagline: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

export interface AboutCard {
  icon: 'bullseye' | 'rocket' | 'users';
  title: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  subheading: string;
  image: string;
  whoWeAreHeading: string;
  paragraphs: string[];
  cards: AboutCard[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  details: string;
}

export interface ProjectsContent {
  heading: string;
  subheading: string;
  items: ProjectItem[];
}

export interface GalleryImageItem {
  id: number;
  src: string;
  alt: string;
  mobileSpan: number;
  mobileRowSpan: number;
  gridColumnMd: string;
  gridRowMd: string;
}

export interface GalleryContent {
  heading: string;
  subheading: string;
  images: GalleryImageItem[];
}

export interface EventItem {
  title: string;
  year: string;
  icon: 'rocket' | 'trophy' | 'users' | 'calendar';
  image: string;
  description: string;
  color: string;
}

export interface EventsContent {
  heading: string;
  subheading: string;
  items: EventItem[];
}

export interface AchievementItem {
  id: number;
  title: string;
  year: string;
  award: string;
  image: string;
  description: string;
  icon: 'trophy' | 'medal' | 'award';
  color: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AchievementsContent {
  heading: string;
  subheading: string;
  journeyHeading: string;
  items: AchievementItem[];
  timeline: TimelineItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export interface TeamDivision {
  name: string;
  icon: 'calendar' | 'dollar' | 'hashtag' | 'chart';
  description: string;
  color: string;
  members: TeamMember[];
}

export interface TeamContent {
  heading: string;
  subheading: string;
  leadership: TeamMember[];
  divisionsHeading: string;
  divisions: TeamDivision[];
}

export interface AlumniMember {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
}

export interface AlumniContent {
  heading: string;
  subheading: string;
  members: AlumniMember[];
}

export interface ContactInfoItem {
  icon: 'email' | 'phone' | 'location';
  title: string;
  details: string[];
  color: string;
}

export interface SocialLink {
  icon: 'instagram' | 'linkedin' | 'youtube';
  label: string;
  url: string;
  color: string;
}

export interface ContactContent {
  heading: string;
  subheading: string;
  locationTitle: string;
  mapEmbedUrl: string;
  contactInfo: ContactInfoItem[];
  socialLinks: SocialLink[];
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  projects: ProjectsContent;
  gallery: GalleryContent;
  events: EventsContent;
  achievements: AchievementsContent;
  team: TeamContent;
  alumni: AlumniContent;
  contact: ContactContent;
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  hero: {
    titleTop: 'AERO',
    titleMiddle: 'FABRICATION',
    titleBottom: 'CLUB',
    tagline: 'Where Innovation Takes Flight',
    description:
      'Designing, building, and flying innovative unmanned aerial vehicles. Join us in pushing the boundaries of aerospace engineering.',
    primaryButtonLabel: 'Explore Projects',
    secondaryButtonLabel: 'Get In Touch',
  },
  about: {
    heading: 'About Us',
    subheading: 'Meet the passionate individuals driving innovation and excellence in aerospace engineering',
    image: '/images/about/about.jpg',
    whoWeAreHeading: 'Who We Are',
    paragraphs: [
      'The Aero Fabrication Club embodies the spirit of "Creating to Learn, Learning to Create." We believe in building from the very basic laws provided by nature, incorporating the fundamental principles of aerospace and fabrication engineering.',
      'Our mission is to provide hands-on experience in designing, building, and flying unmanned aerial vehicles. We foster innovation, teamwork, and practical engineering skills among our members.',
      "Constituting participation from all years of the undergraduate program, we are an ever-growing and ever-learning family dedicated to pushing the boundaries of what's possible in aerospace engineering.",
    ],
    cards: [
      {
        icon: 'bullseye',
        title: 'Our Vision',
        description: 'To be at the forefront of innovation in unmanned aerial vehicle technology, inspiring the next generation of aerospace engineers through hands-on learning and collaborative problem-solving.',
      },
      {
        icon: 'rocket',
        title: 'Our Mission',
        description: 'To provide students with practical experience in aerospace engineering through competitions, workshops, and collaborative projects, creating an environment where they can apply theoretical knowledge to real-world challenges.',
      },
      {
        icon: 'users',
        title: 'Our Community',
        description: 'We envision a community where students can freely explore their ideas, learn from failures, and celebrate successes in a supportive environment that promotes technical excellence and creativity.',
      },
    ],
  },
  projects: {
    heading: 'Our Projects',
    subheading: 'Pushing the boundaries of unmanned aerial vehicle technology',
    items: [
      {
        id: 1,
        title: 'Micro Class UAV',
        category: 'Completed',
        image: '/images/projects/Project1.jpg',
        description: 'The club designed, built and flew a 3D printed RC Plane. The Micro Class UAV made trades between two potentially conflicting requirements: carrying the highest payload fraction possible and pursuing the lowest empty weight possible.',
        tags: ['3D Printing', 'RC Plane', 'Payload Optimization'],
        details: 'Advanced lightweight design with optimized payload capacity. Features include autonomous flight control, real-time telemetry, and modular payload system.',
      },
      {
        id: 2,
        title: 'Autonomous UAV with Hotspot Detection',
        category: 'Completed',
        image: '/images/projects/Project2.jpg',
        description: 'The Club designed, built and flew an Autonomous unmanned aerial vehicle that met many anticipated requirements and was capable of hotspot detection.',
        tags: ['Autonomous', 'Thermal Imaging', 'AI/ML'],
        details: 'Equipped with thermal cameras and AI-powered detection algorithms. Can autonomously patrol areas and identify heat anomalies in real-time.',
      },
      {
        id: 3,
        title: 'Racing Drone',
        category: 'Completed',
        image: '/images/projects/Project3.jpg',
        description: 'The club designed, built and flew a high-speed, agile unmanned aerial vehicle designed specifically for competitive racing. Its sleek, aerodynamic frame is typically made from lightweight carbon fiber to maximize speed and maneuverability.',
        tags: ['Racing', 'Carbon Fiber', 'High-Speed'],
        details: 'Top speed of 120+ km/h with sub-3 second 0-100 acceleration. Features FPV camera system and advanced flight controller.',
      },
      {
        id: 4,
        title: 'Tactical UAV',
        category: 'Ongoing',
        image: '/images/projects/ongoingProject1.jpg',
        description: 'A mid-range tactical UAV designed for surveillance and reconnaissance missions with extended flight time and advanced payload capabilities.',
        tags: ['Surveillance', 'Long Range', 'Advanced Sensors'],
        details: 'Under development: 2-hour flight time, 10km range, HD video transmission, and multi-sensor integration.',
      },
      {
        id: 5,
        title: 'Hybrid VTOL Drone',
        category: 'Completed',
        image: '/images/projects/ongoingProject2.jpg',
        description: 'An innovative hybrid drone combining vertical takeoff and landing capabilities with efficient fixed-wing flight for extended range missions.',
        tags: ['VTOL', 'Hybrid', 'Long Endurance'],
        details: 'Combines quadcopter and fixed-wing capabilities for versatile mission profiles. Target endurance: 3 hours.',
      },
      {
        id: 6,
        title: 'Swarm Robotics',
        category: 'Ongoing',
        image: '/images/projects/futureProject1.jpg',
        description: 'Multiple autonomous drones working together in coordinated swarm behavior for complex mission scenarios.',
        tags: ['Swarm AI', 'Multi-Agent', 'Coordination'],
        details: 'Research project exploring decentralized swarm intelligence with 5+ drones operating in synchronized formation.',
      },
    ],
  },
  gallery: {
    heading: 'Gallery',
    subheading: 'Capturing our journey in aerial innovation',
    images: [
      { id: 1, src: '/images/gallery/gallery1.jpg', alt: 'gallery 1', mobileSpan: 2, mobileRowSpan: 2, gridColumnMd: '1 / span 2', gridRowMd: '1 / span 2' },
      { id: 2, src: '/images/gallery/gallery2.jpg', alt: 'gallery 2', mobileSpan: 1, mobileRowSpan: 1, gridColumnMd: '3 / span 1', gridRowMd: '1 / span 1' },
      { id: 3, src: '/images/gallery/gallery3.jpg', alt: 'gallery 3', mobileSpan: 1, mobileRowSpan: 1, gridColumnMd: '4 / span 1', gridRowMd: '1 / span 1' },
      { id: 4, src: '/images/gallery/gallery4.jpg', alt: 'gallery 4', mobileSpan: 2, mobileRowSpan: 1, gridColumnMd: '3 / span 1', gridRowMd: '2 / span 2' },
      { id: 5, src: '/images/gallery/gallery5.jpg', alt: 'gallery 5', mobileSpan: 2, mobileRowSpan: 1, gridColumnMd: '4 / span 1', gridRowMd: '2 / span 1' },
      { id: 6, src: '/images/gallery/gallery6.jpg', alt: 'gallery 6', mobileSpan: 2, mobileRowSpan: 1, gridColumnMd: '1 / span 1', gridRowMd: '3 / span 1' },
      { id: 7, src: '/images/gallery/gallery7.jpg', alt: 'gallery 7', mobileSpan: 2, mobileRowSpan: 1, gridColumnMd: '2 / span 1', gridRowMd: '3 / span 1' },
      { id: 8, src: '/images/gallery/gallery8.jpg', alt: 'gallery 8', mobileSpan: 2, mobileRowSpan: 1, gridColumnMd: '4 / span 1', gridRowMd: '3 / span 1' },
    ],
  },
  events: {
    heading: 'Events & Competitions',
    subheading: 'Workshops, competitions, and activities hosted by our club throughout the year',
    items: [
      {
        title: 'Thrust – Annual Water Rocket Event',
        year: '2025',
        icon: 'rocket',
        image: '/images/events/Thrust.jpg',
        description: 'Our annual flagship water rocket event specially curated for first-year students. Teams design, build, and launch water-propelled rockets competing for maximum altitude and accuracy.',
        color: '#00d4ff',
      },
      {
        title: 'Udaan – RC Glider Competition',
        year: '2025',
        icon: 'trophy',
        image: '/images/events/udaan.jpg',
        description: 'A club-organized RC glider competition focused on fundamentals of aerodynamics and flight. Participants design, build, and test fly their gliders for glide time and control precision.',
        color: '#0ea5e9',
      },
    ],
  },
  achievements: {
    heading: 'ACHIEVEMENTS',
    subheading: 'Our victories and recognition in national and international drone competitions',
    journeyHeading: 'Our Journey',
    items: [
      { id: 1, title: 'Sky Maneuver - IIT Roorkee', year: '2025', award: '2nd Prize', image: '/images/achievements/SkyManeuver25.jpg', description: 'Secured 2nd prize in Sky Maneuver at IIT Roorkee with consistent performance across precision flight and maneuvering rounds.', icon: 'medal', color: 'blue' },
      { id: 2, title: 'Smart India Hackathon 2024', year: '2024', award: 'Winners - Hardware Edition', image: '/images/achievements/SIH24.jpg', description: 'We emerged as winners in the Hardware Edition of Smart India Hackathon 2024, delivering a practical, high-impact solution under tight constraints.', icon: 'award', color: 'yellow' },
      { id: 3, title: 'Aerothon 2024', year: '2024', award: 'Winner - Best Autonomous Drone', image: '/images/achievements/Aerothon24.jpg', description: 'At Aerothon 2024, our autonomous platform won the Best Autonomous Drone award for robust perception, planning, and mission execution.', icon: 'trophy', color: 'yellow' },
      { id: 4, title: 'IIT Kanpur Techkriti - Autodesk Design Challenge', year: '2024', award: 'Winner', image: '/images/achievements/Techkirti.jpg', description: 'Won the Autodesk Design Challenge at IIT Kanpur Techkriti, demonstrating superior design and engineering capabilities.', icon: 'trophy', color: 'yellow' },
      { id: 5, title: 'Sky Maneuver - IIT Roorkee', year: '2024', award: 'AIR 2', image: '/images/achievements/SkyManeuver24.png', description: 'Secured All India Rank 2 in Sky Maneuver event at IIT Roorkee 2024, demonstrating exceptional drone maneuvering capabilities.', icon: 'medal', color: 'blue' },
      { id: 6, title: 'IIT Bombay Boeing Aeromodelling', year: '2023', award: '3 Teams in Top 20', image: '/images/achievements/Boeingiitbombay.jpg', description: 'Exceptional performance with 3 teams qualifying in the top 20 at IIT Bombay Boeing Aeromodelling Competition 2023.', icon: 'medal', color: 'blue' },
      { id: 7, title: 'SAE DDC 2023', year: '2023', award: 'AIR 1 - Best Aerodynamic Analysis (CFD)', image: '/images/achievements/SAEDDC23.jpg', description: 'Secured All India Rank 1 for Best Aerodynamic Analysis using Computational Fluid Dynamics at SAE Drone Design Challenge 2023.', icon: 'trophy', color: 'yellow' },
      { id: 8, title: 'Flight Fury - IIT Roorkee Techfest', year: '2023', award: 'AIR 3', image: '/images/achievements/Flightfury iit roorkee 23.jpg', description: 'Achieved All India Rank 3 in Flight Fury 2023 at IIT Roorkee Techfest, showcasing exceptional drone racing skills.', icon: 'trophy', color: 'orange' },
    ],
    timeline: [
      { year: '2023', title: 'Flight Fury – IIT Roorkee Techfest (AIR 3)', description: 'Achieved All India Rank 3 in Flight Fury 2023 at IIT Roorkee Techfest, showcasing exceptional drone racing skills and competitive performance.' },
      { year: '2023', title: 'SAE DDC 2023 – Best Aerodynamic Analysis (AIR 1)', description: 'Secured All India Rank 1 for Best Aerodynamic Analysis using Computational Fluid Dynamics at SAE Drone Design Challenge 2023.' },
      { year: '2023', title: 'IIT Bombay Boeing Aeromodelling Competition (3 Teams in Top 20)', description: 'Demonstrated exceptional capability with 3 teams qualifying in the top 20 at IIT Bombay Boeing Aeromodelling Competition 2023.' },
      { year: '2024', title: 'Sky Maneuver – IIT Roorkee (AIR 2)', description: 'Secured All India Rank 2 in Sky Maneuver event at IIT Roorkee 2024, demonstrating exceptional precision flight and advanced maneuvering capabilities.' },
      { year: '2024', title: 'IIT Kanpur Techkriti – Autodesk Design Challenge (Winner)', description: 'Won the Autodesk Design Challenge at IIT Kanpur Techkriti, demonstrating superior design and engineering capabilities with innovative solutions.' },
      { year: '2024', title: 'Aerothon 2024 – Best Autonomous Drone (Winner)', description: 'Won the Best Autonomous Drone award at Aerothon 2024 for robust perception, planning, and mission execution with cutting-edge autonomous systems.' },
      { year: '2024', title: 'SIH 2024 – Hardware Edition (Winners)', description: 'Winners at Smart India Hackathon 2024 (Hardware Edition), delivering a practical, high-impact solution under tight constraints and time pressure.' },
      { year: '2025', title: 'Sky Maneuver – IIT Roorkee (2nd Prize)', description: 'Secured 2nd prize in Sky Maneuver at IIT Roorkee with consistent performance across precision flight and advanced maneuver rounds.' },
    ],
  },
  team: {
    heading: 'OUR TEAM',
    subheading: 'Meet the passionate individuals driving innovation and excellence in aerospace engineering',
    divisionsHeading: 'Team Divisions',
    leadership: [
      { name: 'Dr. Akshay Pandey', role: 'Faculty Incharge', image: '/images/team/fic.jpeg', description: 'Providing guidance and mentorship to the team, bringing years of experience in aerospace engineering and research.' },
      { name: 'Chetan Anand Jhariya', role: 'Coordinator', image: '/images/team/coordinator.jpeg', description: "Leading the team's overall direction and strategy, coordinating between different sub-teams to ensure cohesive project execution." },
      { name: 'Shashaank Srivastava', role: 'Co-Coordinator', image: '/images/team/co-coordinator.jpeg', description: 'Supporting the coordination efforts and providing leadership in specific project areas, ensuring smooth day-to-day operations.' },
      { name: 'Rohit TM', role: 'Co-Coordinator', image: '/images/team/co-coordinator1.jpg', description: 'Supporting the coordination efforts and providing leadership in specific project areas, ensuring smooth day-to-day operations.' },
    ],
    divisions: [
      {
        name: 'Events Team',
        icon: 'calendar',
        description: 'Oversees club operations, membership, and coordination between different teams.',
        color: 'orange',
        members: [
          { name: 'Taraka Raghu Ram', role: 'Events Team', image: '/images/team/Ram.jpg' },
          { name: 'Aakash Dhyani', role: 'Events Team', image: '/images/team/Aakash.jpg' },
          { name: 'Ansh Yelore', role: 'Events Team', image: '/images/team/Ansh.jpg' },
          { name: 'Dyumna Negi', role: 'Events Team', image: '/images/team/Dyumna.jpg' },
        ],
      },
      {
        name: 'Finance Team',
        icon: 'dollar',
        description: 'Manages budgeting, fundraising, and financial planning for all club projects and activities.',
        color: 'green',
        members: [
          { name: 'Shirshendu R Tripathi', role: 'Finance Member', image: '/images/team/Shirshendu.jpg' },
          { name: 'Apurva Verma', role: 'Finance Member', image: '/images/team/Apurva.jpg' },
          { name: 'Shrreyansh Anil Singh', role: 'Finance Member', image: '/images/team/Shrreyansh.jpg' },
          { name: 'Rudra Chaudhary', role: 'Finance Member', image: '/images/team/Rudra.jpg' },
        ],
      },
      {
        name: 'Social Media Team',
        icon: 'hashtag',
        description: "Handles promotion, outreach, and communication of the club's activities and achievements.",
        color: 'pink',
        members: [
          { name: 'Rajyavardhan Singh Rathore', role: 'Social Media Team', image: '/images/team/Rajyavardhan.jpg' },
          { name: 'Vivek Malav', role: 'Social Media Team', image: '/images/team/Vivek.jpg' },
          { name: 'Bhawani', role: 'Social Media Team', image: '/images/team/Bhawani.jpg' },
          { name: 'Yash Dubey', role: 'Social Media Team', image: '/images/team/Yash.jpg' },
        ],
      },
      {
        name: 'Resources Team',
        icon: 'chart',
        description: 'Manages all club components, resources and inventory to support club operations.',
        color: 'purple',
        members: [
          { name: 'Laxman', role: 'Resources Team', image: '/images/team/Laxman.jpg' },
          { name: 'Sharad Gupta', role: 'Resource Team', image: '/images/team/Sharad.jpg' },
          { name: 'Shrreyansh Anil Singh', role: 'Resource Team', image: '/images/team/Shrreyansh.jpg' },
          { name: 'Harsh Giri', role: 'Resource Team', image: '/images/team/Harsh.jpg' },
          { name: 'Abhay', role: 'Resource Team', image: '/images/team/Abhay.jpg' },
        ],
      },
    ],
  },
  alumni: {
    heading: 'Alumni',
    subheading: 'Former members who helped shape AFC and continue to inspire us.',
    members: [
      // Batch 2020
      { name: 'Durganshu Mishra', role: 'Batch 2020', image: '/images/alumni/Durganshu Mishra 2016-2020.jpg', linkedIn: 'https://www.linkedin.com/in/durganshu/details/education/' },
      
      // Batch 2021
      { name: 'Vyom Sharma', role: 'Batch 2021', image: '/images/alumni/Vyom Sharma 2017-2021.jpg', linkedIn: 'https://www.linkedin.com/in/vyomsharma-vs/?originalSubdomain=in' },
      
      // Batch 2022
      { name: 'Piyush Sharma', role: 'Batch 2022', image: '/images/alumni/Piyush Sharma 2018-2022.jpg', linkedIn: 'https://www.linkedin.com/in/piyush-sharma-177108174/?originalSubdomain=in' },
      
      // Batch 2023
      { name: 'Ashi', role: 'Batch 2023', image: '/images/alumni/Ashi 2019-2023 batch.jpg', linkedIn: 'https://www.linkedin.com/in/ashiashi/?originalSubdomain=in' },
      
      // Batch 2024
      { name: 'Amar Bhong', role: 'Batch 2024', image: '/images/alumni/Amar Bhong 2020-2024.jpg', linkedIn: 'https://www.linkedin.com/in/amar-bhong-37bb38200/?originalSubdomain=in' },
      { name: 'Deepankar Kumar Chaudhary', role: 'Batch 2024', image: '/images/alumni/Deepankar Kumar Chaudhary 2020-2024.jpg', linkedIn: 'https://www.linkedin.com/in/dpnkrkr/?originalSubdomain=in' },
      { name: 'Ekansh Agarwala', role: 'Batch 2024', image: '/images/alumni/Ekansh Agarwala 2020-2024.jpg', linkedIn: 'https://www.linkedin.com/in/ekansh-agarwala/?originalSubdomain=in' },
      { name: 'Rajat Gupta', role: 'Batch 2024', image: '/images/alumni/Rajat Gupta 2020-2024.jpg', linkedIn: 'https://www.linkedin.com/in/-rajatgupta/?originalSubdomain=in' },
      { name: 'Rushil Ambastha', role: 'Batch 2024', image: '/images/alumni/Rushil Ambastha 2020-2024.jpg', linkedIn: 'https://www.linkedin.com/in/rushil-ambastha-093349219/?originalSubdomain=in' },
      
      // Batch 2025
      { name: 'Nitin Maurya', role: 'Batch 2025', image: '/images/alumni/Nitin Maurya 21-25.jpg', linkedIn: 'https://www.linkedin.com/in/nitin-maurya-8415a524b/' },
      { name: 'Ritik Jangid', role: 'Batch 2025', image: '/images/alumni/Ritik Jangid 2021-2025.jpg', linkedIn: 'https://www.linkedin.com/in/ritik-jangid-b24559238/?originalSubdomain=in' },
      { name: 'Rohit Sonkar', role: 'Batch 2025', image: '/images/alumni/Rohit Sonkar 2021-2025.jpg', linkedIn: 'https://www.linkedin.com/in/rohit-sonkar-4139b626b/?originalSubdomain=in' },
      { name: 'Rudresh Singh', role: 'Batch 2025', image: '/images/alumni/Rudresh Singh 2021-2025 batch.jpg', linkedIn: 'https://www.linkedin.com/in/rudresh-singh-792175229/?originalSubdomain=in' },
      { name: 'Sagar Shivhare', role: 'Batch 2025', image: '/images/alumni/Sagar Shivhare 2021-2025.jpg', linkedIn: 'https://www.linkedin.com/in/sagar-shivhare-652605210/?originalSubdomain=in' },
      { name: 'Uduta Sri Maha Chanakya Chandra', role: 'Batch 2025', image: '/images/alumni/Uduta Sri Maha Chanakya Chandra 21-25.jpg', linkedIn: 'https://www.linkedin.com/in/mahachanakya/?originalSubdomain=in' },
      { name: 'Vedang Mukadam', role: 'Batch 2025', image: '/images/alumni/Vedang Mukadam 2021-2025.jpg', linkedIn: 'https://www.linkedin.com/in/vedang-mukadam-0401a9392/?originalSubdomain=in' },
      
      // Batch 2026
      { name: 'Aditya Narayan Jaiswal', role: 'Batch 2026', image: '/images/alumni/Aditya Narayan Jaiswal 22-26.jpg', linkedIn: 'https://www.linkedin.com/in/aditya-narayan-jaiswal-4a946324a/?utm_source=chatgpt%2Ecom&originalSubdomain=in' },
      { name: 'Narayan Singh', role: 'Batch 2026', image: '/images/alumni/Narayan Singh 22-26 batch.jpg', linkedIn: 'https://www.linkedin.com/in/narayan-singh-284423259/?utm_source=chatgpt%2Ecom&originalSubdomain=in' },
    ],
  },
  contact: {
    heading: 'Get In Touch',
    subheading: "Have questions or want to collaborate? We'd love to hear from you!",
    locationTitle: 'Our Location',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.926989456789!2d79.91599931495984!3d23.177434584870032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a9006297c6a3%3A0x79a1a4030eeb7795!2sHall-1%2C%20IIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1760711351482!5m2!1sen!2sin',
    contactInfo: [
      { icon: 'email', title: 'Email', details: ['afc@iiitdmj.ac.in'], color: 'blue' },
      { icon: 'phone', title: 'Phone', details: ['+91 70009 47461', '+91 91403 40531'], color: 'green' },
      { icon: 'location', title: 'Location', details: ['AFC Workshop', 'Above Canteen, Hall-1', 'IIITDM Jabalpur', 'Pin: 482005'], color: 'red' },
    ],
    socialLinks: [
      { icon: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/afc_iiitdmj/', color: 'pink' },
      { icon: 'linkedin', label: 'LinkedIn', url: 'https://in.linkedin.com/company/aero-fabrication-club-iiitdmj', color: 'blue' },
      { icon: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/channel/UCYnz9APdl9-aM4S9pxrRsqA', color: 'red' },
    ],
  },
};

export function normalizeSiteContent(input: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    hero: { ...DEFAULT_SITE_CONTENT.hero, ...(input?.hero ?? {}) },
    about: {
      ...DEFAULT_SITE_CONTENT.about,
      ...(input?.about ?? {}),
      paragraphs: Array.isArray(input?.about?.paragraphs) ? input.about.paragraphs : DEFAULT_SITE_CONTENT.about.paragraphs,
      cards: Array.isArray(input?.about?.cards) ? input.about.cards : DEFAULT_SITE_CONTENT.about.cards,
    },
    projects: {
      ...DEFAULT_SITE_CONTENT.projects,
      ...(input?.projects ?? {}),
      items: Array.isArray(input?.projects?.items) ? input.projects.items : DEFAULT_SITE_CONTENT.projects.items,
    },
    gallery: {
      ...DEFAULT_SITE_CONTENT.gallery,
      ...(input?.gallery ?? {}),
      images: Array.isArray(input?.gallery?.images) ? input.gallery.images : DEFAULT_SITE_CONTENT.gallery.images,
    },
    events: {
      ...DEFAULT_SITE_CONTENT.events,
      ...(input?.events ?? {}),
      items: Array.isArray(input?.events?.items) ? input.events.items : DEFAULT_SITE_CONTENT.events.items,
    },
    achievements: {
      ...DEFAULT_SITE_CONTENT.achievements,
      ...(input?.achievements ?? {}),
      items: Array.isArray(input?.achievements?.items)
        ? input.achievements.items
        : DEFAULT_SITE_CONTENT.achievements.items,
      timeline: Array.isArray(input?.achievements?.timeline)
        ? input.achievements.timeline
        : DEFAULT_SITE_CONTENT.achievements.timeline,
    },
    team: {
      ...DEFAULT_SITE_CONTENT.team,
      ...(input?.team ?? {}),
      leadership: Array.isArray(input?.team?.leadership) ? input.team.leadership : DEFAULT_SITE_CONTENT.team.leadership,
      divisions: Array.isArray(input?.team?.divisions) ? input.team.divisions : DEFAULT_SITE_CONTENT.team.divisions,
    },
    alumni: {
      ...DEFAULT_SITE_CONTENT.alumni,
      ...(input?.alumni ?? {}),
      members: Array.isArray(input?.alumni?.members) ? input.alumni.members : DEFAULT_SITE_CONTENT.alumni.members,
    },
    contact: {
      ...DEFAULT_SITE_CONTENT.contact,
      ...(input?.contact ?? {}),
      contactInfo: Array.isArray(input?.contact?.contactInfo)
        ? input.contact.contactInfo
        : DEFAULT_SITE_CONTENT.contact.contactInfo,
      socialLinks: Array.isArray(input?.contact?.socialLinks)
        ? input.contact.socialLinks
        : DEFAULT_SITE_CONTENT.contact.socialLinks,
    },
  };
}
