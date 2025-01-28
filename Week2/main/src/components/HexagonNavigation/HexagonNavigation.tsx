import React from "react";
import Link from "next/link"; // Import Link from next/link
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
    <div className="relative flex justify-center items-center h-auto bg-gradient-to-b">
      <div className="relative flex flex-col gap-[-10px]">
        {/* Row 1: 4 hexagons */}
        <div className="flex justify-center gap-2">
          {hexagons.slice(0, 4).map((hex, index) => (
            <Tooltip label={hex.label} key={index} withArrow>
              <Link href={hex.link}>
                <div
                  className="group relative w-48 h-56 border border-gray-500 rounded-[10%] flex justify-center items-center shadow-lg
                  bg-[var(--mantine-color-gray-1)] dark:bg-[var(--mantine-color-dark-6)] transition-all ease-in-out duration-300 hover:scale-105"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Center>
                    <hex.icon
                      size={40}
                      className="text-gray-900 dark:text-gray-200 transition-colors group-hover:text-orange-500"
                    />
                  </Center>
                  <span className="absolute bottom-2 text-gray-700 dark:text-gray-300 mb-8 font-semibold text-lg group-hover:text-orange-500">
                    {hex.label}
                  </span>
                </div>
              </Link>
            </Tooltip>
          ))}
        </div>

        {/* Row 2: 3 hexagons (shifted right to interlock) */}
        <div className="flex justify-center gap-2 mt-[-35px]">
          {hexagons.slice(4).map((hex, index) => (
            <Tooltip label={hex.label} key={index + 4} withArrow>
              <Link href={hex.link}>
                <div
                  className="group relative w-48 h-56 border border-gray-500 rounded-[10%] flex justify-center items-center shadow-lg
                  bg-[var(--mantine-color-gray-1)] dark:bg-[var(--mantine-color-dark-6)] transition-all ease-in-out duration-300 hover:scale-105"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <Center>
                    <hex.icon
                      size={40}
                      className="text-gray-900 dark:text-gray-200 transition-colors group-hover:text-orange-500"
                    />
                  </Center>
                  <span className="absolute bottom-2 text-gray-700 dark:text-gray-300 mb-8 font-semibold text-lg group-hover:text-orange-500">
                    {hex.label}
                  </span>
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
