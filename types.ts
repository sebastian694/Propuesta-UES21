import { LucideIcon } from 'lucide-react';

export interface SectionProps {
  id: string;
  className?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface CredentialItem {
  label: string;
  value: string;
}

export interface RoadmapItem {
  phase: string;
  date: string;
  title: string;
  items: string[];
}
