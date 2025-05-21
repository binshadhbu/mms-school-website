import {User, Link} from "@heroui/react";

export default function UserCard() {
  return (
    <div className="text-gray-300">
        <User
      avatarProps={{
        src: "/logo.png",
      }}
      description={
        <Link isExternal href="https://x.com/jrgarciadev" size="sm">
          @jrgarciadev
        </Link>
      }
      name="Junior Garcia"
    />
    </div>
    
  );
}
