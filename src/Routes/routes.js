import { ChatScreen } from "../Pages/ChatScreen/ChatScreen";
import { HomePage } from "../Pages/Home/Home";
import { SignIn } from "../Pages/SignIn/SignIn";
import { SignUp } from "../Pages/SignUp/SignUp";

const ALL_ROUTES = [
  { path: '/', component: HomePage, needAuthentication: false },
  { path: '/sign-up', component: SignUp, needAuthentication: false },
  { path: '/sign-in', component: SignIn, needAuthentication: false },
  { path: '/chat', component: ChatScreen }
]

export { ALL_ROUTES }
