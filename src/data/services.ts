// Sample destinations used by all variants so Julian compares register, not content.
// Once a variant is picked, this becomes the real services list (eventually
// fed by services.toml + Cloudflare drift sync — parked while CI strategy
// settles).

export type Service = {
  name: string;
  blurb: string;
  host: string;
  status: 'live' | 'forthcoming' | 'archived';
  order: number;
};

export const services: Service[] = [
  {
    name: 'Curriculum vitae',
    blurb: 'The record.',
    host: 'cv.corbet.ch',
    status: 'live',
    order: 10,
  },
  {
    name: 'Writing',
    blurb: 'Notes and longer pieces.',
    host: 'write.corbet.ch',
    status: 'forthcoming',
    order: 20,
  },
  {
    name: 'Design',
    blurb: 'Visual reference for corbet.ch surfaces.',
    host: 'design.corbet.ch',
    status: 'live',
    order: 30,
  },
  {
    name: 'CareerVector',
    blurb: 'Application tracking for senior careers.',
    host: 'careervector.corbet.ch',
    status: 'live',
    order: 40,
  },
  {
    name: 'Baggage limits',
    blurb: 'Airline baggage rules, compared.',
    host: 'baggagelimits.corbet.ch',
    status: 'live',
    order: 50,
  },
  {
    name: 'Dotkeeper',
    blurb: 'Peer-to-peer file sync with git history.',
    host: 'dotkeeper.corbet.ch',
    status: 'live',
    order: 60,
  },
];
