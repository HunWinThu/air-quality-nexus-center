import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Replace these imports with actual images if available
import kim from '@/assets/prof.Kim.jpeg';
import huy from '@/assets/dr.huy.jpg';
import ktoo from '@/assets/Ms. Ktoo.jpg';
import Huyen from '@/assets/Dr. Truong Thi Huyen.jpg';
import Nguyen from '@/assets/ms-chi.jpg';
import Dang from '@/assets/dang.jpeg';
import Hun from '@/assets/Hun Win Thu.jpg';
import May from '@/assets/May.jpg';
import Pant from '@/assets/Ms. Keishu Pant.jpg';
                                         
import Ingyin from '@/assets/Ms. Ingyin Myint Swe.jpeg';
import Lohani from '@/assets/Advisory/Prof. Bindu N. Lohani.jpeg';
import Shrestha from '@/assets/Advisory/Prof. Ram Shrestha.jpeg';
import Hopke from '@/assets/Advisory/Prof. Philip Hopke.jpeg';
import Rupakheti from '@/assets/Advisory/Dr. Maheswar Rupakheti.jpg';
import Emberson from '@/assets/Advisory/Prof. Lisa Emberson.jpg';
import Vardoulakis from '@/assets/Advisory/Prof. Sotiris Vardoulakis.jpeg';
import Bond from '@/assets/Advisory/Prof. Tami C. Bond.jpg';
import Lung from '@/assets/Advisory/Dr. Shih-Chun Candice Lung.jpg';
import Zusman from '@/assets/Advisory/Dr. Eric Zusman.jpg';
import Saikawa from '@/assets/Advisory/Dr. Eri Saikawa.jpg';
import Broomfield from '@/assets/Advisory/Dr. Mark Broomfield.jpg';
import Mari from '@/assets/Advisory/Dr. Xavier Mari.jpeg';
import Casanova from '@/assets/Advisory/Ms. Dang Espita Casanova.jpeg';

