import {ReactNode} from "react";

interface NewsItemProps {
    title: string;
    children: ReactNode;
}

const NewsItem = (props: NewsItemProps) => {
    return <div className="bg-stone-200 flex flex-col gap-6 p-4">
        <h2 className="font-bold">{props.title}</h2>
        <p>{props.children}</p>
    </div>
}

const NewsLayout = () => {
    return (
        <div className="bg-white text-black p-2 flex flex-col gap-2">
            <div className="bg-stone-200 p-4">
                <h1 className="text-xl font-bold">News site</h1>
            </div>
            <div className="grid grid-cols-2 min-[960px]:grid-cols-3 gap-2">
                <NewsItem title="Item heading 1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac hendrerit justo. Nullam ut metus
                    nec justo rhoncus ullamcorper a sed ipsum. Mauris euismod et turpis sed elementum.


                </NewsItem>
                <NewsItem title="Item heading 2">
                    Nam quis ante a mi interdum feugiat. Nulla nec arcu neque. Vestibulum eget justo vehicula, molestie
                    sapien vel, faucibus orci. Vestibulum nec ipsum suscipit, varius arcu in, imperdiet quam. Ut
                    hendrerit vehicula mi eu feugiat.

                </NewsItem>
                <NewsItem title="Item heading 3">
                    Duis accumsan lacus eu lectus semper, nec aliquam quam suscipit. Ut cursus nunc sed rhoncus
                    eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc posuere libero sed
                    ligula euismod efficitur. Nunc tempor tincidunt gravida. Nulla eu tellus sed urna finibus maximus.
                    Quisque vitae velit a magna gravida sollicitudin et nec felis.
                </NewsItem>
            </div>
            <footer className="bg-stone-200 p-4">
                © News site
            </footer>
        </div>
    );
}

export default NewsLayout;