import React from 'react';

interface ISectionHeader {
	header: string;
	className?: string;
}
const SectionHeader: React.FC<ISectionHeader> = ({ header, className = '' }) => {
	return <h2 className={className}>{header}</h2>;
};

export default SectionHeader;
