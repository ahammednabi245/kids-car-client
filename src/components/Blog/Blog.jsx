import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div>
            <div>
                <div className='bg-[#eaf3fa] px-4 py-5 mt-2 shadow mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg'>
                    <h1 className='text-center text-[#349ef5] text-3xl font-bold '><u>Question & Answer</u></h1>
                </div>
                <div className='bg-[#f0f8ff] px-4 py-5 mt-2 shadow mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg '>

                    <h1 className='text-2xl font-bold text-zinc-800  '> <li> What is an access token and refresh token? How do they work and where should we store them on the client-side?</li></h1>
                    <p className='text-lg font-medium'><u>Ans:</u> An access token is a security credential that is granted to a user or application after successful authentication. It is used to access protected resources, such as APIs or web services, and allows the user or application to perform authorized actions on behalf of the authenticated entity. A refresh token is also issued during authentication and is used to obtain a new access token when the current one expires, without requiring the user to re-enter their credentials. When a user or application receives an access token, it is typically stored in a secure manner on the client-side, such as in a browser's localStorage or a mobile app's secure storage. When making API requests, the access token is included in the request headers for authorization. Refresh tokens, however, should be stored securely on the server-side to prevent unauthorized access.

                    </p>
                </div>
                <div className='bg-[#f0f8ff] px-4 py-5 mt-2 shadow mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg'>

                    <h1 className='text-2xl font-bold text-zinc-800  '> <li> Compare SQL and NoSQL databases?</li></h1>
                    <p className='text-lg font-medium'><u>Ans:</u> SQL  is a programming language used for managing and manipulating relational databases. It provides a standardized syntax for defining, querying, and modifying database structures and data. SQL enables users to create, retrieve, update, and delete data records in a database. It is widely used in database management systems to interact with data, perform data analysis, and implement data-driven applications. NoSQL databases, or "non-relational" databases, are a type of database management system that provide flexible and scalable data storage solutions. Unlike traditional SQL databases, NoSQL databases do not adhere to a fixed schema and can handle unstructured or semi-structured data. They are designed to handle large volumes of data, high scalability, and high availability. NoSQL databases use different data models, such as key-value pairs, document-based, columnar, or graph-based, to efficiently store and retrieve data based on specific application requirements.

                    </p>
                </div>
                <div className='bg-[#f0f8ff] px-4 py-5 mt-2 shadow mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg'>

                    <h1 className='text-2xl font-bold text-zinc-800  '><li> What is express js? What is Nest JS?</li></h1>
                    <p className='text-lg font-medium'><u>Ans:</u>  Express js is a  framework for Node.js. It  process of building web applications and APIs by providing a set of robust features and middleware. Express.js allows developers to define routes, handle HTTP requests and responses, manage sessions and cookies, handle middleware functions, and integrate with various templating engines. It is highly customizable and widely used in building server-side applications and RESTful APIs in the Node.js ecosystem. Nest JS is a progressive and extensible TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js and leverages it's features while adding a layer of abstraction and additional functionalities. NestJS follows the architectural pattern of modules, controllers, and services, providing a structured and organized approach to application development. It supports dependency injection, middleware, routing, authentication, and many other features out of the box. With its focus on modularity and scalability, NestJS is commonly used for building robust and maintainable enterprise-grade applications using Node.js and TypeScript.

                    </p>
                </div>
                <div className='bg-[#f0f8ff] px-4 py-5 mt-2 shadow mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg'>

                    <h1 className='text-2xl font-bold text-zinc-800  '><li>What is MongoDB aggregate and how does it work ?</li>
                    </h1>
                    <p className='text-lg font-medium'><u>Ans:</u> The aggregate framework is used to perform advanced data analysis operations and transformations on collections of documents. It allows users to perform complex data aggregation tasks, such as grouping, filtering, sorting, joining, and computing aggregated values. The aggregate framework uses a pipeline concept, where multiple stages are defined sequentially to process the documents. It provides powerful capabilities for data manipulation and aggregation in MongoDB.  It works by processing data through a sequence of stages defined in a pipeline. Each stage performs a specific operation on the data and passes the results to the next stage. The pipeline stages can include filtering, grouping, projecting, sorting, and computing aggregate values. The input for the aggregate operation is typically a MongoDB collection. The resulting output is a set of documents that represent the aggregated data based on the operations specified in the pipeline stages. This allows for flexible and powerful data analysis and transformation in MongoDB.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;