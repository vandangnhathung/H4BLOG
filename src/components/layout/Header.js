import { Button } from "components/button";
import Search from "components/dropdown/Search";
import { useAuth } from "contexts/auth-context";
import { debounce } from "lodash";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const menuLinks = [
  {
    url: "/",
    title: "Home",
    active: "header__active",
  },
  {
    url: "/top-rank",
    title: "Top rank",
    active: "header__active",
  },
  {
    url: "/contact",
    title: "Contact",
    active: "header__active",
  },
];

const HeaderStyles = styled.header`
  padding: 0 0 20px 0;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;
  top: 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .header-main {
    box-shadow: rgba(0, 0, 0, 0.7) 0px 4px 12px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
  }
  .header-auth {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo {
    display: block;
    max-width: 50px;
    margin-right: 5px;
  }
  .menu {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 40px;
    list-style: none;
    font-weight: 500;
    margin-right: auto;
    &-link {
      background-image: linear-gradient(
        to right,
        #54b3d6,
        #54b3d6 50%,
        #000 50%
      );
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease-in-out;
    }
    &-link:before {
      content: "";
      background: #54b3d6;
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }

    &-link:hover {
      background-position: 0;
    }

    &-link:hover::before {
      width: 100%;
    }
  }
  .search {
    margin-left: auto;
    padding: 15px 25px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 20px;
  }
  .search-input {
    flex: 1;
    padding-right: 45px;
    font-weight: 500;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 25px;
  }
  @media screen and (max-width: 1023.98px) {
    .logo {
      max-width: 30px;
    }
    .menu,
    .search,
    .header-button,
    .header-auth {
      display: none;
    }
    .header-button__custom {
      padding: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .header__active {
    background-image: linear-gradient(to right, #54b3d6, #54b3d6 50%, #000 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    &:before {
      content: "";
      background: #54b3d6;
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      transition: all 0.3s ease-in-out;
    }
  }
`;
const Header = () => {
  const { userInfo } = useAuth();
  const [filter, setFilter] = useState("");

  const handleSearchPost = debounce((e) => {
    setFilter(e.target.value);
  }, 250);
  return (
    <HeaderStyles>
      <div className="flex  items-center gap-x-10">
        <div className="header-main flex-1">
          <NavLink to="/" className="">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
          </NavLink>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? "menu-link header__active" : "menu-link"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts..."
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div> */}
          <div className="flex justify-end gap-5 items-center">
            <div className="flex justify-end gap-5 ">
              <div className="w-full max-w-[300px]">
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 border-solid rounded-lg"
                  placeholder="Search post..."
                  onChange={handleSearchPost}
                />
              </div>
            </div>
            {!userInfo ? (
              <Button
                type="button"
                height="56px"
                className="header-button header-button__custom"
                to="/sign-in"
                kind="button__custom"
              >
                Login
              </Button>
            ) : (
              <div className="header-auth">
                <Button
                  type="button"
                  height="56px"
                  className="header-button header-button__custom"
                  to="/dashboard"
                  kind="button__custom"
                >
                  Dashboard
                </Button>
              </div>
            )}
          </div>
          {userInfo && (
            <div className="header-right ml-5">
              <Link
                to={`/profile?id=${userInfo.uid}`}
                className="header-avatar border-transparent shadow-lg rounded-full transition-all   hover:-translate-y-1 hover:shadow-2xl"
              >
                <img src={userInfo?.avatar} alt="" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
