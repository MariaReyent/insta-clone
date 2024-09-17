import { Box, Flex, Spinner } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import NavBar from "../../components/NavBar/NavBar";

function PageLayout({ children }) {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = !location.pathname.startsWith("/auth") && user;
  const canRenderNavBar =
    !user && !loading && !location.pathname.startsWith("/auth");

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir={canRenderNavBar ? "column" : "row"}>
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {canRenderNavBar ? <NavBar /> : null}
      <Box
        flex={1}
        w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir="column" h="10vh" alignItems="center" justifyContent="center">
      <Spinner size="xl" />
    </Flex>
  );
};
