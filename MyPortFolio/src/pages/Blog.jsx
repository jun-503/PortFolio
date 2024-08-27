


import { MDXProvider } from '@mdx-js/react';
import Highlight from '../Components/Highlight';
import CodeBlock from '../Components/CodeBlock';
import PortfolioOverview from '../blogs/first-post.mdx';
import TechnologyInsights from '../blogs/second-post.mdx';
import '../styles/BlogPage.css'; 
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const components = {
  Highlight,
  CodeBlock,
};

export default function BlogPage() {
  const {isDarkTheme}  =  useContext(ThemeContext)
  return (
    <div className="blog-page">
      <h1 className={isDarkTheme?"page-title-dark":"page-title"}>Blog</h1>
      <MDXProvider components={components}>
        <div className={"blog-content"}>
          <PortfolioOverview />
          <TechnologyInsights />
        </div>
      </MDXProvider>
    </div>
  );
}
