import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Nav() {
  // Tambahkan state untuk melacak item aktif
  const [activeItem, setActiveItem] = useState("Home");

  // Fungsi untuk memeriksa apakah item saat ini aktif
  const isActive = (item) => item === activeItem;

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <p className="text-2xl font-bold text-inherit">Robin Gibson</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {["Home", "About Me", "Projects", "CV"].map((item) => (
          <NavbarItem
            key={item}
            className={isActive(item) ? "active" : ""}
            onClick={() => setActiveItem(item)}
          >
            <Link href="#" color={isActive(item) ? "primary" : "foreground"}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
