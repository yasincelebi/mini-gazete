import { Link, withRouter } from "react-router-dom";
import React from "react";
import { Menu } from "semantic-ui-react";

const Categories = ({ history, hambClass, isHumb, handleSon }) => {
  // NewsAPI does not have a list for these
  const cats = [
    { id: 1, name: "Business", value: "business" },
    { id: 2, name: "Sports", value: "sports" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "General", value: "general" },
    { id: 5, name: "Health", value: "Health" },
    { id: 6, name: "Science", value: "sports" },
    { id: 7, name: "Technology", value: "technology" },
  ];

  return (
    <>
      {cats.map((e, i) => {
        const { id, name, value } = e;
        const handleClick = () => {
          history.push(`/categories/${name.toLowerCase()}`, {
            id,
            name,
            value,
          });
        };
        return (
          <>
            {isHumb ? (
              <Menu.Item
                name="topnews"
                onClick={handleClick}
                value=""
                className={hambClass}
                key={id}
              >
                <Link
                  to={`${name.toLowerCase()}`}
                  className={hambClass}
                  onClick={handleSon}
                >
                  {name}{" "}
                </Link>
              </Menu.Item>
            ) : (
              <Menu.Item
                name="topnews"
                onClick={handleClick}
                value=""
                className={hambClass}
              >
                <Link to="/">{name}</Link>
              </Menu.Item>
            )}
          </>
        );
      })}
    </>
  );
};

export default withRouter(Categories);
