import { FaStar } from "react-icons/fa";
import { Card, CardContent } from "../ui/card";

export default function TestimonialsCard({
  name,
  descriptions,
}: {
  name: string;
  descriptions: string;
}) {
  return (
    <Card
      className={
        "bg-gradient-to-tr mx-5 from-gray-600 via-gray-700 to-gray-900 border-none shadow-2xl"
      }
    >
      <CardContent className="text-white   text-xl  p-6">
        <div className="flex items-center">
          <div className="w-11 uppercase font-semibold h-11 mr-4 bg-slate-200  justify-center items-center text-gray-900 flex rounded-full">
            {name[0]}
          </div>
          <div>
            <h2 className="font-raleway font-semibold">{name}</h2>

            <div className="flex">
              <FaStar size={16} className="fill-[#FFD35A]" />
              <FaStar size={16} className="fill-[#FFD35A]" />
              <FaStar size={16} className="fill-[#FFD35A]" />
              <FaStar size={16} className="fill-[#FFD35A]" />
              <FaStar size={16} className="fill-[#FFD35A]" />
            </div>
          </div>
        </div>
        <p className="my-5 text-sm">{descriptions}</p>
      </CardContent>
    </Card>
  );
}
