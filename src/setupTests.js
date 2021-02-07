import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// to co jest tutaj jest po to aby pozwolić Enzyme dobrze pracować z Jest

configure({ adapter: new Adapter() });