import teamPlaceholder from '@/assets/team-placeholder.jpg';

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const coreTeam = [
  {
    id: 1,
    name: 'Prof. Dr. Nguyen Thi Kim Oanh',
    role: 'Director',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: "Prof. Nguyen Thi Kim Oanh, a distinguished professor and the founding director of the Center for Nexus of Air Quality, Health, Ecosystem, and Climate at the Asian Institute of Technology (AIT), is internationally recognized for her pioneering work on air pollution and climate in Asia, with a focus on the ASEAN region. With over 35 years of experience in research, education, consultancy, and capacity building, she has led the characterization of air pollution in Asian developing countries through field measurements, emission inventories, and modeling studies at urban, national, and regional scales. She has been recognized among the top 2% most cited scientists globally in Meteorology and Atmospheric Sciences (2021) and has received numerous international awards for her impact on environmental science and policy. As Principal Investigator(PI) or Co-PI, Prof. Kim Oanh has conducted more than 65 regional collaborative research projects, working closely with government agencies and international organizations to deliver science-based recommendations that have influenced environmental policy and public health improvements across the region. Her academic contributions are equally remarkable mentoring over 150 Master’s graduates, 16 PhD graduates, 13 international exchange students, and serving on committees for more than 30 PhD and 160 Master’s students from diverse fields. Prof. Kim Oanh is an active leader in the global atmospheric science community, serving as a member of the Science Panel of the Asia Pacific Clean Air Partnership (APCAP) since 2018, the WMO-GAW-ARCH working group since 2023, and holding past leadership roles including the Scientific Steering Committee of IGAC (2015–2018), co-chair of the IGAC Monsoon Asia and Oceania Networking Group (2016–2019), and vice-chair of the WMO–UNEP Integrated Assessment of Black Carbon and Tropospheric Ozone (2011). She also contributed as a WHO expert in the Global Air Quality Guidelines update (2021) and as a lead author of UNEP’s “Atmospheric Pollution in the Asia Pacific: Science-Based Solutions” (2019). Her lifelong dedication continues to shape regional and global approaches to improving air quality, protecting climate, and safeguarding public health.\n\nProf. Nguyen Thi Kim Oanh earned her Doctor of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 1994. She holds a Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand (1991) and a Diploma of Engineering from the Odessa Hydrometeorology Institute, Ukraine (1978).",
    Expertise: 'Air pollution monitoring; Dispersion modeling and receptor modeling; Emission inventory and projection; Emission control; Exposure assessment; Effects of air pollution on ecosystem; Meteorology and climate science; Climate co-benefits assessment; Industrial environmental management',
    specialties: ['Air Quality', 'Emission Inventory', 'Environmental Health'],
    image: kim,
    viewprofile: 'kim.oanh@ait.ac.th',
    researchgate: 'https://www.researchgate.net/profile/Nguyen-Thi-Oanh',
  },
  {  id: 2,
    name: 'Dr. Lai Nguyen Huy',
    role: 'Manager',
    department: 'Doctor of Engineering in Environmental Technology and Management, AIT',
    bio: 'Dr. Lai Nguyen Huy, an Air Quality Specialist and Research Specialist at the Asian Institute of Technology (AIT), has over ten years of professional experience in research, consultancy, and capacity building in atmospheric sciences. He is recognized for his expertise in air pollution data systems, including emission inventories, monitoring, modeling, and source apportionment, with a focus on Southeast Asia. Throughout his career, Dr. Lai has contributed to more than 22 research projects funded by prominent organizations such as UNEP, AFD, USAID, and the World Bank, serving as Co-PI, or key technical expert. His work spans air quality management, climate–air quality interaction, and co-benefit analysis, combining scientific rigor with practical policy applications. Actively engaging with government agencies, international organizations, and research networks, Dr. Lai has played a pivotal role in strengthening regional capacity for evidence-based environmental policy. His contributions have advanced understanding of air pollution issues and informed strategies for protecting human health, ecosystems, and the climate.\n\nDr. Lai Nguyen Huy earned his Doctor of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 2021. He holds a Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand (2015) and a Bachelor of Engineering in Biotechnology from the International University – Vietnam National University, Ho Chi Minh City, Vietnam (2012).',
    Expertise: 'Air pollution data systems (Inventory, Modelling, Monitoring, Source apportionment) with focus on Southeast Asia countries, Air pollution effect assessment (crops, acid deposition), Climate and air quality interaction, Co-benefit analysis.',
    specialties: ['Air Pollution Modeling', 'Monitoring', 'Data Analysis'],
    image: huy,
    viewprofile: 'lainguyenhuy@ait.asia',
    researchgate: 'https://www.researchgate.net/profile/Lai-Huy-2',

  },


  {
    id: 4,
    name: 'Ms. Nguyen Nhat Ha Chi',
    role: 'Research Specialist',
    department: 'Doctor of Philosophy in Environmental Technology and Management, AIT',
    bio: 'Dr. Ha Chi Nguyen Nhat, an Air Quality Specialist, brings advanced expertise in air quality modeling and environmental impact assessment. Her scholarly contributions include modeling PM₂.₅ for health impact assessment, and she has co-authored studies on emission inventories and atmospheric pollutants over urban regions in Southeast Asia. Dr. Ha Chi combines rigorous scientific research with practical application, supporting AIT’s efforts to integrate science-based solutions into air quality policy and protection of human and ecological health. Her contributions continue to strengthen the Center’s analytical capacity and regional leadership in atmospheric science.\n\nDr. Ha Chi earned her Doctor of Philosophy in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 2024. She holds a Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand (2018) and a Bachelor of Science in Environmental Science from the University of Natural Science, National University, Ho Chi Minh City, Vietnam (2012).',
    Expertise: 'Air quality and meteorology modeling; Emission inventory',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Nguyen,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',
    researchgate: 'https://www.researchgate.net/profile/Ha-Chi-Nguyen-Nhat'


  },

    {
    id: 3,
    name: 'Ms. Khing Thwe Oo',
    role: 'Research Associate',
    department: 'Master of Engineering in Environmental Engineering and Management, AIT',
    bio: 'Ms. Khing Thwe Oo, a Research Associate at the Asian Institute of Technology (AIT), has over a decade of experience in environmental and social impact assessments, project management, and climate change risk analysis. She is internationally recognized for her expertise in air pollution research, particularly in air quality monitoring, emission inventories, and source apportionment, with a focus on Myanmar and Southeast Asia. Her professional portfolio includes solid and hazardous waste management, environmental policy evaluation, and the implementation of environmental management plans. She has coordinated and contributed to numerous national and regional projects funded by organizations such as AFD, USAID, Sida, ADB, JICA, World Bank and the Norwegian Environment Agency (NEA), working closely with government bodies, NGOs, and international agencies. From 2019 to 2022, she served as Environment Safeguard Consultant at the Asian Development Bank (ADB) Myanmar Resident Mission, supporting the country’s environmental safeguard system and capacity building for government agencies. A certified Environmental Management System (EMS) Lead Auditor and a registered engineer with the Myanmar Engineering Council, Ms. Khing combines technical knowledge with strong stakeholder engagement and capacity-building skills. Her work has significantly contributed to advancing environmental governance, improving community resilience, and shaping sustainable development policies in the region.\n\nMs. Khing Thwe Oo earned her Master of Engineering in Environmental Technology and Management from the Asian Institute of Technology, Thailand in 2014. She also holds a Master of Engineering in Chemical Engineering (2012), a Bachelor of Engineering in Chemical Engineering (2009), and a Bachelor of Technology in Chemical Engineering (2008) from the Technology University Mandalay, Myanmar. Additionally, she obtained a Diploma in Food and Chemical Engineering from the Associateship of Government Technical Mandalay, Myanmar in 2005.',
    Expertise: ' 	Administration; Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: ktoo,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },

    {
    id: 5,
    name: 'Mr. Ha Quang Dang',
    role: 'Research Assistant',
    department: 'Bachelor of Engineering in Environmental Engineering, Hanoi University of Science and Technology (HUST),',
    bio: 'Mr. Ha Quang Dang, a Research Assistant at the Asian Institute of Technology (AIT), is an emerging environmental engineer with hands-on experience in air pollution monitoring, source apportionment, and environmental data analysis. He holds a Bachelor of Engineering in Environmental Engineering from Hanoi University of Science and Technology (HUST), Vietnam, graduating in 2024 with a strong academic record. At AIT, he contributes to the Kathmandu Clean Air Program (K-CAP) / USAID Clean Air project, conducting PM₂.₅ monitoring, receptor modeling, and road dust composition analysis for Kathmandu and Nepal. His research background includes developing emission maps for rice straw burning in Vietnam, satellite-based environmental data analysis, and participation in international projects such as the GreenUs Project under the Erasmus+ Programme and the CASA Project. Mr. Dang has also undertaken professional training and internships in Italy, Greece, Poland, Thailand, and Vietnam, enhancing his skills in circular economy, waste management, and environmental engineering solutions. Proficient in Python, Java, and data analysis tools, and fluent in Vietnamese and English with working knowledge of Japanese, he brings technical expertise, adaptability, and a collaborative spirit to regional environmental research initiatives.\n\nMr. Ha Quang Dang earned his Bachelor of Engineering in Environmental Engineering from the Hanoi University of Science and Technology (HUST), Vietnam in 2024.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Dang,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },

    {
    id: 6,
    name: 'Mr. Hun Win Thu',
    role: 'Research Assistant & IoT Engineer',
    department: 'Master of Engineering in Telecommunications, AIT',
    bio: 'Mr. Hun Win Thu, a Research Assistant and IoT Engineer at the Asian Institute of Technology (AIT), applies his expertise in telecommunications, IoT systems, and ICT solutions to support air pollution research and management projects across Southeast Asia. He is experienced in deploying and maintaining air quality monitoring networks, integrating sensor-based systems for real-time data acquisition, and configuring cloud platforms for remote monitoring, data visualization, and analysis. His technical skills include configuring LAN/WAN networks, troubleshooting routers, switches, wireless controllers, and firewalls, as well as developing automated workflows to streamline data management and reporting for research teams. At AIT’s Center, he is responsible for maintaining and updating the Center’s website, managing ICT infrastructure, and providing IoT technical support for projects such as air quality monitoring, emission inventories, and pollution source tracking. He works closely with researchers to design and implement low-cost sensor systems, ensure reliable data transmission, and optimize the performance of monitoring devices in the field. Proficient in tools like Cisco Packet Tracer, Wireshark, and various microcontroller platforms (Arduino, ESP32), he also leverages automation tools such as Make.com, Google Sheets, and Apps Script to enhance project efficiency.\n\nMr. Hun Win Thu earned his Master of Engineering in Telecommunications from the Asian Institute of Technology, Thailand in 2023, with a thesis on “Smart Energy Meter Monitoring for Real-Time Bill Payments Calculation.” He also holds a Bachelor of Engineering in Electronic and Communications (2020) and a Bachelor of Technological in Electronic and Communications (2017) from the Technological University Mandalay, Myanmar, where his undergraduate projects focused on robotic control systems and communication technologies.',
    Expertise: 'Research Assistant_ICT Support and IoT Engineer',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Hun,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },

    {
    id: 7,
    name: 'Ms. May Hnin Aye',
    role: 'Research Assistant & RS-GIS',
    department: 'Master of Science in Remote Sensing & GIS',
    bio: 'Ms. May Hnin Aye, a Geographic Information Systems (GIS) Analyst at the Asian Institute of Technology (AIT), specializes in remote sensing and geospatial analysis for environmental monitoring and land management. At the Center, she provides technical support in developing methodological frameworks to assess primary forest loss due to fires in Laos. Her responsibilities include sourcing, processing, and analyzing satellite data to monitor land-use and land-cover changes, with a particular focus on detecting and quantifying forest and agricultural land cover loss caused by fire events. With a strong foundation in both geography and technology, Ms. May Hnin Aye applies her expertise to produce high-quality geospatial intelligence products that inform research, policy, and conservation strategies. She is proficient in drone mapping, photogrammetry, and geospatial data analysis, and integrates advanced GIS and remote sensing tools to support decision-making processes in environmental and resource management. Her work combines technical precision with a commitment to addressing real-world environmental challenges through innovative spatial analysis approaches. Before joining the Center, she worked as a Program Assistant at the Unified Program of AIT, gaining valuable experience in academic coordination and technical support.\n\nMs. May earned her Master of Science in Remote Sensing and Geographic Information System from the Asian Institute of Technology, Thailand in 2024, a Master of Arts in Physical Geography from the University of Yangon, Myanmar in 2020, and a Bachelor of Arts in Geography from the University of Yangon, Myanmar. Her passion for the intersection of geography, technology, and environmental sustainability continues to drive her professional growth and contributions to the field.',
    Expertise: 'Remote Sensing and GIS Analyst',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: May,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },

    {
    id: 8,
    name: 'Ms. Keishu Pant',
    role: 'PhD Candidate',
    department: 'Student',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Pant,
    viewprofile: 'https://www.linkedin.com/in/kim-oanh/',

  },
  // Add more core team members as needed
];



export const advisoryCommittee = [
  //{
  //  id: 1,
  //  name: "Prof. Bindu N. Lohani",
  //  role: "Advisory Member",
  //  department: "University of Nepal, Clean Air Asia, AIT",
  //  bio: "Chancellor of University of Nepal, Chair of Clean Air Asia Board, Member of AIT Board of Trustee",
  //  alignTop: true,
  //  image: Lohani,
  //  viewprofile: "https://ait.ac.th/people/bindu-n-lohani/",
  //  linkedin: "https://www.linkedin.com/in/bindu-lohani-4a526a2/"
  //},
  {
    id: 2,
    name: "Prof. Ram Shrestha",
    role: "Advisory Member",
    department: "Asian Institute of Technology (AIT)",
    bio: "Emeritus Professor, Sustainable Energy Transition Program, Department of Energy and Climate Change, AIT. Editor of Energy-The International Journal and Energy Economics, and is a member of the Editorial Advisory Board of International Energy Journal",
    alignTop: true,
    image: Shrestha,
    viewprofile: "https://ait.ac.th/people/prof-ram-shrestha/",
    linkedin: "https://www.linkedin.com/in/ram-m-shrestha-3a6a8a40/?originalSubdomain=np"
  },
  {
    id: 3,
    name: "Prof. Philip Hopke",
    role: "Advisory Member",
    department: "Clarkson University, University of Rochester",
    bio: "Co-Editor-in-Chief, Science of the Total Environment, Bayard D. Clarkson Distinguished Professor Emeritus, Clarkson University. Adjunct Professor, Departments of Public Health Sciences and Environmental Medicine, University of Rochester School of Medicine and Dentistry, NY, USA",
    alignTop: false,
    image: Hopke,
    viewprofile: "https://www.clarkson.edu/people/philip-hopke",
    linkedin: "https://www.linkedin.com/in/philip-hopke-5b01409/"
  },
  {
    id: 4,
    name: "Dr. Maheswar Rupakheti",
    role: "Advisory Member",
    department: "Research Institute for Sustainability Helmholtz Centre Potsdam (RIFS), IPCC",
    bio: "Research Group Leader, Research Institute for Sustainability Helmholtz Centre Potsdam (RIFS), Germany. Vice Chair, WG-I, Intergovernmental Panel on Climate Change (IPCC)",
    alignTop: true,
    image: Rupakheti,
    viewprofile: "https://www.rifs-potsdam.de/en/people/maheswar-rupakheti",
    linkedin: "https://www.linkedin.com/in/maheswar-rupakheti/"
  },
  {
    id: 5,
    name: "Prof. Lisa Emberson",
    role: "Advisory Member",
    department: "Stockholm Environment Institute (SEI), University of York",
    bio: "Centre Director of the York office at the Stockholm Environment Institute (SEI). Professor of Environmental Science in the Environment & Geography Dept., University of York, UK",
    alignTop: true,
    image: Emberson,
    viewprofile: "https://www.york.ac.uk/environment-geography/people/lisa-emberson/",
    linkedin: "https://www.linkedin.com/in/lisa-emberson-7632871b/"
  },
  {
    id: 6,
    name: "Prof. Sotiris Vardoulakis",
    role: "Advisory Member",
    department: "University of Canberra, NHMRC HEAL Network",
    bio: "Director, NHMRC Healthy Environments and Lives (HEAL) National Research Network. Professor of Environmental Public Health, University of Canberra, Australia",
    alignTop: true,
    image: Vardoulakis,
    viewprofile: "https://researchprofiles.canberra.edu.au/en/persons/sotiris-vardoulakis",
    linkedin: "https://www.linkedin.com/in/sotiris-vardoulakis-b5759790/"
  },
  //{
  //  id: 7,
  //  name: "Prof. Tami C. Bond",
  //  role: "Advisory Member",
  //  department: "Colorado State University, USA",
  //  bio: "Scott Presidential Chair in Energy, Environment and Health. Professor, Mechanical Engineering; Joint Professor, Civil & Environmental Engineering; Affiliate, Systems Colorado University, Fort Collins, CO, USA",
  //  alignTop: true,
  //  image: Bond,
  //  viewprofile: "https://www.engr.colostate.edu/me/faculty/dr-tami-bond/",
  //  linkedin: "https://www.linkedin.com/in/tami-bond-195a07251/"
  //},
  {
    id: 8,
    name: "Dr. Shih-Chun Candice Lung",
    role: "Advisory Member",
    department: "Academia Sinica, Taiwan",
    bio: "Deputy Director, Research Center for Environmental Changes (RCEC), Academia Sinica, Taiwan",
    alignTop: true,
    image: Lung,
    viewprofile: "https://rcec.sinica.edu.tw/index_en.php?action=member&id=16",
    linkedin: "https://www.linkedin.com/in/shih-chun-candice-lung-1024b9205/"
  },
  {
    id: 9,
    name: "Dr. Eric Zusman",
    role: "Advisory Member",
    department: "Institute for Global Environmental Strategies (IGES), Japan",
    bio: "Research Director, Center for Sustainability Governance, Institute for Global Environmental Strategies (IGES), Japan",
    alignTop: true,
    image: Zusman,
    viewprofile: "https://www.iges.or.jp/en/about/staff/zusman-eric",
    linkedin: "https://www.linkedin.com/in/eric-zusman-0b52001/"
  }
];


const departments = [
  {
    name: 'Environmental Engineering and Management',
    description: 'Research and Expertise in air quality, emission inventory, and environmental health.',
    members: 10
  },
  {
    name: 'Air Quality Modeling',
    description: 'Focus on modeling, monitoring, and management of air pollution.',
    members: 5
  },
  {
    name: 'Sensor Technology',
    description: 'Development and deployment of air quality sensors and monitoring systems.',
    members: 3
  }
];

const Team = () => {
  useEffect(() => {
    const title = 'AQC Team | Air Quality Nexus Center (AIT)';
    document.title = title;
    const desc = 'Meet the AQC core team and advisory committee at AIT—experts in air quality, emissions, modeling and environmental health.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', desc);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.href);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated researchers and professionals at AIT working to improve air quality and environmental health.
            </p>
          </div>
        </div>
      </section>

      {/* Team Directory (Tabs) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="core" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="core" className="text-lg">Core Team</TabsTrigger>
                <TabsTrigger value="advisory" className="text-lg">Advisory Committee</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="core" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreTeam.map((member) => (
                  <Card key={member.id} className="group hover:shadow-lg transition-shadow duration-300 bg-background border border-border">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <img
                          src={member.image || teamPlaceholder}
                          alt={`${member.name} - ${member.role}`}
                          loading="lazy"
                          className={`w-56 h-72 border border-border bg-background mx-auto mb-4 object-cover ${member.alignTop ? 'object-top' : ''}`}
                        />
                        <Link to={`/team/${slugify(member.name)}`} state={{ member }} className="hover:underline">
                          <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                        </Link>
                        <p className="text-lg font-bold text-muted-foreground">{member.role}</p>
                        {member.department && (
                          <p className="text-sm text-muted-foreground">{member.department}</p>
                        )}
                      </div>

                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advisory" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advisoryCommittee.map((member) => (
                  <Card
                    key={member.id}
                    className="group hover:shadow-lg transition-shadow duration-300 bg-background border border-border"
                  >
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                         <img
                            src={member.image || teamPlaceholder}
                            alt={`${member.name} - ${member.role}`}
                            loading="lazy"
                            className={`w-56 h-72 border border-border bg-background mx-auto mb-4 object-cover ${member.alignTop ? 'object-top' : ''}`}
                          />
                        {member.viewprofile && member.viewprofile !== '' ? (
                          <a
                            href={member.viewprofile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                          </a>
                        ) : (
                          <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                        )}
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                        {member.department && (
                          <p className="text-sm text-muted-foreground">{member.department}</p>
                        )}
                      </div>
                      <p className="text-base text-muted-foreground mb-0 pt-3 text-center">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Team;