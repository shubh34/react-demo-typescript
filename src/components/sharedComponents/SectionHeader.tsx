import React from 'react';

interface SectionHeaderProps {
    name: string,
    className ?: string,
}
const SectionHeader: React.FC<SectionHeaderProps> = ({name, className = ''}) => {
  return (
   <h2 className={className} >
       {name}
    </h2>
  );
}

export default SectionHeader;
