"use client";

import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName=usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName=="/restaurant/dashboard") {
      router.push("/restaurant");
    } else if(data && pathName=="/restaurant"){
        router.push("/restaurant/dashboard");

    }
    
    else {
      setDetails(JSON.parse(data));
    }
  }, []);

  const handleLogout=()=>{
    localStorage.removeItem("restaurantUser")
    router.push("/restaurant");
  }

  return (
    <>
      <div className="header-wrapper">
        <div>
          <img
            style={{ width: 100 }}
            src="https://image.similarpng.com/very-thumbnail/2020/12/Food-delivery-logo-with-bike-man-on-transparent-background-PNG.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {details && details.name ? (
              <>
                <li>
                  <Link href="/">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
