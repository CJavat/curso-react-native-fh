import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen'
  },
  {
    name: 'Alerts',
    icon: 'alert-outline',
    component: 'AlertScreen'
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen'
  },
  {
    name: 'Infiniti Scroll',
    icon: 'download-outline',
    component: 'InfinitiScrollScreen'
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen'
  },
  {
    name: 'Change Theme',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen'
  },
];