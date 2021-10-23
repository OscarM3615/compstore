type PropType = {
	title: string;
};

const Title = ({ title }: PropType) => {
	return <p className="h2 text-center mb-4 pb-2 border-bottom">{title}</p>;
};

export default Title;
