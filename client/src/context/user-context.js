import React, { useState , useEffect, useContext, useMemo, useCallback } from "react"

const UsersContext = React.createContext({});

const UsersContextProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const loginHandler = (email, password) => {
    // לשלוח את השם והסיסמא לסרבר ולבדוק אם יש יוזר עם הסיסמא והמייל
    // אם כן הוא מחזיר אותו
    useEffect(() => {
      fetch("/api/users/",  
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        }
      )
        .then(response => response.json())
        .then(data => setUser(data))
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);

    if (user !== null) {
      localStorage.setItem("isLoggedIn","1");
      setIsLoggedIn(true);
    } else {
      window.confirm('one or more is not correct');
    }
  };

  // const signUpHandler = (name, city, email, password) => {
  //   localStorage.setItem("isLoggedIn","1")
  //   setIsLoggedIn(true);
  // };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  const value = useMemo(() => ({
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
    // onSignUp: signUpHandler,
    user: user,
  }), [user, isLoggedIn, logoutHandler, loginHandler]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useUsersContext() {
  return useContext(UsersContext);
}

export {
  UsersContextProvider,
  useUsersContext,
};




// ...........................................................................................

// אם היוזר עשה לוג אין או סיין אפ אז להפוך לטרו
// useEffect(() => {
//   const storedUserLoggedInInformaition = localStorage.getItem('isLoggedIn')

//   if (storedUserLoggedInInformaition === "1") {
//     setIsLoggedIn(true);
//   }
// },[])