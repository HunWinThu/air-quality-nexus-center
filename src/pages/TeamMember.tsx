import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import teamPlaceholder from '@/assets/team-placeholder.jpg';
import { coreTeam, advisoryCommittee } from './Team';

interface Member {
  id: number;
  name: string;
  role?: string;
  department?: string;
  bio?: string;
  Expertise?: string;
  specialties?: string[];
  image?: string;
  viewprofile?: string; // may contain email or external link
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const setMeta = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export default function TeamMember() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const stateMember = (location.state as any)?.member as Member | undefined;

  const allMembers: Member[] = [...coreTeam, ...advisoryCommittee] as Member[];
  const found = slug ? allMembers.find((m) => slugify(m.name) === slug) : undefined;
  const member: Member | undefined = stateMember ?? found;

  useEffect(() => {
    const name = member?.name ?? 'Team Member';
    document.title = `${name} | AQC Team`;
    const desc = member?.bio
      ? `${member.name} – ${member.bio}`.slice(0, 155)
      : `Profile of ${name} at Air Quality Nexus Center`;
    setMeta('description', desc);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.href);
  }, [member]);

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-primary">Member not found</h1>
          <p className="mt-2 text-muted-foreground">The profile you are looking for does not exist.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const email = member.viewprofile && member.viewprofile.includes('@') ? member.viewprofile : undefined;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12 md:py-16">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:gap-12 md:grid-cols-5">
            {/* Profile image */}
            <aside className="md:col-span-2">
              <img
                src={member.image || teamPlaceholder}
                alt={`${member.name} - ${member.role || 'Team Member'}`}
                loading="lazy"
                className="w-full max-w-md mx-auto aspect-[3/4] object-cover border border-border bg-background shadow"
              />
            </aside>

            {/* Profile details */}
            <article className="md:col-span-3">
              <header>
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{member.name}</h1>
                {member.role && (
                  <p className="mt-2 text-lg italic text-muted-foreground">{member.role}</p>
                )}
                {email && (
                  <p className="text-sm text-muted-foreground mt-1">Email: <a className="text-primary hover:underline" href={`mailto:${email}`}>{email}</a></p>
                )}
              </header>

              {/* Divider */}
              <div className="border-t border-border my-6" />


              {/* Biography */}
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">Biography</h2>
                {member.bio && (
                  <p className="leading-relaxed text-muted-foreground">{member.bio}</p>
                )}
              </section>

              {/* Expertise */}
              {member.Expertise && (
                <section className="mt-8 space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Expertise</h2>
                  <p className="leading-relaxed text-muted-foreground">{member.Expertise}</p>
                </section>
              )}

            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
