import Find from '~/components/Header/Find/Find';
import Home from '~/components/Header/Home/Home';
import Covid19 from '~/components/Header/Covid/Covid19';
import Example from '~/components/Example/Example';
import Blog from '~/components/Header/Blog/Blog';
import DetailBlog from '~/components/Header/DetailBlog/DetailBlog';
import AddNewBlog from '~/components/Header/Blog/AddNewBlog';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/find', component: Find },
    { path: '/cv', component: Covid19 },
    { path: '/example', component: Example },
    { path: '/blog', component: Blog },
    { path: '/blog/:id', component: DetailBlog },
    { path: '/add-new-blog', component: AddNewBlog },
];
export const privateRouter = [{}];
