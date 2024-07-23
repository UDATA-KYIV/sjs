import { Navigation } from "../../types/startInfo";

export const navigation: Navigation[] = [
  {
    title: "Services",
  },
  {
    title: "Projects",
  },
  {
    title: "About Us",
  },
  {
    title: "Career",
  },
];

export const systems = [
  { id: "partConcreteModel", name: "Concrete Model" },
  { id: "partSystem1", name: "System 1" },
  { id: "partSystem2", name: "System 2" },
  { id: "partSystem3", name: "System 3" },
  { id: "partSystemOt0her", name: "System Other" },
];

export interface SystemPart {
  id: string;
  name: string;
}

interface SystemsTest {
  global: SystemPart[];
  pipes: SystemPart[];
  other: SystemPart[];
}

export const systemsTest: SystemsTest = {
  global: [{ id: "partConcreteModel", name: "Concrete Model" }],

  pipes: [
    { id: "partSystem1", name: "System 1" },
    { id: "partSystem2", name: "System 2" },
    { id: "partSystem3", name: "System 3" },
  ],
  other: [{ id: "partSystemOt0her", name: "System Other" }],
};
