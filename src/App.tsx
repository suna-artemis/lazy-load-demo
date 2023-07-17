import { useCallback, useEffect, useRef, useState } from "react";

import { User } from "./hooks/useApis";
import UserCard from "./UserCard";

import LoadingIcon from "./assets/LoadingIcon.gif";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const [limit] = useState(10);
  const footerRef = useRef(null);

  const fetchUsers = useCallback(() => {
    if (0 !== page) {
      fetch(
        `https://64b26cc538e74e386d55186e.mockapi.io/api/v1/users?page=${page}&limit=${limit}`
      ).then((res) => {
        if (200 === res.status) {
          res.json().then((jsonRes) => {
            setUsers((pre) => [...pre, ...jsonRes]);
          });
        }
      });
    } else {
    }
  }, [limit, page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    const footer = footerRef.current;
    if (footer) {
      const callback = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const target = entries[0] || {};
        const { isIntersecting, intersectionRatio } = target;

        const isInViewport =
          typeof isIntersecting !== "undefined"
            ? isIntersecting
            : intersectionRatio > 0;

        if (!isInViewport) {
          console.log("目标在视口外");
        } else {
          console.log("目标进入视口");
          setPage((prePage) => prePage + 1);
        }
      };

      const observer = new IntersectionObserver(callback, {
        threshold: 1,
      });
      observer.observe(footer);
    } else {
    }
  }, []);

  // useEffect(() => {
  //   delay(() => {
  //     fetch(
  //       `https://64b26cc538e74e386d55186e.mockapi.io/api/v1/users?page=${page}&limit=${limit}`
  //     ).then((res) => {
  //       if (200 === res.status) {
  //         res.json().then((jsonRes) => {
  //           setUsers(jsonRes);
  //         });
  //       }
  //     });
  //   }, 2000);

  //   const controller = new AbortController();
  //   const app = document.querySelector(".App");

  //   // if (app) {
  //   //   app.addEventListener(
  //   //     "wheel",
  //   //     (e) => {
  //   //       if (lastScrollTop !== app.scrollTop) {
  //   //         setLastScrollTop(app.scrollTop);
  //   //       }

  //   //       if (
  //   //         app.scrollHeight - app.clientHeight - app.scrollTop <=
  //   //           scrollBottom &&
  //   //         lastScrollTop !== app.scrollTop
  //   //       ) {
  //   //         setPage((prePage) => prePage + 1);
  //   //       }
  //   //     },
  //   //     {
  //   //       signal: controller.signal,
  //   //     }
  //   //   );
  //   // }

  //   return () => {
  //     // controller.abort();
  //   };
  // }, [limit, page]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      <footer
        ref={footerRef}
        className="user-list-footer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {users.length < 60 ? (
          <img
            style={{
              border: "4px solid green",
              maxHeight: 108,
            }}
            src={LoadingIcon}
            alt="loading"
          />
        ) : (
          <>end</>
        )}
      </footer>
    </div>
  );
};

export default App;
