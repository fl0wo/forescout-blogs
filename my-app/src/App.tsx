import React from 'react';
import Blog from "./classes/Blog";
import User from "./classes/User"
import './App.css';
import Category from './classes/Category';

import MaxWidthDialog from "./fragments/Dialog";


let blog_list = new Array<Blog>();

function doBlogList(blogs: Blog[]) {
  return (
    <div>
      {blogs.map(function (item: Blog, idx: number) {
        return (<div key={idx}>
          {item.render()}
        </div>)
      })}
    </div>
  );
};

function addSingleBlog(blog: Blog) {
  return (
    <div>
      {blog.render()}
    </div>
  );
};

const App: React.FC = () => {

  populateBlogs(blog_list);

  return (
    <div className="App">
      <header className="App-header">

        ForeScout Blog

{MaxWidthDialog()}
        {MaxWidthDialog()}
        {addSingleBlog(blog_list[0])}

        {doBlogList(blog_list)}

      </header>
    </div>
  );
};


function populateBlogs(blog_list: Array<Blog>) {

  let films = new Category("Film", "Category for Film's Blog");

  let flo = new User("Florian", "Sabani", "sabaniflorian@gmail.com");

  let blog = new Blog("Avengers Is A Good Film", "hi", new Date(), flo, films);

  for (let i = 0; i < 1; i++)
    blog_list.push(blog);
};

export default App;
