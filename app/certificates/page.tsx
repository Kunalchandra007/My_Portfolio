import type { Metadata } from 'next';
import CertificatesPage from '@/components/CertificatesPage';

export const metadata: Metadata = {
  title: 'Certificates',
  description: 'Courses, workshops, and the contests behind Kunal Chandra’s achievements.',
  alternates: { canonical: '/certificates' },
};

export default function Page() {
  return <CertificatesPage />;
}
