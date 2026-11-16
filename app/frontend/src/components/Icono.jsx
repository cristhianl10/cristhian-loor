import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  Cancel01Icon,
  ChevronDownIcon,
  Copy01Icon,
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  MapPinIcon,
  Menu01Icon,
  Moon02Icon,
  Sun01Icon,
  Tick02Icon,
  TrophyIcon,
} from '@hugeicons/core-free-icons';

function crearIcono(icono) {
  return function Icono(props) {
    return <HugeiconsIcon icon={icono} strokeWidth={1.7} {...props} />;
  };
}

export const ArrowDown = crearIcono(ArrowDown01Icon);
export const ArrowUpRight = crearIcono(ArrowUpRight01Icon);
export const Check = crearIcono(Tick02Icon);
export const ChevronDown = crearIcono(ChevronDownIcon);
export const Copy = crearIcono(Copy01Icon);
export const Github = crearIcono(GithubIcon);
export const Linkedin = crearIcono(Linkedin01Icon);
export const Mail = crearIcono(Mail01Icon);
export const MapPin = crearIcono(MapPinIcon);
export const Menu = crearIcono(Menu01Icon);
export const Moon = crearIcono(Moon02Icon);
export const Sun = crearIcono(Sun01Icon);
export const X = crearIcono(Cancel01Icon);
export const Trophy = crearIcono(TrophyIcon);
