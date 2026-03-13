export const scrollToSection = (sectionName: string) => {
    // e.preventDefault();
    const element = document.getElementById(sectionName.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
  }