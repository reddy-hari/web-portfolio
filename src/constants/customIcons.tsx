import { ReactComponent as PostgreSQLIcon } from "../assets/svg/postgresql.svg";
import { ReactComponent as AWSIcon } from "../assets/svg/aws.svg";
import { ReactComponent as JSIcon } from "../assets/svg/js.svg";
import { ReactComponent as JavaIcon } from "../assets/svg/java.svg";
import { ReactComponent as TSIcon } from "../assets/svg/ts.svg";
import { ReactComponent as HTML5Icon } from "../assets/svg/html.svg";
import { ReactComponent as CSS3Icon } from "../assets/svg/css.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/react.svg";
import { ReactComponent as VueIcon } from "../assets/svg/vue.svg";
import { ReactComponent as AngularIcon } from "../assets/svg/angular.svg";
import { ReactComponent as NodeIcon } from "../assets/svg/node.svg";
import { ReactComponent as MySQLIcon } from "../assets/svg/mysql.svg";
import { ReactComponent as MongoDBIcon } from "../assets/svg/mongodb.svg";
import { ReactComponent as JenkinsIcon } from "../assets/svg/jenkins.svg";
import { ReactComponent as JSONIcon } from "../assets/svg/json.svg";
import { ReactComponent as LinuxIcon } from "../assets/svg/linux.svg";
import { ReactComponent as GitIcon } from "../assets/svg/git.svg";
import { ReactComponent as GithubIcon } from "../assets/svg/github.svg";
import { ReactComponent as GitlabIcon } from "../assets/svg/gitlab.svg";
import { ReactComponent as KubernetesIcon } from "../assets/svg/kubernetes.svg";
import { ReactComponent as DockerIcon } from "../assets/svg/docker.svg";
import { ReactComponent as AzureIcon } from "../assets/svg/azure.svg";
import { ReactComponent as NextJSIcon } from "../assets/svg/nextjs.svg";
import { ReactComponent as ReduxIcon } from "../assets/svg/redux.svg";
import { ReactComponent as BitbucketIcon } from "../assets/svg/bitbucket.svg";
import { ReactComponent as ArduinoIcon } from "../assets/svg/arduino.svg";
import { ReactComponent as PlaywrightIcon } from "../assets/svg/playwright.svg";
import { ReactComponent as NPMIcon } from "../assets/svg/npm.svg";
import { ReactComponent as ApacheIcon } from "../assets/svg/apache.svg";
import { ReactComponent as JestIcon } from "../assets/svg/jest.svg";
import { ReactComponent as SeleniumIcon } from "../assets/svg/selenium.svg";
import { ReactComponent as SpringIcon } from "../assets/svg/spring.svg";
import { ReactComponent as AtlassianIcon } from "../assets/svg/atlassian.svg";
import { ReactComponent as ReactQueryIcon } from "../assets/svg/reactquery.svg";
import { ReactComponent as ReactRouterIcon } from "../assets/svg/reactrouter.svg";
import { ReactComponent as AxiosIcon } from "../assets/svg/axios.svg";

const CustomIcons: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  js: JSIcon,
  ts: TSIcon,
  java: JavaIcon,
  html5: HTML5Icon,
  css3: CSS3Icon,
  react: ReactIcon,
  redux: ReduxIcon,
  reactQuery: ReactQueryIcon,
  axios: AxiosIcon,
  reactRouter: ReactRouterIcon,
  angular: AngularIcon,
  vuejs: VueIcon,
  node: NodeIcon,
  spring: SpringIcon,
  nextjs: NextJSIcon,
  postgresql: PostgreSQLIcon,
  mysql: MySQLIcon,
  mongodb: MongoDBIcon,
  jest: JestIcon,
  playwright: PlaywrightIcon,
  selenium: SeleniumIcon,
  jenkins: JenkinsIcon,
  aws: AWSIcon,
  azure: AzureIcon,
  docker: DockerIcon,
  kubernetes: KubernetesIcon,
  git: GitIcon,
  github: GithubIcon,
  gitlab: GitlabIcon,
  bitbucket: BitbucketIcon,
  json: JSONIcon,
  linux: LinuxIcon,
  npm: NPMIcon,
  arduino: ArduinoIcon,
  apache: ApacheIcon,
  atlassian: AtlassianIcon,
};

export default CustomIcons;
