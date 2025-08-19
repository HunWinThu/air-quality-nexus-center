import { MainLayout } from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Advisory Committee images only
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

export const advisoryCommittee = [
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

const Committee = () => {
  useEffect(() => {
    const title = 'Advisory Committee | Air Quality Nexus Center (AIT)';
    document.title = title;
    const desc = 'Meet the advisory committee of the Air Quality Nexus Center at AIT—leading experts in air quality, climate, and environmental health.';
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
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Advisory Committee
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our distinguished advisors bringing global expertise in air quality, climate, and environmental health.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Committee Members */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

    </>
  );
};

export default Committee;