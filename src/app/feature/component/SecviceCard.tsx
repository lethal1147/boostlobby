type ServiceCardProps = {
	text: string;
	Icon: React.ReactNode;
};

function ServiceCard({ text, Icon }: ServiceCardProps) {
	return (
		<div className=" bg-main-blue shadow-md col-span-1 p-5 rounded-[10px] flex flex-col gap-3 hover:translate-y-[-5px] transition-all">
			{Icon}
			<p className="font-bold">{text}</p>
		</div>
	);
}

export default ServiceCard;
