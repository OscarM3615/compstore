type PropType = {
	title: string;
	subtitle?: string;
};

const Title = ({ title, subtitle }: PropType) => {
	return (
		<div className="mb-4">
			<p className="h2 text-center pb-2 border-bottom">{title}</p>
			{subtitle && <p className="text-center text-muted">{subtitle}</p>}
		</div>
	);
};

export default Title;
