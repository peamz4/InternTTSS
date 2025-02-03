import React from "react";
import Link from "next/link"; 
import { Center, Tooltip } from "@mantine/core";
import {
  IconUser,
  IconBriefcase,
  IconPhone,
  IconTarget,
  IconClipboardList,
  IconMessageCircle,
} from "@tabler/icons-react";

const hexagons = [
  { label: "Dashboard", icon: IconUser, link: "/admin/dashboard" },
  { label: "About", icon: IconTarget, link: "/about" },
  { label: "Services", icon: IconBriefcase, link: "/services" },
  { label: "Resume", icon: IconClipboardList, link: "/resume" },
  { label: "Works", icon: IconBriefcase, link: "/works" },
  { label: "Testimonials", icon: IconMessageCircle, link: "/testimonials" },
  { label: "Contact", icon: IconPhone, link: "/contact" },
];

const HexagonNavigation: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-auto bg-gradient-to-b 2xl:mt-20">
      {/* เมนูแบบปกติสำหรับ mobile (sm) */}
      <div className="md:hidden flex flex-col items-start gap-4 mt-[-45px]">
        {hexagons.map((hex, index) => (
          <Link key={index} href={hex.link}>
        <div className="flex items-center gap-2 p-2 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-all">
          <hex.icon size={24} />
          {hex.label}
        </div>
          </Link>
        ))}
      </div>

      {/* Hexagon Navigation สำหรับ md ขึ้นไป */}
      <div className="hidden md:flex relative flex-col gap-[-10px]">
        {/* Row 1: 4 hexagons */}
        <div className="flex justify-center gap-2 mt-[-36px] xl:mt-[-48px] ">
          {hexagons.slice(0, 4).map((hex, index) => (
            <Tooltip label={hex.label} key={index} withArrow>
              <Link href={hex.link}>
                <div
                  className="group relative w-32 h-40 xl:w-48 xl:h-56 md:w-28 md:h-32  border border-gray-500 rounded-[10%] flex flex-col justify-center items-center shadow-lg
                  bg-[var(--mantine-color-gray-1)] hover:bg-[var(--mantine-color-primary-1)] dark:hover:bg-[var(--mantine-color-primary-9)] dark:bg-[var(--mantine-color-dark-6)] transition-all ease-in-out duration-300 hover:scale-105"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Center>
                    <hex.icon
                      size={50} /* คงที่ ไม่เพิ่มขนาดใน xl และ 2xl */
                      className="text-gray-900 dark:text-gray-200 transition-colors group-hover:text-orange-500"
                    />
                    <span className="absolute bottom-2 text-gray-700 dark:text-gray-300 mb-8 xl:mb-12 font-semibold text-sm xl:text-lg group-hover:text-orange-500 md:mb-4 md:text-[12px]">
                      {hex.label}
                    </span>
                  </Center>
                </div>
              </Link>
            </Tooltip>
          ))}
        </div>

        {/* Row 2: 3 hexagons */}
        <div className="flex justify-center gap-2 mt-[-36px] xl:mt-[-48px] md:mt-[-24px]">
          {hexagons.slice(4).map((hex, index) => (
            <Tooltip label={hex.label} key={index + 4} withArrow>
              <Link href={hex.link}>
                <div
                  className="group relative w-32 h-40 md:w-28 md:h-32 xl:w-48 xl:h-56 border border-gray-500 rounded-[10%] flex flex-col justify-center items-center shadow-lg 
                  bg-[var(--mantine-color-gray-1)] hover:bg-[var(--mantine-color-primary-1)] dark:hover:bg-[var(--mantine-color-primary-9)] dark:bg-[var(--mantine-color-dark-6)] transition-all ease-in-out duration-300 hover:scale-105"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Center>
                    <hex.icon
                      size={50} /* คงที่ ไม่เพิ่มขนาดใน xl และ 2xl */
                      className="text-gray-900 dark:text-gray-200 transition-colors group-hover:text-orange-500"
                    />
                    <span className="absolute bottom-2 text-gray-700 dark:text-gray-300 mb-8 xl:mb-12 font-semibold text-sm xl:text-lg group-hover:text-orange-500 md:mb-4 md:text-[12px]">
                      {hex.label}
                    </span>
                  </Center>
                </div>
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HexagonNavigation;
