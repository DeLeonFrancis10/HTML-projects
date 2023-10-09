import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  Github,
} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "Contractual", "Internship"];

export const experience = [
  { title: "Less than a Year", value: "0-1" },
  { title: "1 -2 Year", value: "1-2" },
  { title: "2 -6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6" },
];

export const popularSearch = [
  "Software Engineer",
  "Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Remote",
  "Full-Time",
  "Sales",
  "Office Assistant",
];

export const jobs = [
  {
    id: "1",
    company: {
      applyLink:'https://myjobstreet.jobstreet.com.ph/application/online-apply.php?AdvertisementSource=1&advertisement_id=13257728&fr=49&jobId=13259161&job_id=13259161&s=80&searchPath=%2Ffinance-analyst-jobs&token=0~b2d92193-3f08-4505-8c29-496e0f60b955&trackData=%7B%22ApplySource%22%3A7%7D',
      name: "San Miguel Foods",
      location: "Pagsig City",
      email: "customercare@sanmiguel.com.ph",
      about:
        "San Miguel Foods is one of the leading food companies in the Philippines. Its products and services span across the entire value chain - from animal feeds, fresh chicken and fresh meats to processed meats, dairy, spreads, oils, biscuits, coffee and jelly snacks, making it undoubtedly the most diversified food player in the country today. We operate a vertically-integrated business model in our meats business ranging from plantations, breeding, contract growing to processing and marketing of chicken and hogs. San Miguel Foods has captured the hearts of millions of Filipinos through products that are good tasting, of superior quality and adhere to the highest standards of food safety. Its strong brands, which include Magnolia, Purefoods, Tender Juicy, B-MEG, Monterey, Dari Crème, Star and La Pacita, have been symbols of trust, household names that have been deeply interwoven in the lives of Filipinos.",
      profileUrl: Twitter,
    },
    jobTitle: "Finance Analyst",
    location: "Pagsig City",
    jobType: "Full-Time",
    salary: "20k to 35k",
    detail: [
      {
        desc: "We are looking for a dynamic individual with a degree in BS Accountancy, ideally a Certified Public Accountant, to join our team. Experience with SAP is considered an advantage, along with proficiency in utilizing MS Office applications. Exceptional communication skills are a must. The role entails being based in Santa Rosa, Laguna, showcasing dedication and adaptability to contribute effectively in this location. Join us to be part of an exciting opportunity where your expertise and commitment will make a significant impact.",

        requirement:
          "Professional License (Passed Board/Bar/Professional License Exam)"
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      applyLink:'https://www.foundit.com.ph/seeker/single-page-registration?from=Bebee&spl=PH_paid_job_boards_acq_affiliates_Bebee_Feed&gd=1&jobid=67419553&action=apply&utm_campaign=PH_paid_job_boards_acq_affiliates_Bebee_Feed&utm_medium=affiliates&utm_source=Bebee',
      name: " CHAMP Cargosystems",
      location: "Taguig, Philippines",
      email: "sales@smshospitalitynetwork.com",
      about:
      "CHAMP Cargosystems provides the most comprehensive range of integrated IT solutions and distribution services for the air cargo transport chain. The portfolio spans core management systems, eCargo solutions and Insights. The company serves over 200 airlines and GSAs, and links these with some 3,000 forwarders and GHAs worldwide. CHAMP's solutions help its customers and their clients adapt to critical and continuous changes in air transport logistics to meet global trade demands. Headquartered in Luxembourg, we have over 400 employees located in offices in Frankfurt, London, Manila, Singapore and Zurich, as well as Atlanta. We are currently in the process of building the next generation of cargo management applications using modern and widely use technologies and we are looking for motivated people to join our team of interdisciplinary developers. We are currently looking for a Senior Software Engineer to join our team. The role will be reporting to a Team Leader.",
      profileUrl: Google,
    },
    jobTitle: "Software Engineer",
    location: "Taguig, Philippines",
    jobType: "Full-Time",
    salary: "35k to 50k",
    detail: [
      {
        desc: "CHAMP Cargosystems is building systems that power the business of cargo airlines all over the world providing solutions for the whole cargo management chain including reservation and booking management, revenue, handling & customs declaration and balancing the weight of the cargo inside the plane. We have multiple APIs exposed via Google's Apigee platform - and are looking for motivated software engineers to further develop APIs on this platform to join our team.",

        requirement:
          "Bachelor's Degree in Information Technology, Computer Science, Computer Engineering or Equivalent",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      applyLink:"https://myjobstreet.jobstreet.com.ph/application/online-apply.php?AdvertisementSource=1&advertisement_id=13256091&fr=49&jobId=13257524&job_id=13257524&s=80&searchPath=%2FQuartz-Business-Products-Corporation-jobs&token=0~c8d4dfac-ffb3-48cd-88ab-b74eb36226cb&trackData=%7B%22ApplySource%22%3A7%7D",
      name: "Quartz Business Products Corporation",
      location: "15th Floor, Capital House, 9th avenue corner 34th st. Bonifacio Global City, Taguig City 1630",
      email: "sales@quartz.com.ph",
      about:
        "Quartz Business Products Corp. is one of the Philippines’ leading information technology (I.T.) products and solutions corporate reseller in the market today. It provides hundreds of corporations with innovative and reliable I.T. solutions and is the chosen solutions provider for most of the Philippines’ top 100 corporations.",
      profileUrl: Linkedin,
    },
    jobTitle: "IT Technician",
    location: "Bonifacio Global City, Taguig City",
    jobType: "Full-Time",
    salary: "18k to 22k",
    detail: [
      {
        desc: "As an on-site technical support specialist for Multifunction Printer Devices, I am dedicated to configuring, installing, and troubleshooting these devices at customer locations. My priority is to respond promptly and professionally to customer support requests, ensuring swift and accurate resolution or escalation of issues as necessary. Adhering to service level agreements, I guarantee the timely and effective delivery of technical support services. I possess the expertise to diagnose and address both hardware and software problems and provide comprehensive training to end-users for troubleshooting and understanding device functionality. Scheduled preventive maintenance and effective management of supplies inventory, including toners, kits, and parts, are integral aspects of my role. I collaborate closely with the services team and supervisor to coordinate daily activities, ticket closure, and escalations, always aiming to deliver exceptional customer service and maintain positive customer relationships. Regular preparation of detailed weekly reports on activities and repair cases helps in assessing performance and devising improvement initiatives. To stay up-to-date with the latest advancements, I continually maintain technical competence by seeking certifications, attending relevant trainings, and utilizing available documentation and knowledge-based resources to assist customers effectively.",

        requirement:
          "Candidate must possess a Bachelor’s/College Degree in Computer Science/ Information Technology/ Engineering or equivalent",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      
      name: "Clemson University",
      location: "Clemson, SC",
      email: "is@clemson.edu",
      contact: "864-656-3614",
      about:
        "Ranked as the 27th best national public university by U.S. News & World Report, Clemson is dedicated to teaching, research and service. Founded in 1889, we remain committed both to world-class research and a high quality of life. Our beautiful college campus sits on 20,000 acres in the foothills of the Blue Ridge Mountains, along the shores of Lake Hartwell. And we also have research facilities and economic development hubs throughout the state of South Carolina.",
      profileUrl: Spotify,
    },
    jobTitle: "IT Technician III",
    location: "Clemson, SC",
    jobType: "Full-Time",
    salary: "45530",
    detail: [
      {
        desc: "Design, install, and implement all network cabling infrastructure to support LAN's, wireless Access, wire, switches, and routers for network servers and/or telecommunications networks. Design and manage structured cabling systems. Supervise Division 27 contractors ensuring quality workmanship and adherence to industry and university standards. Complete quality work for high level University projects. Performs other duties as assigned.",

        requirement:
          "Education -  A bachelor's degree in information technology systems, computer science, or related field and experience in information technology systems or related area. Relevant experience may be substituted for bachelor's degree on a year-for-year basis. Valid Driver's License Work Experience: 3+ years",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "CONDUENT",
      location: "Sandy, UT 84070",
      email: "conduent.com",
      contact: "conduent.com",
      about:
        "Through our dedicated associates, Conduent delivers mission-critical services and solutions on behalf of Fortune 100 companies and over 500 governments - creating exceptional outcomes for our clients and the millions of people who count on them. You have an opportunity to personally thrive, make a difference and be part of a culture where individuality is noticed and valued every day.",
      profileUrl: Facebook,
    },
    jobTitle: "IT Operations Analyst I",
    location: "Sandy, UT 84070",
    jobType: "Full-Time",
    salary: "43159",
    detail: [
      {
        desc: "As a Network Administrator you will be troubleshooting, implementing, and administering all network components and systems. You must be able to understand and troubleshoot enterprise scale environments. You will be supporting Cisco technologies.",

        requirement:
          "Experience with Cisco technologies. Experience with monitoring software's Have an associate or bachelor's degree in a related field or equivalent work experience. Have any related certifications (Cisco, Palo Alto, VMware, Microsoft, etc.)",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "Iron Systems",
      location: "Cambridge MA - USA",
      email: "info@ironsystems.com",
      contact: "+(1) 408-943-8000",
      about:
        "Iron Systems is an innovative, customer-focused provider of custom computing infrastructure platforms including network servers, storage, OEM/ODM appliances, IoT & embedded systems. For more than 15 years, customers have trusted us for our innovative problem solving combined with our “IRON Holistic” business model for design, engineering, supply chain management, integration, forward/reverse logistics, and global field support services.",
      profileUrl: WhatsApp,
    },
    jobTitle: "Desktop Support L1",
    location: "Cambridge MA - USA",
    jobType: "Contractual",
    salary: "44900",
    detail: [
      {
        desc: "As an Onsite Support Technician, experience in service delivery and End user hardware and software Configuration troubleshooting providing quality services to the end users which includes the following key roles and responsibilities, but not limited to: Provide customer facing end-user support that includes: Install and Configure desktops, laptops, mobile devices, and associated Peripherals and related Software. Perform Break Fix, Desk Side Support, IMACD's, Data Migration, Refreshes, etc. Perform onsite updates, Configuration changes, or Software installations. Provide onsite technical assistance to End Users etc.",

        requirement:
          "Desired Qualifications: BS/BA in Computer Science, Information systems, or an equivalent combination of education or Experience: Experience with various desktop systems, operating systems, and diverse technical environments. Excellent customer service orientation and verbal communication skills. Experience Supporting Windows Operating Systems, MS Office, VPN, local and Network printing, Notebooks and mobile devices. Ability to install software for and troubleshoot a wide range of applications. Analytical thinking and problem-solving ability. CompTIA A+ certification or equivalent certification. Flexible for travelling to remote sites or cluster. Provide assistance for network relates issues. Should be able to lift weight up to 30 lbs at waist level. Update the inventory of phones, peripherals and system cards( like TDM, digital and CPU cards etc.) to network voice team. Testing the cables using the tester for IP phone and TDM phones from patch panel to user’s desk. Punching the cable for different type of panel like patch panel or IDF or MDF for krone with krone tool and punching tool Update the circuit inventory and vendor details for service provider to network voice team.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "7",
    company: {
      name: "Cass Information Systems, Inc.",
      location: "13001 Hollenberg Drive Bridgeton, MO 63044",
      email: "314-506-5500",
      contact: "314-506-5500",
      about:
        "Cass Information Systems, Inc. is a leading provider of integrated information and payment management solutions. Cass enables enterprises to achieve visibility, control and efficiency in their supply chains, communications networks, facilities and other operations. Disbursing over $80 billion annually on behalf of clients, and with total assets in excess of $2.4 billion, Cass is uniquely supported by Cass Commercial Bank. Cass is part of the Russell 2000®.",
      profileUrl: Instagram,
    },
    jobTitle: "Sr. Database Admin",
    location: "Bridgeton Bridgeton, MO, USA",
    jobType: "Full-Time",
    salary: "73200",
    detail: [
      {
        desc: "The Sr. Database Administrator is responsible for supporting all utilities SQL server databases and ensuring their performance, availability, and security within both the production and development environments.",

        requirement:
          "KNOWLEDGE AND MINIMUM REQUIREMENTS: Strong self-sufficiency and initiative working on database projects. Ability to manage internal and external MS SQL database security. Strong analytical, organizational, documentation and communications skills. Ability to work in a dynamic, deadline oriented environment. A bachelor’s degree in computer science or related field or equivalent experience. 3-5 years of experience in developing windows and/or web based SQL applications. 1-3 years of experience in a database management role. Experience managing multiple Microsoft SQL 2005/2008 on large systems. Practical experience in monitoring and tuning databases. In depth, hands-on experience with Transactional SQL, and stored procedures. In depth SQL server database administration experience. Microsoft SQL server certification is preferred.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "8",
    company: {
      name: "Adient",
      location: "Riverside MO",
      email: "+ 1 734 254 5000",
      contact: "+ 1 734 254 5000",
      about:
        "Adient (NYSE: ADNT) is a global leader in automotive seating. With approximately 75,000 employees in 31 countries, Adient operates more than 200 manufacturing/assembly plants worldwide. We produce and deliver automotive seating for all major OEMs. From complete seating systems to individual foam, trim and metal components, our expertise spans every step of the automotive seat-making process. Our integrated, in-house skills allow us to take our products from research and design to engineering and manufacturing — and into more than 20 million vehicles every year. For more information, visit www.adient.com",
      profileUrl: Youtube,
    },
    jobTitle: "IT Database Analyst",
    location: "Riverside MO",
    jobType: "Full-Time ",
    salary: "57400",
    detail: [
      {
        desc: "IT Analyst will support resources for hardware, communications, networking, software and shop-floor systems run at the manufacturing facility. Analyzes system issues and provides solutions or escalates to next level support teams. Consult with plant management on continuous improvement ideas nd new requirements. Project Management or key team member of projects to deliver new/changed services. Partner with Product Group IT Manager and Group/Corporate IT to implement new initiatives and follow defined standards. Responsible for the daily operations of computer systems including but not limited to the following:  system administration, security, process adherence, documentation and equipment installation and system backups. Provides key Plant IT contact for internal and external Adient customers. Communicates plant IT business requirements and activities. Ensures company IT activities are communicated in a timely fashion to the plant management. Responsible for IT tasks related to launches nd communicating updates at readiness reviews. Other duties deemed necessary by the Engineering Manager or Plant Manager. Actively supports plant safety efforts through departmental participation in safety meetings and safety walks.",

        requirement:
          "Bachelors’ Degree in IT Or Associates/Technical Degree in IT related field, with 2+ years IT experience Communication, analytical, project management and problem-solving skills. Support multiple work streams. Desire to have broad responsibilities and work in fast paced environment. Windows administrative knowledge (Servers and PCs) Experience with Networking Infrastructure and Architecture",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "9",
    company: {
      name: "Compass Health Network",
      location: "Rolla, MO",
      email: "844-853-8937",
      contact: "844-853-8937",
      about:
        "Compass Health Network is a nonprofit health care organization that provides a full continuum of behavioral health services and supports as well as primary and dental health services throughout Missouri. Our roots trace back to 1974 when we first began strategizing ways to increase access to behavioral health care in Missouri. Since then, two leaders in the mental health field in Missouri, Jerry Osborne, founder of Pathways Community Health, and Karl Wilson, founder of Crider Health Center, worked tirelessly to build a complete continuum of behavioral health, substance use disorder, primary care, and dental services for those most in need. As those organizations merged in 2014 to include Royal Oaks Hospital, a state-of-the-art inpatient behavioral health facility, today’s Compass Health Network is poised to help its customers achieve full, productive, healthy lives.",
      profileUrl: Github,
    },
    jobTitle: "Technology Specialist",
    location: "Rolla, MO",
    jobType: "Full-Time",
    salary: "29/hour",
    detail: [
      {
        desc: "The Technology Specialist provides intermediate level monitoring and response to technology issues utilizing the company service desk as well as a variety of hardware/software tools and techniques. They provide intermediate level software and systems troubleshooting, support, and training to end users. This is a full-time, benefit eligible position working Monday-Friday. A weekend on-call rotation will be required 2-3 times per year.",

        requirement:
          "-High School/GED degree required -Associate/Bachelor’s degree in Computer Science or related field preferred -At least four (4) years’ experience preferred. QUALIFICATION(S): LICENSURE/CERTIFICATION: CompTIA, Microsoft, or other technical certification training required.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Feedback"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Microsoft Corporation",
    location: "Califonia",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  {
    _id: 9,
    name: "GitHub",
    location: "Quezon City",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Github,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "Github",
    lastName: "Incorporation",
    email: "support@code.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Github,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
