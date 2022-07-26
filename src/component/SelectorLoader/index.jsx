import ContentLoader from "react-content-loader"
import style from "./SelectorLoader.module.css"

const SceletonLoader = (props) => (
  <div className={style.root}>
    <ContentLoader
      speed={2}
      width={"100%"}
      height={520}
      viewBox="0 0 400 460"
      backgroundColor="#e6e6e6"
      foregroundColor="#aaa7a7"
      {...props}
    >
      <rect x={213 - 60} y="57" rx="10" ry="10" width="107" height="183" />
      <rect x={184 - 60} y="290" rx="2" ry="2" width="164" height="19" />
      <rect x={125 - 60} y="398" rx="2" ry="2" width="283" height="9" />
      <rect x={232 - 60} y="347" rx="2" ry="2" width="67" height="23" />
      <rect x={163 - 60} y="421" rx="2" ry="2" width="207" height="7" />
      <rect x={125 - 60} y="444" rx="2" ry="2" width="283" height="9" />
    </ContentLoader>
  </div>

)

export default SceletonLoader;