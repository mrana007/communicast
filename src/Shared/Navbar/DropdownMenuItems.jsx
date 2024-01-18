import { DropdownItem, DropdownMenu } from "@nextui-org/react";

const DropdownMenuItems = () => {
  return (
    <div>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="settings">Settings & privacy</DropdownItem>
        <DropdownItem key="team_settings">Help & support</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuItems;
