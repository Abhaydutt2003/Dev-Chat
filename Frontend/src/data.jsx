import CodeLogo from "./assets/code.svg";
import MessageLogo from "./assets/message.svg";
import UsersLogo from "./assets/users.svg";
import PhoneLogo from "./assets/phone.svg";
import SettingLogo from "./assets/settings.svg";

//all the info for the sideBar components
export let SidebarButtonInfo = [
  {
    height: "h-16",
    width: "w-16",
    logoHeight: "37px",
    logoWidth: "37px",
    mt: "mt-6",
    logo: CodeLogo,
  },
  {
    height: "h-12",
    width: "w-12",
    logoHeight: "24px",
    logoWidth: "24px",
    mt: "mt-10",
    logo: MessageLogo,
  },
  {
    height: "h-12",
    width: "w-12",
    logoHeight: "24px",
    logoWidth: "24px",
    mt: "mt-10",
    logo: UsersLogo,
  },
  {
    height: "h-12",
    width: "w-12",
    logoHeight: "24px",
    logoWidth: "24px",
    mt: "mt-10",
    logo: PhoneLogo,
  },
  {
    height: "h-12",
    width: "w-12",
    logoHeight: "24px",
    logoWidth: "24px",
    mt: "mt-5",
    logo: SettingLogo,
  },
];

//all the themes that will be used in the project
export let themes = {
  light:'retro',
  dark:'coffee'
}
