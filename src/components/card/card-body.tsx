type CardBodyProps = {
  title?: string;
  description?: string;
  color?: string;
};

export default function CardBody(props: CardBodyProps) {
  const { title, description, color } = props;
  return (
    <div className="flex flex-col items-center [&>*]:mt-3">
      <div className={`${color} text-2xl font-semibold`}>{title}</div>
      <div className={`${color} text-base`}>{description}</div>
      <div className={`${color} text-sm font-medium leading-5`}>visit</div>
    </div>
  );
}
