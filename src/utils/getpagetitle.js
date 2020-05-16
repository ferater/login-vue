import { i18n } from 'src/boot/i18n.js';

const title = 'Uçuyoruuuzzz!';

export default function getPageTitle(key) {
  const hasKey = i18n.t(`route.${key}`);
  if (hasKey) {
    const pageName = i18n.t(`route.${key}`);
    return `${pageName} - ${title}`;
  }
  return `${title}`;
}
