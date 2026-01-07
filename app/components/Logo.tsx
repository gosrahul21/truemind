import Image from "next/image";
import logo from '../logo-icon.png';
import truemindlabtextwhite from '../truemindlabstextwhite.png';
import truemindlabtxtblack from '../truemindtxtblack.png';
const Logo = ({color}: {color: string}) => {
  return (
    <div className="flex items-center  ">
      <Image draggable={false} src={logo} alt="Truemind Labs" width={50} height={50} />
    {color === 'white' ? (
      <Image draggable={false} src={truemindlabtextwhite} height={100} width={100} alt="Truemind Lawbs" />
    ) : (
      <Image draggable={false} src={truemindlabtxtblack} height={100} width={100} alt="Truemind Lawbs" />
    )}
  </div>

);
};

export default Logo;