# Installation

# Explanation

In this project I have chosen to use a combination between React and Redux, since I find it a very simple, yet very powerful, approach to single page applications. 

React is a simple, yet very powerful, tool to create responsive frontends that load fast and scale well.
Furthermore, React makes it easy to create isolated components, which can be used across different pages of the application, or even across different applications. Furthermore, I have chosen to use CSS-modules in this project, which makes it possible not only to isolate the React components, but also their corresponding styles - hereby avoiding stylesheet clashes. This creates a greater degree of reusability and flexibilities for the reusable components. For instance, a lot of the components that I use in this project, has actually been made for another project.  Some examples of reusable isolated components can be found in the ‘./src/components/app’ folder. I use React Router to route between the different pages in the application.

For state management I have chosen to use Redux, since I find it the most powerful state management library for React application. Redux is a simplified version of Facebooks own Flux pattern, and it allows you to have easy and predictable state management that perform very well - plus it has some very nice helpers libraries. Combined with something like reselect it also makes the performance quite good. Also, Redux makes it extremely easy to save the state of the application on a local device, which I have done with the browsers localStorage in this case. 

Another benefit of using React and Redux is that it makes your application extremely easy to test with something like Mocha and Chai. I have written some examples of tests, both for my components and for my reducers, which can be seen by running the ‘npm test’ script. I have not focused on writing 100% test coverage in this application because of the time constraints, but it can easily be done with a library like Istanbul.   

Last, but not least, I have chosen to use Webpack as my module bundler. Webpack is a very powerful tool that allows you to do a lot of different stuff during your build process. In this project I use webpack for things like setting up a development server with autoreload, compiling my ES6 code and compiling my CSS-modules with prefixes. But that is just the tip of the iceberg. Webpack can do a lot more than that.   

