export type Language = 'en' | 'fr' | 'ar';

export interface ActivityItem {
  t: string;
  s: string;
  d: string;
  l: string[];
  scope: string;
  quote: string;
}

export interface SupplyPoint {
  t: string;
  p: string;
}

export interface ContentTranslation {
  title: string;
  menu: string;
  tagline: string;
  nav_activities: string;
  nav_about: string;
  nav_approach: string;
  cta_quote: string;
  h1: string;
  hero_p: string;
  hero_b1: string;
  hero_b2: string;
  hero_note: string;
  vis_k: string;
  vis_t: string;
  vis_c: string;
  cm1: string;
  cm2: string;
  sup_k: string;
  sup_h: string;
  sup_p: string;
  sup_more: string;
  act_h: string;
  act_p: string;
  act_btn: string;
  act_note: string;
  lbl_supply: string;
  lbl_options: string;
  lbl_scope: string;
  lbl_quote: string;
  acts: ActivityItem[];
  src_k: string;
  src_h: string;
  src_p: string;
  src_b: string;
  src_pts: SupplyPoint[];
  about_h: string;
  about_p: string;
  hub_k: string;
  hub_t: string;
  hub_n1: string;
  hub_n2: string;
  hub_n3: string;
  kp1_t: string;
  kp1_p: string;
  kp2_t: string;
  kp2_p: string;
  app_h: string;
  app_p: string;
  s1_t: string;
  s1_p: string;
  s2_t: string;
  s2_p: string;
  s3_t: string;
  s3_p: string;
  con_h: string;
  con_p: string;
  country: string;
  form_t: string;
  l_name: string;
  l_company: string;
  l_email: string;
  l_act: string;
  l_msg: string;
  form_help: string;
  form_btn: string;
  form_ok: string;
  foot_tag: string;
  back_top: string;
  foot_prop: string;
}
