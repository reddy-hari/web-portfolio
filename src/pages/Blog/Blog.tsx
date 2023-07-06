import { useDispatch, useSelector } from "react-redux";
import Navigation from "../../common/Navigation";
import { toggleDarkTheme } from "../../reducers/theme/themeSlice";
import { RootState } from "../../store/store";

function Blog() {
  const darkTheme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <div>
      <Navigation />
      <section style={{ padding: "1em" }}>
        <h1>Blog</h1>
        
        <a href="https://medium.com/hwoeirudf">fake</a>
        <a href="https://medium.com/">real</a>
      </section>
    </div>
  );
}

export default Blog;
