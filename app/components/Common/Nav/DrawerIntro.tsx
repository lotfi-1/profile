/** @format */

import DrawerLayout from "../DrawerLayout";
import Intro from "../Intro/Intro";

export const DrawerIntro = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
      <Intro />
    </DrawerLayout>
  );
};
