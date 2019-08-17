import React from 'react';

interface SectionHeaderProps {
  header: string,
    className ?: string,
}
const SectionHeader: React.FC<SectionHeaderProps> = ({header, className = ''}) => {
  return (
   <h2 className={className} >
       {header}
    </h2>
  );
}

export default SectionHeader;
