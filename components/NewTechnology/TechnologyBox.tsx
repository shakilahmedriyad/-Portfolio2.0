import Image from "next/image";

export default function TechnologyBox({
  logo,
  label,
}: {
  logo: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={logo}
        width={1920}
        height={1080}
        alt="react icons"
        className="w-14"
      />
      <p className="mt-1.5">{label}</p>
    </div>
  );
}
