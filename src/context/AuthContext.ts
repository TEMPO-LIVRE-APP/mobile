import { createContext, PropsWithChildren, useState } from "react";
import { AuthContextParamList, AuthResponseData } from "../types";

const AuthContext = createContext<AuthContextParamList>({} as AuthContextParamList);
