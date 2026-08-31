import React from "react";
import { LeadForm, LeadFormProps } from "./LeadForm";

export const KidsLeadForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="kids" {...props} />
);

export const TeensLeadForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="teens" {...props} />
);

export const CompetitionLeadForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="competition" {...props} />
);

export const AdultsLeadForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="adults" {...props} />
);

export const SenseiAbaForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="sensei-aba" {...props} />
);

export const AchimLaChaimForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="achim-lachaim" {...props} />
);

export const GeneralLeadForm: React.FC<Partial<LeadFormProps>> = (props) => (
  <LeadForm initialSegmentId="general" showSegmentSelector {...props} />
);
